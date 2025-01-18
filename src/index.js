const express = require('express');
const cors = require('cors');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));


const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb) {
    cb(null, 'profile-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB limit
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
});


function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

let customers = [];
let nextId = 1;


const JWT_SECRET = 'your-secret-key';


const customerSchema = Joi.object({
  fname: Joi.string().required().min(2),
  lname: Joi.string().required().min(2),
  email: Joi.string().required().email(),
  contact: Joi.string().required().pattern(/^\d{10,12}$/),
  status: Joi.string().valid('active', 'inactive').required()
});

const loginSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8)
});


const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};


app.post('/login', (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  // For demo purposes - replace with actual database authentication
  if (req.body.email === 'Admin@2.com' && req.body.password === 'Test@123') {
    const token = jwt.sign({ email: req.body.email }, JWT_SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/customers', authenticateToken, (req, res) => {
  const { name } = req.query;
  if (name) {
    const filteredCustomers = customers.filter(customer => 
      `${customer.fname} ${customer.lname}`.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filteredCustomers);
  }
  res.json(customers);
});

app.get('/customers/:id', authenticateToken, (req, res) => {
  const customer = customers.find(c => c.id === req.params.id);
  if (!customer) return res.status(404).json({ message: 'Customer not found' });
  res.json(customer);
});

app.post('/customers', [authenticateToken, upload.single('profile')], (req, res) => {
  const { error } = customerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const customer = {
    id: String(nextId++),
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    contact: req.body.contact,
    status: req.body.status,
    profile: req.file ? `/uploads/${req.file.filename}` : null,
    createdDate: new Date().toISOString()
  };

  customers.push(customer);
  res.status(201).json(customer);
});

app.put('/customers/:id', [authenticateToken, upload.single('profile')], (req, res) => {
  const { error } = customerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const customer = customers.find(c => c.id === req.params.id);
  if (!customer) return res.status(404).json({ message: 'Customer not found' });

  customer.fname = req.body.fname;
  customer.lname = req.body.lname;
  customer.email = req.body.email;
  customer.contact = req.body.contact;
  customer.status = req.body.status;
  if (req.file) {
    customer.profile = `/uploads/${req.file.filename}`;
  }

  res.json(customer);
});

app.delete('/customers/:id', authenticateToken, (req, res) => {
  const customerIndex = customers.findIndex(c => c.id === req.params.id);
  if (customerIndex === -1) return res.status(404).json({ message: 'Customer not found' });

  customers.splice(customerIndex, 1);
  res.status(204).send();
});


const fs = require('fs');
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
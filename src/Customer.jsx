import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Modal } from 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent, faUsers } from '@fortawesome/free-solid-svg-icons';




 export default function Customer() {
  const [validate,setValidate]=useState(false)

  const [input,setInput]=useState({
    fname:"",lname:"",status:"",contact:"",email:"",files:""
  })

   const handleChange=(e)=>{
    const {name,value}=e.target;
     setInput({
      ...input,
      [name]:value,
  });}
  
  
   
  
  
   

   
    const handleAction = (action) => {
      if (action === "edit") {
        alert("Edit clicked");
      } else if (action === "view") {
        alert("View clicked");
      } else if (action === "delete") {
        alert("Delete clicked");
      }
    };
    
 
  



   const handleSubmit=(e)=>{
     e.preventDefault();
     {
      if(input.fname==="" || input.lname ==="" || input.contact===""|| input.files==="" || input.email==="") {
        alert("please fill all fields!")
       }
      
      console.log("data submitted:",input);
     }
   }
 
 

  return (
    <>

      <div className="container-fluid d-flex">
        <div className="row">
        
          <div className="main-container">

            <p className='title mt-5' style={{ textAlign: "left", padding: "1%" }}>Customer</p>
            <div className="container">
              <div className="row">
                <div className="col">
                  <label></label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control" style={{
                      width: "190px",
                      color: " #888787",
                      border: " 1px solid #fc8019", borderRadius: "-2%",
                    }}
                    placeholder="Name"
                    minLength={4}
                    required />
                </div>
                <div className="col">
                  <label></label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control" style={{
                      width: "190px",
                      color: " #888787",
                      border: " 1px solid #fc8019", borderRadius: "-2%",
                    }}
                    placeholder="Email"
                    minLength={4}
                    required />
                </div>
                <div className="col">
                  <label></label>
                  <input
                    type="text"
                    name="fname"
                    className="form-control" style={{
                      width: "190px",
                      color: " #888787",
                      border: " 1px solid #fc8019", borderRadius: "-2%",
                    }} placeholder="Phone no."
                    minLength={4}
                    required />
                </div>
                <div className="col">
                  <label htmlFor="status" className="status"></label>
                  <select
                    className="form-select" style={{
                      width: "190px",
                      color: " #888787",
                      border: "1px solid #fc8019", borderRadius: "-2%",
                    }}
                    name="status">
                    <option value="">Select Status</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div> <br />
                <div className="col mt-2" style={{
                  display: "flex",
                  gap: "20px",
                  height: "53px"
                }}>
                  <i className=" mt-3 bi bi-arrow-clockwise" color="#fc8019" style={{
                    width: "38px", fontSize: "25px",
                    color: "rgb(252, 128, 26)",
                    border: "1px solid rgb(252, 128, 25)",
                    borderRadius: "15%",
                    textAlign: "center"
                  }}></i>
                  <i className=" mt-3 bi bi-search" style={{
                    width: "38px", fontSize: "21px", padding: "2px",
                    color: "rgb(252, 128, 26)",
                    border: "1px solid rgb(252, 128, 25)",
                    borderRadius: "15%",
                    textAlign: "center"
                  }}></i>
                </div>
                <div className="col" data-bs-toggle="modal" data-bs-target="#Modal" style={{ textAlign: "end" }}><br />
                  <button className="btn" type="button" style={{
                    width: "90px",
                    borderRadius: "3px",
                    background: " rgb(252, 128, 25)",
                    color: "rgb(255, 255, 255)",
                    height: "30px",
                    textAlign: "center", padding: "0"
                  }}>Add</button>
                </div>
              </div>
            </div>

            <div className="table">
              <table>
                <tr>
                  <th>#</th>
                  <th>Profile</th>
                  <th>Customer Name</th>
                  <th>Phone Number</th>
                  <th>Email-Id</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td><img src="src/assets/pic.jpg" className="rounded-circle" alt="profile" style={{ width: "38%", height: "80%", }} /></td>
                  <td>Annette Black</td>
                  <td>92434567890</td>
                  <td>ckctm12@gmail.com</td>
                  <td><button className="button" style={{ textAlign: "center" }}>Active</button></td>
                  <td>
                    <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-three-dots"></i>
  </button>
  <ul class="dropdown-menu">
    <li style={{textAlign: "center",}}><a class="dropdown-item"onClick={()=>handleAction("edit") }href="#"><i class="bi bi-pencil-square"></i></a></li>
    <li style={{textAlign: "center",}}><a class="dropdown-item"  href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-eye"></i></a></li>
    <li style={{textAlign: "center",}}><a class="dropdown-item" onClick={()=>handleAction("delete")}href="#"><i class="bi bi-trash-fill"></i></a></li>
  </ul>
</div>
</td>
               
                  
                </tr>
                <tr>
                  <td>2</td>
                  <td><img src="src/assets/pic.jpg" className="rounded-circle" alt="profile" style={{ width: "38%", height: "80%", }} /></td>
                  <td>Annette Black</td>
                  <td>92434567890</td>
                  <td>ckctm12@gmail.com</td>
                  <td><button className="button">Active</button></td>
                  <td> 
                  <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-three-dots"></i>
  </button>
  <ul class="dropdown-menu">
    <li style={{textAlign: "center",}}><a class="dropdown-item"onClick={()=>handleAction("edit") }href="#"><i class="bi bi-pencil-square"></i></a></li>
    <li style={{textAlign: "center",}}><a class="dropdown-item"  href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-eye"></i></a></li>
    <li style={{textAlign: "center",}}><a class="dropdown-item" onClick={()=>handleAction("delete")}href="#"><i class="bi bi-trash-fill"></i></a></li>
  </ul>
</div></td>
                   {/* view customers */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content" style={{height:"360px",background:"#FFFAF9"}}>
      <div class="modal-header" style={{justifyContent:"space-between",border:"none",padding:"0"}}>
      <p class="inter modal-title" id="exampleModalLabel" style={{marginLeft:"36%",fontSize: "24px",fontWeight: "600",textAlign: "center",}}>View Customer Details</p>
        <button type="button" class="btn" data-bs-dismiss="modal" style={{background: "rgba(252, 128, 25, 1)",borderRadius: "6px",color: "white",}}>Edit</button>
      </div>
      <div class="modal-body" style={{display:"flex",padding:"0",marginLeft:"3%"}}>
      <img src="/src/assets/cust.png" alt="" srcset="" style={{width:"244px", height:"240px" ,background:" rgba(231, 231, 231, 1)", borderRadius:"20px",}}/>
      <div className="user" style={{display:"flex",paddingTop:"30px", gap:"30px"}}>
      
     <ul style={{listStyle:"none",
    fontWeight: "400",
    fontFamily: "Inter",
    fontSize: "20px",
}}>   <li style={{color: "rgba(49, 49, 49, 1)",fontSize:"24px",fontFamily:"Inter",fontWeight:"600"}} >John Rick</li>
      <li style={{color: "rgba(49, 49, 49, 1)",marginBottom:"4px"}} >Name</li>
      <li style={{color: "rgba(49, 49, 49, 1)",marginBottom:"4px"}}>Email</li>
      <li style={{color: "rgba(49, 49, 49, 1)",marginBottom:"4px",}}> Created Date</li>
      <li style={{color: "rgba(49, 49, 49, 1)",marginBottom:"4px",}}>Status</li>
     </ul>
     <ul style={{listStyle:"none",padding:"4px",
    fontWeight: "400",
    fontFamily: "Inter",
    fontSize: "20px",
}}><br /><li></li>
      <li style={{color: "rgba(136, 135, 135, 1)",marginBottom:"4px"}}>Name</li>
      <li style={{color: "rgba(136, 135, 135, 1)",marginBottom:"4px"}}>Email</li>
      <li style={{color: "rgba(136, 135, 135, 1)",marginBottom:"4px"}} >Created Date</li>
      <li style={{color: "rgba(136, 135, 135, 1)",marginBottom:"4px"}} >
        <button type="button " class="btn" style={{
    background: "#e1ffe9",
    color: "green",
    height: "34px",
    width: "70px",
    textAlign: "center",
    borderRadius: "8px",
}}>
  Active <span class="badge mt-2 text-bg-secondary"></span>
</button></li>
     </ul>
    </div>
      </div>
      <div class="modal-footer" style={{justifyContent:"center",border:"none",padding:"0"}}>
        <button type="button" class="btn" style={{border: "1px solid rgba(248, 60, 7, 1)",color:"rgba(248, 60, 7, 1)",borderRadius:"10px",
}}>Cancel</button>
    </div>
  </div>
</div>
</div>
                </tr>
                <tr>
                  <td>3</td>
                  <td><img src="src/assets/pic.jpg" className="rounded-circle" alt="profile" style={{ width: "38%", height: "80%", }} /></td>
                  <td>Annette Black</td>
                  <td>92434567890</td>
                  <td>ckctm12@gmail.com</td>
                  <td><button className="button">Active</button></td>            
                  <td>
                  <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-three-dots"></i>
  </button>
  <ul class="dropdown-menu">
    <li style={{textAlign: "center",}}><a class="dropdown-item"onClick={()=>handleAction("edit") }href="#"><i class="bi bi-pencil-square"></i></a></li>
    <li style={{textAlign: "center",}}><a class="dropdown-item"  href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-eye"></i></a></li>
    <li style={{textAlign: "center",}}><a class="dropdown-item" onClick={()=>handleAction("delete")}href="#"><i class="bi bi-trash-fill"></i></a></li>
  </ul>
</div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><img src="src/assets/anime.jpg" className="rounded-circle" alt="profile" style={{ width: "38%", height: "80%", }} /></td>
                  <td>Annette Black</td>
                  <td>92434567890</td>
                  <td>ckctm12@gmail.com</td>
                  <td><button className="button">Active</button></td>
                  <td>   <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-three-dots"></i>
  </button>
  <ul class="dropdown-menu">
    <li style={{textAlign: "center",}}><a class="dropdown-item"onClick={()=>handleAction("edit") }href="#"><i class="bi bi-pencil-square"></i></a></li>
    <li style={{textAlign: "center",}}><a class="dropdown-item"  href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-eye"></i></a></li>
    <li style={{textAlign: "center",}}><a class="dropdown-item" onClick={()=>handleAction("delete")}href="#"><i class="bi bi-trash-fill"></i></a></li>
  </ul>
</div></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><img src="src/assets/anime.jpg" className="rounded-circle" alt="profile" style={{ width: "38%", height: "80%", }} /></td>
                  <td>Annette Black</td>
                  <td>92434567890</td>
                  <td>ckctm12@gmail.com</td>
                  <td><button className="button">Active</button></td>
                  <td>   <div class="dropdown">
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-three-dots"></i>
  </button>
  <ul class="dropdown-menu">
    <li style={{textAlign: "center",}}><a class="dropdown-item"onClick={()=>handleAction("edit") }href="#"><i class="bi bi-pencil-square"></i></a></li>
    <li style={{textAlign: "center",}}><a class="dropdown-item"  href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-eye"></i></a></li>
    <li style={{textAlign: "center",}}><a class="dropdown-item" onClick={()=>handleAction("delete")}href="#"><i class="bi bi-trash-fill"></i></a></li>
  </ul>
</div></td>
                </tr>


              </table>
            </div>
          </div>
        </div>
      </div>

      
      
      {/* Adding customer modal */}

      
    <div
      className="modal fade"
      id="Modal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-xl"> 
        <div className="modal-content">
          <div className="modal-header" style={{justifyContent:"center",}}>
            <p className="modal-title fs-4" id="exampleModalLabel" >
              Add Customers
            </p>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="grid-container">
                <div className="grid-item">
                  <label></label> 
                  <input
                    type="text" name='fname' value={input.fname} onChange={handleChange} 
                    className="form-control "  style={{fontFamily: "Inter",
                      color: "rgba(136, 135, 135, 1)"}}
                    placeholder="First Name"  required />
                </div>
                <div className="grid-item">
                  <label></label>
                  <input
                    type="text" name='lname'  value={input.lname} onChange={handleChange}                     
                    className="form-control" style={{fontFamily: "Inter",
                      color: "rgba(136, 135, 135, 1)"}}
                    placeholder="Last Name" required
                  />
                </div> <div className="grid-item">
                  <label></label>
                  <select className="form-select" style={{fontFamily: "Inter",
                      color: "rgba(136, 135, 135, 1)"}}>
                    <option value="">Select Status</option>
                    <option value="active"  onChange={handleChange}>Active</option>
                    <option value="inactive" >Inactive</option>
                  </select>
                </div>
                <div className="grid-item">
                  <label></label>
                  <input
                    type="text" name='contact'  value={input.contact} onChange={handleChange} required
                    className="form-control" style={{fontFamily: "Inter",
                      color: "rgba(136, 135, 135, 1)"}}
                    placeholder="Contact No"
                  />
                </div>
                <div className="grid-item">
                  <label></label>
                  <input
                    type="email" name='email'  value={input.email} onChange={handleChange} required
                    className="form-control"style={{fontFamily: "Inter",
                      color: "rgba(136, 135, 135, 1)"}}
                    placeholder="Email" 
                  />
                </div><br/>
               
                <div className="grid-item upload-section">
                  <label>Upload Profile Images</label>
                  <div className="upload-box">
                    <i className="bi bi-cloud-arrow-down"></i>
                    <p>
                      Drag Your Image Here <br />
                      (Only *.jpeg and *.png images will be accepted)
                    </p>
                    <input
                      type="file" name='files'
                      className="file-input"  value={input.files} onChange={handleChange} required
                      multiple    accept="image/jpeg, image/png"
                    />
                  </div>
                </div>
              </div>
              <div className="button-group">
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-warning" onClick={handleSubmit} style={{color: "white",
    background: "#fc8019",
    width: "77px",}}>
                  Save
                </button></div>
            </form>
            
          </div>
        </div>
      </div>
    </div>


{/* pagination */}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

      </>

      )
}




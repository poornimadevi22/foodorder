import React from 'react'
import { Input } from 'reactstrap'

function Crud() {
     const [input,setInput]=useState({
        fname:"",lname:"",status:"",contact:"",email:"",files:""
      })
    
  return (
    <div>





        {/* view customers */}
        <div class="modal fade" id="Modall" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="/src/assets/pic.jpg" alt="" srcset="" />
      <div className="user mt-5">
      <table className="table table-bordered">
    <thead className='view customer details'>
      <tr>
        <th>Firstname</th>
        {/* <th>Lastname</th> */}
        
      </tr>
    </thead>
    <tbody>
    <tr>
        <td></td>
      </tr>
      <tr>
        <td>Name</td>
        <td>Mr.spencer Wise</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>chennai</td>
      </tr>
      <tr>
        <td>date</td>
        <td>23/04/2023</td>
      </tr>
      <tr>
        <td>Status</td>
        <td>Active</td>
      </tr>
      <button type="edit">Edit</button>
      <button type="button">Cancel</button>
    </tbody>
  </table>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Edit</button>
        <button type="button" class="btn btn-primary">close</button>
      </div>
    </div>
  </div>
</div>
        
      
</div>
  )
}

export default Crud
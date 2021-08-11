import { useContext, useState } from 'react';
import Employee from './Employee';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { Button, Modal } from 'react-bootstrap';
import AddForm from './AddForm';

const EmployeeList = () => {

    const {employees} = useContext(EmployeeContext)

    const [show, setShow] = useState(false);

    const hanleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
      <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                  <Button onClick={handleShow}  className="btn btn-success text-white"  data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                </div>
              </div>
            </div>

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <Employee employees={employees}/>
            </tbody>
        </table>

        <Modal show={show} onHide={hanleClose}>

          <Modal.Header className="modal-header" closeButton>
            <Modal.Title>
              Add Employee
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="modal-body">
            <AddForm />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={hanleClose}>
              Close
            </Button>
          </Modal.Footer>

        </Modal>
        
    </>
  )
}

export default EmployeeList;

//Olusturlan AddForm modalini yerlestirdik satir 53
// Formun görunmesi ve gorunmeme durumunu useState(iki parametre alir sshow ve setShow) ile componentin anlik durumunu degistirebiliyoruz satir 11  
// kapat ac fonksiyonlari yazdik handleClose ve handleShow satir 13-14
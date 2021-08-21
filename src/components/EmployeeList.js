/* eslint-disable default-case */
import { useContext, useState, useEffect } from 'react';
import Employee from './Employee';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { Button, Modal, Alert } from 'react-bootstrap';
import AddForm from './AddForm';
import Pagination from './Pagination';


const EmployeeList = () => {

    const {sortedEmployees} = useContext(EmployeeContext)
    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(2)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleShowAlert = () => {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false)
      }, 3000);
    };
    


    //employees arrayinde herhangi bir degisiklik oldugunda useEffect calissin "handleClose()" demek
    useEffect(() => {
      handleClose();

      return () => {
        handleShowAlert();
      }
    }, [sortedEmployees]) 


    /* const myRef = useRef(null);  baslangic degerinin herangibirsey olmasini istemiyoruz null

    const onButtonClick = () => { 
      myRef.current.focus()
    }*/
    
/* 
    
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `You clicked ${count}`
    })
      */

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(sortedEmployees.length / employeesPerPage);


    /* const reducer = (state, action) => {
      switch (action.type) {
        case 'increment': 
          return { count: state.count + 1 }
        
        case 'decrement': 
          return { count: state.count - 1 }

        case 'reset': 
          return { count: state.count = 0 }

        default : 
          throw new Error();  

      }
    }


    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState)  */

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

      <Alert show={showAlert} variant="success">
        Employee has been updated
      </Alert> 

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

                {
                  currentEmployees.map((employee) => (
                    <tr key={employee.id}>
                      <Employee employee={employee} />
                    </tr>
                    
                  ))
                }
            </tbody>
        </table>

        <Pagination 
          pages = {totalPagesNum} 
          setCurrentPage = {setCurrentPage}
          currentEmployees = {currentEmployees}
          sortedEmployees = {sortedEmployees}
                
        />

      {/*   Count = {state.count} &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => dispatch({type: 'increment'})}>+</button>&nbsp;&nbsp;&nbsp;
        <button onClick={() => dispatch({type: 'reset'})}>reset</button>&nbsp;&nbsp;&nbsp;
        <button onClick={() => dispatch({type: 'decrement'})}>-</button> */}

        <Modal show={show} onHide={handleClose}>

          <Modal.Header className="modal-header" closeButton>
            <Modal.Title>
              Add Employee
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="modal-body">
            <AddForm />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>

        </Modal>

        {/* input alanina referans verecegiz. useRef import edilir 
        <input ref={myRef} type="text"></input>
        <button onClick={onButtonClick}>Focus Input</button> */}


{/*         <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
          <button onClick={() => setCount(count - 1)}>
            Click me
          </button>
        </div> */}
        
    </>
  )
}

export default EmployeeList;

//Olusturlan AddForm modalini yerlestirdik satir 53
// Formun görunmesi ve gorunmeme durumunu useState(iki parametre alir sshow ve setShow) ile componentin anlik durumunu degistirebiliyoruz satir 11  
// kapat ac fonksiyonlari yazdik handleClose ve handleShow satir 13-14
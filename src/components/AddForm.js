import React from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddForm = () => {


  //contexten addEmploye fonksiyonunu yakaladik
  const { dispatch } = useContext(EmployeeContext)


  //herbir form elemanini ayri bir state olarak dusunduk ve baslangic degerleri bos string yaptik
/*   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(""); */

  const [newEmployee, setNewEmployee] = useState({
    name: '', email: '', address: '', phone: ''
  })

  const {name, email, address, phone} = newEmployee

  const onInputChange = (e) => {
    setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /* addEmployee(name, email, address, phone) */
    dispatch({type: 'add_employee', employee : {
      name, email, address, phone
    }})
  }



  return (
    <Form onSubmit={handleSubmit}>
      {/* onSubmit metoduyla handleSubmit fonksiyonunu calistiriyoruz oda addEmployee fonksiyonunu calistiriyor(contexte yazmistik bu fonksiyonu) */}

      <Form.Group>
        <Form.Control type="text" placeholder="Name *" name="name" value={name} onChange={e => onInputChange(e)} required />
        {/* value olarak girilen degeri onchange metoduyla name stateinde yenile(setState) */}
      </Form.Group>  

      <Form.Group>
        <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={e => onInputChange(e)} required />
      </Form.Group>
        
      <Form.Group>
        <Form.Control as="textarea" placeholder="Address" name="address" value={address} onChange={e => onInputChange(e)} rows={3} />
      </Form.Group>  

      <Form.Group>
        <Form.Control type="phone" placeholder="Phone" name="phone" value={phone} onChange={e => onInputChange(e)} />
      </Form.Group>  

      <Button variant="success" type="submit" block>
        Add New Employee
      </Button>
    </Form>
  )
}

export default AddForm;


//react bottstrap modulunden form olusturduk

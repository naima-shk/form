import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

const Login =() =>{
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState ('');
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
    
        fetch(`https://gorest.co.in/public/v2/users`, requestOptions)
            .then(response => response.json())
            .then(data => setOrders(data))
        },
     []);
    const [allEntry, setAllEntry ] = useState([]);
         
    const submitForm =(e) =>{
        e.preventDefault();

        if (newEntry !== allEntry){
            alert('please go to sign in page and create an account!!')
        } else {
            alert('you are login successfully!!!')
        }
        const newEntry ={email : email, password: password}

        setAllEntry([...allEntry , newEntry]);
    }


  return (
      <>
      <form  action= '' onSubmit ={submitForm} style={{width: '250px', height:'300px', marginLeft: '600px' , paddingTop:'15px',textAlign:'centre', marginTop:'100px', backgroundColor:'LightBlue'}}>
          <div style={{marginLeft:'28px'}}>
              <label htmlFor="email" > Email</label>
              <input type='text' name="email" id="email" 
              value= {email}
              onChange= {(e) => setEmail(e.target.value)}
              />
          </div>
          <div style={{marginLeft:'28px'}}>
              <label htmlFor="password" > PassWord</label>
              <input type='password' name="password" id="password"
              value= {password}
              onChange= {(e) => setPassword(e.target.value)}
              />
          </div>
          <Button type='submit' className='btn' style={{margin: '12px', paddingBottom:'10px'}}  >Log In </Button>
      </form>
     <div className='second' style={{width: '250px', height:'100px', marginLeft: '600px' , paddingTop:'15px',textAlign:'centre', marginTop:'100px', backgroundColor:'LightBlue'}}>
         {
             allEntry.map((curElem) =>{
                 return (
                     <div className='showDataStyles' >
                         <p>{curElem.email}</p>
                         <p>{curElem.password}</p>
                     </div>
                 )
             })
         }
     </div>

      </>
  )
}

export default Login;
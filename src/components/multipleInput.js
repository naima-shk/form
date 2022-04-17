import { useState } from 'react';

//import { Button } from 'react-bootstrap';



const MultipleInput = () =>{
  

const [userSignIn , setuserSignIn] = useState({});


const [records, setRecords] = useState ([]);


const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userObject);
};

fetch(`https://gorest.co.in/public/v2/users`, requestOptions)
    .then(response => { if (response.status == 201) {
      alert(' form submitted')
    }
    })}
}
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
    
       // console.log(name,value);
        
        setuserSignIn({ ...userSignIn, [name]: value})
}
const handleSubmit = (e)=>{
    e.preventDefault();

    const newRecord = { ...userSignIn, id : new Date().getTime().toString()};
   // console.log(records);
    setRecords([...records, newRecord]);
   // console.log(records);
   
       let userObject ={
           'user name':  user ,
           ' email address':  emailaddress,
           'status' :  status,
       }
       if (userSignIn !== userObject){
           alert ('user is already created ,please go to login page !!')
       } else {
           alert ('account successfully created!!');
       }
}
   // setuserSignIn ({userName:'' , email: '', password:'', confirmPassword:'' })
}
    return (
      <>
      <form action=''  onSubmit={handleSubmit}  className="card"  style={{width: '250px', height:'330px', marginLeft: '600px' , paddingTop:'15px',textAlign:'centre', marginTop:'100px',
    backgroundColor:'LightBlue'}} > 
    <div  className= 'uName' style={{marginLeft:'28px'}}  >
        <label htmlFor='userName'> Full Name</label>
        <input type='text' name='username'  onChange ={handleInput} value={userSignIn.userName} id='userName' />
    </div>
    <div  className ='email'  style={{marginLeft:'28px'}}>
        <label htmlFor='email'> Email Address</label>
        <input type='text' name='email' id='email'  onChange ={handleInput} value={userSignIn.email}/>
    </div>
    <div className='contact' style={{marginLeft:'28px'}}>
        <label htmlFor='contact'> Contact Number</label>
        <input type='text' name='contact' id='contact' onChange ={handleInput} value={userSignIn.contact} />
    </div>
    <div  className='password' style={{marginLeft:'28px'}}>
        <label htmlFor='password'> PassWord</label>
        <input type='password' name='password' id='password' onChange ={handleInput} ref={register({
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}/>
    </div>
    <div className='cPassword' style={{marginLeft:'28px'}}>
        <label htmlFor='confirmpassword'> Confirm PassWord</label>
        <input type='password' name=' confirmpassword' id='confirmpassword' onChange ={handleInput} 
         ref={register({
            validate: value =>
              value === password.current || "The passwords do not match"
          })}/>
    </div>
   </form> <br></br>
   <Button type='submit' className='btn' style={{marginLeft: '675px', paddingBottom:'5px'}} >Sign In </Button>
   <div  className='first' style={{width: '250px', height:'100px', marginLeft: '600px' , paddingTop:'15px',textAlign:'centre', marginTop:'100px', backgroundColor:'LightBlue'}}>
       {
           records.map((currElem) =>{
               return (
                   <div className='ShowDataStyle'>
                       <p>{currElem.userName}</p>
                       <p>{currElem.email}</p>
                       <p>{currElem.contact}</p>
                       <p>{currElem.password}</p>
                       <p>{currElem.confirmPassword}</p>
                       </div>
               )
           })
       }
   </div>
    </>
    ) } 

export default MultipleInput;

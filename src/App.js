import React,{useState} from 'react';
import axios from 'axios';

function App() {

  const [data,setData] = useState({
     username :"",
     password : "",
     email : "",
     confirmpassword : ""
  })
  const {username,password,email,confirmpassword} = data;
  const onchange = e => {
    setData({...data,[e.target.name]:[e.target.value]})
  }

  const onSubmit = e =>{
    e.preventDefault();
    axios.post('https://revanthdata-90f20-default-rtdb.firebaseio.com/register.json',data)
    .then(() => alert("Succesfully Submitted"));
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
      <center>
       <input type="text" name='username' value={username} onChange={onchange} placeholder='username'></input><br></br>
       <input type="text" name='password' value={password} onChange={onchange} placeholder='password'></input><br></br>
       <input type="text" name='email' value={email} onChange={onchange} placeholder='email'></input><br></br>
       <input type="text" name='confirmpassword' value={confirmpassword} onChange={onchange} placeholder='confirmpasswprd'></input><br></br>
       <button type='submit'  name='submit'>Submit</button>
       
      </center>
      </form>
      <h1>Thank You</h1>
    </div>
  );
}

export default App;

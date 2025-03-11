import React, {useState} from 'react'
import "./Signup.css";

const Signup = () => {
    const [userDetail, setUserDetails] =useState({
        name: '',
        email: '',
        password: '',
    });
    function handleChange(event) {
        console.log(event.target.value);
        setUserDetails({...userDetail,[event.target.name]: event.target.value});
    }

    async function handleSubmit(event) {
        if(userDetail.name == '') {
            alert("Please enter your name");
            return;
        }

        if(userDetail.email == ""){
            alert("Please enter your email");
            return;
        }

        if(userDetail.password == ""){
            alert("Please enter your password");
            return;
        }


        try {
            const  data = await axios.post("http://localhost:8000/user/signup");
            console.log(data);
            alert("User signed up successfully");
        } catch (error) {
            console.log(error);
            alert("Some thing went wrong");
        }
    }
  return (
    <div className="regis-box">
        <form action="" onSubmit={handleSubmit}> 
            <label htmlFor="">Name</label>
            <input type="text" name='name' placeholder='Name...' onChange={handleInput}/>
            <label htmlFor="">Email</label>
            <input type="email" name='email' placeholder='Email...' onChange={handleInput}/>
            <label htmlFor="">Password</label> 
            <input type="password" name='password' placeholder='Password...' onChange={handleInput}/> 
            <input type="submit"/>

        </form>
    </div>
  )
}

export default Signup
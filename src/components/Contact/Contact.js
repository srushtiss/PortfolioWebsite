import React from 'react'
import { Link } from 'react-router-dom'
import { useState} from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {

  const formInitialData={name:"", email:"",message:""}

  const [formData,setFormData]=useState(formInitialData)
  const [formErrors,setFormErrors]=useState({})


  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit=(e)=>{
    setFormErrors(validateForm(formData))
    sendEmail(e)
  }

  const validateForm =(values)=>{
    const errors = {};
    const regex = /^[^\\$@]+@[^\\$@]+\\.[^\\$@]{2,}$/i;
    
    if (!values.name){
        errors.name = "Name is required!";
    }

    if(!values.email){
        errors.email= "Email is required!";
    }else if(!regex.test(values.email)){
        errors.email = "This is not a valid email format!";
    }

    if(!values.message){
        errors.message= "Messsage is required!";
    } 
    return errors;
}



const sendEmail = (e) => {

  emailjs.init("At5YnmIkHaLDGY5cg");
  emailjs.send("service_5bszv5l","template_7yjuz98", formData)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <div className='bg-slate-100 dark:bg-black dark:text-white'>
      <div className='p-8 flex flex-wrap justify-between items-center'>
        <Link to="https://www.linkedin.com/in/srushtisachdev/">
          <div className='p-6 box-border border-4 rounded-3xl bg-blue-300'>
          <img className='m-auto w-16' src={require("../../utils/linkedin.png")} alt="LinkedIn"/>
          <h3 className='pt-3 font-about text-xl'>Username : srushtisachdev</h3>
          </div>
        </Link>
        <Link to="https://github.com/srushtiss">
          <div className='m-4 p-4 box-border border-4 rounded-3xl bg-slate-400'>
          <img className='m-auto w-16' src={require("../../utils/github.png")} alt="Github"/>
          <h3 className='pt-3 font-about text-xl'>Username : srushtiss</h3>
          </div>
        </Link>
        <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=sachdevsrushti@gmail.com&su=SUBJECT&body=BODY">
          <div className='m-4 p-4 box-border border-4 rounded-3xl bg-red-300'>
          <img className='m-auto w-16' src={require("../../utils/gmail.png")} alt="Gmail"/>
          <h3 className='pt-3 font-about text-xl'>Username : sachdevsrushti@gmail.com</h3>
          </div>
        </Link>
      </div>
      <h1 id="user_msg" className='m-4 font-abput text-3xl text-purple-700'>You can DM me too!</h1>
      <div className='p-6 m-auto w-[50%] h-auto border-4 rounded-xl'>
       
        <form className='p-4 flex justify-evenly items-center'>
          <label className='font-about text-xl'>Your Name</label>
          <input type="text" className='w-[400px]'
              name='name'
              value={formData.name}
              onChange={handleChange}
          ></input>
          
        </form>
         <p className='text-xl text-red-600 font-about'>{formErrors.name}</p> 
        <form className='p-4 flex justify-evenly items-center'>
        <label className='font-about text-xl'>Your email-id</label>
          <input type="text" className='mr-2 w-[400px]'
            name='email'
            value={formData.email}
            onChange={handleChange}
          
          ></input>
        </form>
        <p className=' text-red-600 font-about text-xl'>{ formErrors.email}</p>
        <form className='p-4 flex justify-evenly items-center'>
        <label className='font-about text-xl'>Your message for me</label>
          <textarea className='mr-9 w-[400px]'
            name='message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </form>
        <p className='text-xl text-red-600 font-about'>{ formErrors.message}</p>
        <button type='submit' className='p-4 rounded-full bg-sky-500 hover:bg-sky-700 w-40 font-about text-xl' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Contact
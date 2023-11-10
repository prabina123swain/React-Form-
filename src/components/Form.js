import React, { useState } from 'react'

export default function Form() {

    const [formdata,setFormData]=useState({
        FirstName:"",
        LastName:"",
        Email:"",
        country:"India",
        address:"",
        city:"",
        state:"",
        zipCode:"",
        comments:false,
        candidate:false,
        offer:false,
        everything:false,
        sendtomil:false,
        notify:false,
    })

    console.log(formdata);

    function changeHandler(event){
      const{name,value,type,checked}=event.target

      setFormData(prevData=>{
        return{
            ...prevData,
            [name]:type==="checkbox"?checked:value
        }
     } )
    }

    function submitHandler(event){
        event.preventDefault();
        
        console.log("all form data are",formdata);
    }


  return (
   <div className='w-11/12 mt-5 p-2 bg-slate-200'>
     <form className='' onSubmit={submitHandler}> 
     <label>First Name</label> <br></br>
        <input 
        type="text"
        placeholder='Prabina'
        name="FirstName"
        value={formdata.firstName}
        onChange={changeHandler}
        className='w-[50%] border-[1px] border-[#00000035] rounded-sm mx-auto gap-2'
        >
        </input> <br></br>
        <label>Last Name</label> <br></br>
        <input 
        type="text"
        placeholder='Swain'
        name="LastName"
        value={formdata.LastName}
        onChange={changeHandler}
        className='w-[50%] border-[1px] border-[#00000035] rounded-sm mx-auto'
        >
        </input><br></br>

        <label>Email Address</label> <br></br>
        <input 
        type="text"
        placeholder='Prabina@gmail.com'
        name="Email"
        value={formdata.Email}
        onChange={changeHandler}
        className='w-[50%] border-[1px] border-[#00000035] rounded-sm mx-auto'
        >
        </input> <br></br>

        <label>Select Your Country</label> 
        <select 
        type="select"
        placeholder='Country'
        name="country"
        value={formdata.country}
        onChange={changeHandler}
        className='m-2 ml-2 border-[1px] border-[#00000035] rounded-sm mx-auto'
        >
        <option value="Bharat">Bharat</option>
        <option value="India">India</option>
        <option value="Hindustan">Hindustan</option>
        </select>
         <br></br>

        <label>Street Address</label> <br></br>
        <input
        type="text"
        placeholder='AT-Rasasingh P.O-Balapada'
        name="address"
        value={formdata.address}
        onChange={changeHandler}
        className='w-[50%] border-[1px] border-[#00000035] rounded-sm mx-auto'
        >
        </input> <br></br>

        <label>City</label> <br></br>
        <input 
        type="text"
        placeholder='Dhenkanal'
        name="city"
       value={formdata.city}
        onChange={changeHandler}
        className='w-[50%] border-[1px] border-[#00000035] rounded-sm mx-auto'
        >
        </input> <br></br>
        <label>State</label> <br></br>
        <input 
        type="text"
        placeholder='759025'
        name="state"
        value={formdata.state}
        onChange={changeHandler}
        className='w-[50%] border-[1px] border-[#00000035] rounded-sm mx-auto'
        >
        </input> <br></br>

        <label>Zip Code</label> <br></br>
        <input 
        type="text"
        placeholder='759025'
        name="zipCode"
        value={formdata.zipCode}
        onChange={changeHandler}
        className='w-[50%] border-[1px] border-[#00000035] rounded-sm mx-auto'
        >
        </input> <br></br>
        
    <fieldset className='gap-0'>

        <legend>By Mail</legend>
        <input 
        type="checkbox"
        name="comments"
        checked={formdata.comments}
        onChange={changeHandler}
        className='mr-2 border-[1px] border-[#00000035] rounded-sm mx-auto'
        >
        </input> 
        <label>Comments
        <p className='ml-4 opacity-[60%]  text-xs'>Get notified when someone posting comment</p>
        </label>

        <br></br>

        <input 
        type="checkbox"
        name="candidate"
        checked={formdata.canditate}
        onChange={changeHandler}
        className='mr-2 border-[1px] border-[#00000035] rounded-sm mx-auto'
        >
        </input> 
        <label>candidate
        <p className='ml-4 opacity-[60%] text-xs'>Get notified when candidate apply for job</p>
        </label>
        <br></br>

        <input 
        type="checkbox"
        name="offer"
        checked={formdata.offer}
        onChange={changeHandler}
        className='mr-2 border-[1px] border-[#00000035] rounded-sm mx-auto'
        >
        </input> 
        <label>Offfer
        <p className='ml-4 opacity-[60%] text-xs'>Get notified when candidateaccept or reject offer</p>
        </label>
       
        </fieldset>

    
        <fieldset className='mt-5'>
        <legend>Push notification</legend>
         <p className='ml-4 opacity-[60%] text-xs'>these are delivered to yous mobile phone</p>
        
        <input 
        type="radio"
        name="everything"
        checked={formdata.everything}
        onChange={changeHandler}
        id='radio-btn'
        >
        </input> 
        <label>everything </label>  <br></br>

        <input 
        type="radio"
        name="sendtomil"
        checked={formdata.sendtomil}
        onChange={changeHandler}
        id='radio-btn'
        >
        </input> 

        <label>Send By mail </label> <br></br>
        <input 
        type="radio"
        name="notify"
        checked={formdata.notify}
        onChange={changeHandler}
        id='radio-btn'
        >
        </input> 
        <label>No notification </label>

        </fieldset>

    <button  className='bg-blue-500'>
        Save
    </button>

     </form>
   </div>
  )

}

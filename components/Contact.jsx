import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
import ContactPic from '../utils/imgs/contacto.png'

const Contact = () => {
  const [name, setName] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mail, setMail] = useState("");
  const [empty, setEmpty] = useState("default");
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if(name === "" || mensaje === "" || mail === "") {
        return setEmpty(!empty)
    } else {
      emailjs.sendForm('service_9k0c7xh', 'template_vctotlz', form.current, 'pIBD5W5s47Rne__j5')
    .then((result) => {
      alert(`Email Send Succesfully ${result.text}`);
    }, (error) => {
      console.log(error.text);
    })
    
    setMensaje("");
    setName("");
    setMail("");
    setEmpty(false)
    }
    
  }

  return (
    <div id='contact' className='w-full h-screen bg-texto mx-auto  flex  flex-col'>
        <h1 className='mx-auto mt-8 border-b-naranja border-b border-dashed text-naranja font-bold text-3xl'>Contact Me</h1>
        <div className="flex items-center justify-evenly">
        <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center mx-auto px-4 w-[400px] h-[600px] ' onChange={(e) => setEmpty(e.target.value)}>
            <input 
              onChange={(e) => setName(e.target.value)}
              className='my-2 rounded-xl p-4 outline-none shadow-xl' 
              type="text" 
              value={name}
              name="user_name" 
              placeholder='name' /> 
              {!empty ? <h1 className="bg-danger text-texto shadow-xl rounded px-2 text-xs">No puede estar vacio</h1> : ""}
            <input onChange={e => setMail(e.target.value)} className='my-2 rounded-xl p-4 outline-none shadow-xl' type="email" name="user_email" placeholder='email' value={mail} />
            {!empty ? <h1 className="bg-danger text-texto shadow-xl rounded px-2 text-xs">No puede estar vacio</h1> : ""}
            <textarea onChange={(e) => {
              setMensaje(e.target.value)
            } } className='rounded-xl mt-4 p-4 outline-none shadow-xl' placeholder='Message' name="message" id="" cols="30" rows="10" value={mensaje}/>
            {empty === "" ? <h1 className="bg-danger text-texto shadow-xl rounded px-2 text-xs">No puede estar vacio</h1> : ""}
            <button 
              value="Send" 
              type="submit"
              disabled={empty ? true : false}
              className={mensaje === "" ? `disabled:transition-shadow rounded-xl bg-background/40 w-[200px] shadow-xl mt-4 text-texto p-2  text-xl border cursor-`: `rounded-xl bg-naranja w-[200px] shadow-xl mt-4 text-texto p-2  text-xl border`}>Send</button>
        </form>
        <div className="hidden sm:block pr-6">
            <Image src={ContactPic}/>
        </div>
        </div>
        
    </div> 
  )
}

export default Contact
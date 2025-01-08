import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";


const ContactMe = () => {

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    // email js
    const sendEmail = (e) => {
      e.preventDefault();
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };
  
      setLoading(true);
  
      emailjs.send('service_8cuz8hr', 'template_6e3buwf', templateParams, { publicKey: 'vic91IwPCNLi_Fgme'}).then(
        (response) => {
          setLoading(false);
          toast.success("Message sent successfuly!", {position: "bottom-center"})
          console.log('SUCCESS!', response.status, response.text);
          setName('')
          setEmail('')
          setMessage('')
        },
        (error) => {
          setLoading(false);
          toast.error(`An error occured!`, {position: "bottom-center"})
          console.log('FAILED...', error);
        },)
    };

  return (
    <div id='contact' className="my-5 pt-12 text-light space-y-16 xl:flex justify-between">
      <div className="left grid items-center">
        <div className="space-y-4 xl:w-[50%]">
          <h1 className='text-title font-semibold'>Contact me for collaboration</h1>
          <p>React out today to discuss your project needs and start collaborating on something amazing!</p>
        </div>
          <div className="social links flex gap-4">
            <a className="p-3 border-2 border-tag rounded-md hover:bg-tag transition-all" target="_blank" href="https://github.com/leonileo/"><FaGithub /> </a>
            <a className="p-3 border-2 border-tag rounded-md hover:bg-tag transition-all" target="_blank" href="https://github.com/leonileo/"><CiLinkedin /> </a>
            <a className="p-3 border-2 border-tag rounded-md hover:bg-tag transition-all" target="_blank" href="https://github.com/leonileo/"><FaXTwitter /> </a>
            <a className="p-3 border-2 border-tag rounded-md hover:bg-tag transition-all" target="_blank" href="https://github.com/leonileo/"><FaInstagram /> </a>
          </div>
      </div>

      <div className="right">
        <form onSubmit={sendEmail} className="space-y-2">
          <div className="top flex gap-2">
            <div className="name block space-y-2">
              <label htmlFor="name" className="block">Name</label>
              <input id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-tag xl:h-[3vh] block rounded" type="text" />
            </div>
            <div className="name block space-y-2">
              <label htmlFor="email" className="block">Email</label>
              <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-tag xl:h-[3vh] block rounded" type="email" />
            </div>
          </div>

          <div className="bottom">
            <div className="name block space-y-2">
              <label htmlFor="name" className="block">Message</label>
              <textarea id="name" value={message} onChange={(e) => setMessage(e.target.value)} className="p-2 bg-tag h-[15vh] w-full block rounded resize-none">
              </textarea>
            </div>
            <button type="submit" className="bg-primary hover:bg-secondary transition-all my-2 p-1 rounded text-center w-full flex items-center justify-center ">{loading ? <>Submiting <span className="ml-2 block h-5 w-5 rounded-full border-r-2 animate-spin"></span></>: "Submit"}</button>            
          </div>
        </form>
      </div>

    </div>
  )
}

export default ContactMe
import { useState } from "react";
import "./contact.scss";
import emailjs  from 'emailjs-com';
import Fade from 'react-reveal/Fade';
import Popup from 'reactjs-popup';  
import 'reactjs-popup/dist/index.css';
import Swal from 'sweetalert2';


export default function Contact() {
  const [message, setMessage] = useState(false);
  const openSentAlert = () => {
    Swal.fire({
      title: 'Email Sent Successfully',
      text: "Thanks, I'll reply ASAP :)",
      type: 'success',
      
    })
  };

  const openErrorAlert = () => {
      Swal.fire({
        title: 'Email was not sent',
        text: ":(",
        type: 'warning',
        
      })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(false);
    
    
    emailjs.sendForm('service_au5xxfz', 'template_vu5nrgb', e.target, 'user_9vTZ1TVJD9R1iYBBAe0RR')
      .then((result) => {
          setMessage(true);
          openSentAlert();
      }, (error) => {
          openErrorAlert();
      });
      
  };
  return (
    <div className="contact" id="contact">
      <Fade>
        <div className="right">
          <h2>Contact.</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" name="user_email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit" class>Send</button>            
          </form>
        </div>
      </Fade>
    </div>
  );
}
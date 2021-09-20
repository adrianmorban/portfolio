import React, {useRef} from 'react';
import emailjs from 'emailjs-com';

function ContactForm(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_l8orsgw', 'template_8am2hnv', form.current, 'user_LTqvmXuuko6yQximAedhh')
          .then((result) => {
              alert("Enviado correctamente");
              e.target.reset();
          });
      };
    return (
        <div className="contactForm" >
            <form ref={form} onSubmit={sendEmail}>
                <input name="name" placeholder="John Doe" required="required"/>
                <input name="email" type="email" placeholder="john.doe@ejemplo.com" required="required"/>
                <textarea name="message" placeholder="Tu mensaje aquí" required="required"></textarea>
                <input id="submit" name="submit" type="submit" value="Enviar"/>
            </form>
        </div>
           );
}

export default ContactForm;
import React from 'react';
import HeaderText from './headertext';
import SubheaderText from './subheadertext';
import ContactForm from './contactform';

function Contact(){
    return (
        <div className="contact" id="contact">
            <HeaderText Texto="Contacto"/>
            <SubheaderText Texto="¿Tienes alguna duda? ¡Contáctame y hablemos!"/>
            <ContactForm/>
        </div>
           );
}

export default Contact;

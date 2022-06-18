import React from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_qoz1yjo',
                'template_yvv3v47',
                event.target,
                '0BiMchynUoeakAIHX'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent")
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }


    return (
        <div>
            <form ref={ form } onSubmit={ sendEmail }>
                <label>Name</label>
                <input type="text" name='user_name' />
                <hr />

                <label>Email</label>
                <input type="email" name='user_email' />
                <hr />

                <label>Message</label>
                <textarea name="user_message" id="" cols="30" rows="10"></textarea>
                <hr />
                <button className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md ">Send</button>
            </form>
        </div>
    )
}


export default ContactUs;
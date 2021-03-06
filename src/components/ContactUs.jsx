import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


export const ContactUs = () => {

    const sweetAlert = () => {
        Swal.fire({
            title: 'Your message has been sent',
            icon: 'success',
            padding: '1em',
            position: 'top-end',
            grow: 'top-end',
            color: 'rgb(209, 213, 219)',
            background: 'rgba(79, 70, 229)',
            showConfirmButton: true,
            timer: 5000,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qoz1yjo', 'template_yvv3v47', form.current, '0BiMchynUoeakAIHX')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
            },
                (error) => {
                    console.log(error.text);
                }
            );
    }

    return (
        <div className='w-full content-center'>
            <form autoComplete='off' ref={ form } method="post" onSubmit={ sendEmail }>
                <div className='text-center text-md md:text-xl mb-3'>
                    <label className='text-md md:text-xl max-w-md mb-3 font-semibold text-gray-600 dark:text-gray-300'>Name <span className=' text-red-700'>*</span></label>
                    <div>
                        <input type="text" name='user_name' required placeholder='Name' className='bg-slate-300 dark:bg-slate-300 rounded-lg px-3 overflow-hidden' />
                    </div>
                </div>

                <div className='text-center text-md md:text-xl mb-3'>
                    <label className='text-md md:text-xl max-w-md mb-3 font-semibold text-gray-600 dark:text-gray-300'>Email <span className=' text-red-700'>*</span></label>
                    <div>
                        <input type="email" name='user_email' required placeholder='Example@gmail.com' className='bg-slate-300 dark:bg-slate-300 rounded-lg px-3 overflow-hidden' />
                    </div>
                </div>

                <div className='text-center text-md md:text-xl mb-3'>
                    <label className='text-md md:text-xl max-w-md mb-3 font-semibold text-gray-600 dark:text-gray-300'>Message <span className=' text-red-700'>*</span></label>
                    <div>
                        <textarea name="user_message" id="" cols="30" rows="10" required placeholder='Your message' className='bg-slate-300 dark:bg-slate-300 rounded-lg px-3 overflow-hidden'></textarea>
                    </div>
                </div>
                <div className='text-center text-md md:text-xl mb-3'>
                    <button onClick={ () => sweetAlert() } type='submit' value='Send' className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md">Send</button>
                </div>
            </form>
        </div>
    )
};

export default ContactUs;
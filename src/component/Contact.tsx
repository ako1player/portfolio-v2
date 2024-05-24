import emailjs from '@emailjs/browser';
import { FormEvent, useRef } from 'react';

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;

        if (form.current) {
            emailjs.sendForm('service_nphb38g', 'template_db6qjqf', form.current, 'HZwjN2Osot38_mJR0')
                .then((result) => {
                    console.log(result.text);
                    target.reset();
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return (
        <section className='h-screen bg-blue-500'>
            <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
                <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-white'>Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className='space-y-8'>
                    <label className='block mb-2 text-sm font-medium text-white' >Name</label>
                    <input type="text" name="user_name" className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 ' />
                    <label className='block mb-2 text-sm font-medium  text-white'>Email</label>
                    <input type="email" name="user_email" className='block p-3 text-sm w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 ' />
                    <label className='block mb-2 text-sm font-medium  text-white'>Message</label>
                    <textarea name="message" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 ' />
                    <input type="submit" value="Send" className='shadow cursor-pointer rounded-lg py-2 px-4 text-blue-500 bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-primary-300' />
                </form>
            </div>
        </section>
    )
}
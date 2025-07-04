import { useState } from 'react';
import Dialog from './Radix-ui/Dialog'
import emailjs from 'emailjs-com';

export default function Footer() {
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
    setText(e.target.value);
    
  };

  const handleNameChange = (e) => {
    setName(e.target.value);    
  }

   const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
  e.preventDefault();


  const templateParams = {
    from_name: name,
    from_email: email,
    message: text,
  };
   emailjs.send(
    'service_jm532bm',       
    'template_zalk1y1',     
    templateParams,
    '2gbfMf-G9B0PbwbIW'          
  )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Сообщение отправлено!');
      setName('');
      setEmail('');
      setText('');
    }, (err) => {
      console.error('FAILED...', err);
      alert('Ошибка при отправке');
    });
};


    return (
        <div className="bg-gray-800 h-40 flex flex-col justify-end items-center">

         <form>

        <div className="relative w-full my-6 flex max-w-md mx-auto mt-10">
            <input id="suggestion" type="text" value={text} onChange={handleChange} placeholder=" "
                 className="peer z-2 w-full sm:w-72 px-3 pt-6 pb-2 border border-indigo-500 rounded-md 
                text-indigo-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-100"/>
            <label htmlFor="suggestion" className="absolute left-3 text-indigo-500 text-sm transition-all duration-200 px-1
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-indigo-400
                    peer-focus:top-[-20px] peer-focus:left-[-1px] peer-focus:text-sm peer-focus:font-bold peer-focus:text-indigo-600">Оставьте предложение </label>

            <Dialog
  className="border text-white rounded mx-3 px-2 bg-indigo-400 border-gray-600 hover:opacity-50 "
  text="Отправить"
  title="Отправить предложение"
  onSubmit={handleSubmit}
>
  <>
    <input
      type="text"
      value={name}
      onChange={handleNameChange}
      required
      placeholder="Ваше Имя"
      className="peer z-2 w-full sm:w-80 p-2 border border-indigo-500 rounded-md 
                text-indigo-900 mb-5" maxLength={20}/>
    <input
      type="email"
      value={email}
      onChange={handleEmailChange}
      required
      placeholder="Ваш Email"
       className="peer z-2 w-full sm:w-80 p-2 border border-indigo-500 rounded-md 
                text-indigo-900 mb-5" maxLength={40}/>
    <textarea
      value={text}
      onChange={handleChange}
      placeholder="Ваш отзыв"
      className="peer z-2 w-full h-72 sm:w-80 p-3 border border-indigo-500 rounded-md 
                text-indigo-900 "
                maxLength={500}/>
  </>
</Dialog>
        </div>
  
    </form>

        <p className="text-white font-ubuntu mb-5">© {new Date().getFullYear()} bandikost. Все права защищены.</p>
    </div>
    )
}
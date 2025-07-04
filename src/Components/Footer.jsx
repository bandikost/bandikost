import { useState } from 'react';
import Dialog from './Radix-ui/Dialog'

export default function Footer() {
    const [text, setText] = useState('');

    const handleChange = (e) => {
    setText(e.target.value);
  };


    return (
        <div className="bg-gray-800 h-40 flex flex-col justify-end items-center">
         <form>
        <div className="relative w-full my-6 flex max-w-md mx-auto mt-10">
            <input
                id="suggestion"
                type="text"
                value={text}
                onChange={handleChange}
                placeholder=" "
                className="peer z-2 w-full sm:w-72 px-3 pt-6 pb-2 border border-indigo-500 rounded-md 
                text-indigo-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
            <label
                htmlFor="suggestion"
                className="absolute left-3 text-indigo-500 text-sm transition-all duration-200
                     px-1
                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-indigo-400
                    peer-focus:top-[-20px] peer-focus:left-[-1px] peer-focus:text-sm peer-focus:font-bold peer-focus:text-indigo-600"
                >Оставьте предложение </label>
            <Dialog className="border text-white rounded mx-3 px-2 bg-indigo-400 border-gray-600 hover:opacity-50 " 
                text="Отправить"
                onChange={handleChange}
                title="Отправить предложение"
                >
                <form>
                    <input value={text} onChange={handleChange} className="my-5 px-2 rounded" placeholder="Ваше предложение" />
                </form>
            </Dialog>
        </div>


                
            </form>

            <p className="text-white font-ubuntu mb-5">© {new Date().getFullYear()} bandikost. Все права защищены.</p>
        </div>
    )
}
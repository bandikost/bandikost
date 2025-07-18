import code from "../../Video/code.mp4"
import s from '../modules/Main.module.css'; 

const codeForSPA = [
    {id: 1, name: "React Router — клиентская маршрутизация"},
    {id: 2, name: "Radix UI — доступные и анимированные компоненты"},
    {id: 3, name: "Jotai — современное и лёгкое управление состоянием"},
    {id: 4, name: "Tailwind CSS — быстрая стилизация через utility-классы"},
    {id: 5, name: "Jest/Suspense — тесты и оптимизация"},
]


export default function MainVideo() {

    return (
         <section className="relative w-full h-120 flex bg-gray-900 justify-center items-center md:justify-start">
                    <div className="flex flex-col justify-center items-center">
                          <p className="text-size pb-5 text-white underline text-left ml-5 md:ml-0">Code Review<sup className="text-xs pl-1">* Тут мы смотрим под капот</sup></p>
                        <div className="flex flex-col md:flex-row"> 
                       
                           <video className={s.MainVideo} src={code} autoPlay loop muted playsInline/>
                   
                        <div className="ml-0 sm:ml-5 ">
                            <ul className="md:p-0 py-5 font-ubuntu text-size text-white flex items-center justify-center text-center md:items-start flex-col md:text-lg w-82 ">Сайт на React (CRA)
                                {codeForSPA.map((c) => (
                                    <li key={c.id} className="text-low-size sm:text-size-small-medium w-64 md:ml-10 text-left p-1 m-0 sm:text-size-small-medium md:text-sm sm:w-full list-decimal ">{c.name}</li>
                                ))}
                            </ul>
        
                        </div>
                        </div> 
                    </div>
                </section>
    )
}
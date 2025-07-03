import MyToolTip from "../../Components/Radix-ui/Tooltip";
import code from "../../Video/code.mp4"
import s from '../modules/Main.module.css'; 

const codeForSPA = [
    {id: 1, name: "React Router - клиентская маршрутизация"},
    {id: 2, name: "Radix UI - доступные и анимированные компоненты"},
    {id: 3, name: "Jotai - современное управление состоянием"},
    {id: 4, name: "Tailwind CSS - быстрая стилизация через utility-классы"},
    {id: 5, name: "Jest/Suspense - тесты и оптимизация"},
]


export default function MainVideo() {

    return (
         <section className="relative w-full h-84 flex bg-gray-900 justify-center items-center lg:justify-start">
                    <div className="flex flex-col justify-center items-center">
                        
                        <div className="flex flex-col lg:flex-row"> 
                       <div className="flex flex-col">
                          <p className=" pb-5 text-white text-left ">
                           <MyToolTip className="w-56 sm:!w-96" text="React-компонент получает из URL параметр категории, берёт данные фильмов и категорий из локальных массивов, фильтрует фильмы по категории, группирует их по первой букве названия, поддерживает поиск по названию и отображает список фильмов с рейтингами и ссылками." >
                            <span className="underline text-to-title ml-5 lg:ml-10 cursor-pointer hover:opacity-50 transform duration-300">Code Review </span></MyToolTip>
 
                          <sup className="text-for-sups pl-1 text-white">* Тут мы смотрим под капот</sup></p>
                         
                           <video className={s.MainVideo} src={code} autoPlay loop muted playsInline/>
                    </div>
                        <div className="ml-0 sm:ml-5">
                            <ul className="md:p-0 py-10 font-ubuntu text-to-title text-white flex items-center justify-center text-center lg:items-start flex-col md:text-lg w-82 ">Сайт на React (CRA)
                                {codeForSPA.map((c) => (
                                    <li key={c.id} className=" py-2 sm:py-3 sm:text-sm md:text-lg sm:leading-none text-ideal-phone w-72 md:ml-10 text-right sm:text-left p-1 m-0 sm:text-size-small-medium md:text-sm sm:w-full list-decimal ">{c.name}</li>
                                ))}
                            </ul>
        
                        </div>
                        </div> 
                    </div>
                </section>
    )
}
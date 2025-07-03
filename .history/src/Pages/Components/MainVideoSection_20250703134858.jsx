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
         <section className="relative w-full flex bg-gray-900 justify-center items-center lg:justify-start">
            <div className="container mx-auto px-4 md:flex md:justify-start items-center h-full">
                    <div className="flex flex-col justify-center items-center">
                        
                        <div className="flex flex-col lg:flex-row"> 
                      
                          <p className=" pb-5 text-white text-left ">
                           
                            <span className="underline text-to-title ml-5 lg:ml-10">Code Review</span>
                        <MyToolTip className="w-56 sm:!w-96" 
                        text="React-компонент получает из URL параметр категории, берёт данные фильмов и категорий из api, фильтрует фильмы по категории, группирует их по первой букве названия, поддерживает поиск по названию и отображает список фильмов с рейтингами и ссылками." >
                          <sup className="text-2xl pl-1 text-white cursor-pointer hover:opacity-50 transform duration-300">ⓘ</sup>
                        </MyToolTip>
                           </p>
                           <video className={s.MainVideo} src={code} autoPlay loop muted playsInline/>
                 
                        <div className="ml-0 sm:ml-5">
                            <ul className="font-ubuntu text-to-title text-white flex items-center justify-center text-center lg:items-start flex-col w-82 "><p className="my-5 lg:m-0 md:my-5 sm:my-5">Сайт на React (CRA)</p>
                                {codeForSPA.map((c) => (
                                    <li key={c.id} className=" py-2 sm:py-3 sm:text-sm md:text-size-small-medium lg:text-xl sm:leading-none text-ideal-phone w-72 md:ml-10 text-right sm:text-left p-1 m-0 sm:w-full list-decimal ">{c.name}</li>
                                ))}
                            </ul>
        
                        </div>
                        </div> 
                    </div>
                    </div>
                </section>
    )
}
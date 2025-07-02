import code from "../../Video/code.mp4"

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
                        <div className="border border-indigo-300 rounded-xl ">
                           <video className="w-[300px] h-36 sm:max-w-[400px] md:max-w-96 md:h-auto lg:max-w-96 border-0 sm:border sm:rounded-xl" src={code} autoPlay loop muted playsInline/>
                        </div>
                        <div className="ml-5">
                            <ul className="md:p-0 py-5 font-ubuntu text-size text-white flex items-center justify-center text-center md:items-start flex-col md:text-lg w-96 ">Сайт на React (CRA)
                                {codeForSPA.map((c) => (
                                    <li key={c.id} className="text-low-size ml-10 md:ml-10 text-left p-1 m-0 sm:text-size-small-medium md:text-sm w-full list-decimal ">{c.name}</li>
                                ))}
                            </ul>
        
                        </div>
                        </div> 
                    </div>
                </section>
    )
}
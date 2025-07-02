import code from "../../Video/code.mp4"

const codeForSPA = [
    {id: 1, name: "React Router — клиентская маршрутизация"},
    {id: 2, name: "Radix UI — доступные и анимированные компоненты"},
    {id: 3, name: "Jotai — современное и лёгкое управление состоянием"},
    {id: 4, name: "Tailwind CSS — быстрая стилизация через utility-классы"},
    {id: 5, name: "Jest/Suspense/Optimization Hooks — тестирование и оптимизация"},
]


export default function MainVideo() {

    return (
         <section className="relative w-full h-120 flex justify-center items-center bg-gray-900">
                    <div className="flex ">
                          
                        <div className="border border-gray-400 rounded-xl">
                           <video className="w-96 h-56 object-cover rounded-xl" src={code} autoPlay loop muted playsInline/>
                        </div>
                        <div className="ml-5">
                            <ul className="font-ubuntu text-size text-white flex items-start flex-col">Сайт полностью на React (CRA)
                                {codeForSPA.map((c) => (
                                    <li key={c.id} className="ml-10 text-left p-1 m-0 text-size-small-medium w-full list-decimal ">{c.name}</li>
                                ))}
                            </ul>
        
                        </div>
                    </div>
                </section>
    )
}
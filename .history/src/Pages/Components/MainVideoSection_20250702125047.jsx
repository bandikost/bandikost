import code from "../../Video/code.mp4"

const codeForSPA = [
    {id: 1, name: "React Router"},
    {id: 2, name: "Radix UI"},
    {id: 3, name: "Jotai"},
    {id: 4, name: "Tailwind CSS"},
    {id: 5, name: "Jest/Suspense"},
]


export default function MainVideo() {

    return (
         <section className="relative w-full h-120 flex bg-gray-900">
                    <div className="flex flex-col justify-center md:flex-row">
                          <p className="text-size pb-5 text-white underline">Code Review<sup className="text-xs pl-1 no-underline">* Тут мы смотрим под капот</sup></p>
                        <div className="border border-indigo-300 rounded-xl">
                           <video className="w-72 h-48 sm:w-96 sm:h-56 md:w-96 md:h-56 lg:w-96 lg:h-56 object-cover rounded-xl" src={code} autoPlay loop muted playsInline/>
                        </div>
                        <div className="ml-5">
                            <ul className="font-ubuntu text-size text-white flex items-start flex-col md:text-lg sm:w-48 ">Сайт на React (CRA)
                                {codeForSPA.map((c) => (
                                    <li key={c.id} className="ml-10 text-left p-1 m-0 text-size-small-medium md:text-sm w-full list-decimal ">{c.name}</li>
                                ))}
                            </ul>
        
                        </div>
                    </div>
                </section>
    )
}
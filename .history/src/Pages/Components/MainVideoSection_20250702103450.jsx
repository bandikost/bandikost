export default function MainVideo() {

    return (
         <section className="relative w-full h-100 flex items-start bg-gray-900">
                    <div className="flex">
                          
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
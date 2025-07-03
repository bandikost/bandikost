export default function Slasher({text, children}) {

return (
    <div className="bg-indigo-400 relative text-2xl h-2">
       <div>
        {children}
        <p className="center-flex text-size-small-medium p-2 font-ubuntu mt-[-3px]">
                {text}
            </p>
        </div>
    </div>
)

}
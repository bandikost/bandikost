export default function Footer() {
    return (
        <div className="bg-gray-900 h-24 flex flex-col justify-end items-center">
            <p className="text-white font-ubuntu">© {new Date().getFullYear()} bandikost. Все права защищены.</p>
        </div>
    )
}
export default function Footer() {
    return (
        <div className="bg-gray-800 h-24 flex flex-col justify-end items-center">
            <input className="my-5 px-2" placeholder="Оставьте отзыв или предложение" />
            <p className="text-white font-ubuntu">© {new Date().getFullYear()} bandikost. Все права защищены.</p>
        </div>
    )
}
export default function Footer() {
    return (
        <div className="bg-gray-800 h-24 flex flex-col justify-end items-center">
            <div>
                <input className="my-5 px-2 rounded" placeholder="Оставьте отзыв или предложение" />
                <button className="border rounded mx-5">Отправить</button>
            </div>
            <p className="text-white font-ubuntu">© {new Date().getFullYear()} bandikost. Все права защищены.</p>
        </div>
    )
}
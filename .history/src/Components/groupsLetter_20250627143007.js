import films from "./films"

export default function groupsByFirstLetter() {
    const groups = {}

    films.forEach(film => {
        const firstLetter = film.name[0].toUpperCase()

        if(!groups[firstLetter]) {
            groups[firstLetter] = []
        }
    })
}
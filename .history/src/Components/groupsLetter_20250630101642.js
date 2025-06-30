
export default function groupsByFirstLetter(films) {
    const groups = {}

    films.forEach(film => {
        const firstLetter = film.name[0].toUpperCase()

        if(!groups[firstLetter]) {
            groups[firstLetter] = []
        }

        groups[firstLetter].push(film)

    })

    return groups
}
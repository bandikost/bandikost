import { useParams } from 'react-router-dom'
import categories from "../Components/categories";

export default function CategoryFilms() {
        const { id } = useParams();
    return (
    <>
        <p>{categories.name}</p>
    </>

    )
}
import { useParams } from 'react-router-dom'
import categories from "../Components/categories";

export default function CategoryFilms() {
        const { id } = useParams();
        const category = categories.find((cat) => cat.id === id);

        if (!category) {
        return <div>Категория не найдена</div>;
    }

    return (
    <>
        <p>{category.name}</p>
    </>

    )
}
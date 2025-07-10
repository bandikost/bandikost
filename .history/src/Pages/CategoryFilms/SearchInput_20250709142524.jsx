// Components/CategoryFilms/SearchInput.jsx
export default function SearchInput({ value, onChange }) {
  return (
    <form className='center-flex'>
      <label className='center-flex'>
        <input
          className='mx-3 p-1 border rounded-xl pl-2'
          value={value}
          onChange={onChange}
          placeholder='Поиск по названию'
        />
      </label>
    </form>
  );
}

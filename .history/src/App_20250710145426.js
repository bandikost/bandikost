import './App.css';
import Films from './Pages/Films';



const App = () =>  {

      const [text, setText] = useState('')
      return (
<Films text={text} setText={setText}/>
      )

  
}

export default App;

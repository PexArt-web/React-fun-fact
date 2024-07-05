import Navbar from "./components/Navbar";
import Maincontent from "./components/main";
import {useState} from 'react'

const App = () => {
    const [ darkMode, setDarkMode] = useState(true)
    const toggleDarkMode = () =>{
        setDarkMode(prevState => !prevState)
    }
    return ( <div className="container">
        <Navbar darkMode={darkMode} toggleMode = {toggleDarkMode}/>
        <Maincontent darkMode={darkMode}/>
    </div> );
}
 
export default App;
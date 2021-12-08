import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './page/homepage/homepage.component'

const HatsPage = () =>{
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}


function App() {
  return (
    <div>
        <Route path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
    </div>
  );
}



export default App;


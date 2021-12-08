import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shoppage.component';

function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
    </div>
  );
}



export default App;


import './App.css';
import {Route,Switch} from 'react-router-dom'
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shoppage.component';
import Header from './components/header-component/header.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}



export default App;


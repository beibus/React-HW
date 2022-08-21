import './App.css';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import { Header } from './components/Header/Header';
import TitleContainer from './components/Title/TitleContainer';

import TopImageContainer from './containers/TopImageContainer/TopImageContainer';
import BlackContainer from './containers/BlackContainer/BlackContainer';
import WhiteContainer from './containers/WhiteContainer/WhiteContainer';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Breadcrumbs first='jersey' second='nike & nba collaboration'/>
      <TitleContainer first='jersey' second='nba'/>
      <TopImageContainer/>
      <BlackContainer/>
      <WhiteContainer/>
    </div>
  );
}

export default App;

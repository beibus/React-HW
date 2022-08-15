import './App.css';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import { Message } from './components/Message/Message';
import { Header } from './components/Header/Header';
import TitleContainer from './components/Title/TitleContainer';
import ImageContainer from './components/TopImageContainer/ImageContainer';
import Collections from './containers/Collections/Collections';
import { CardsContainer } from './containers/CardsContainer/CardsContainer';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Breadcrumbs first='jersey' second='nike & nba collaboration'/>
      <TitleContainer first='jersey' second='nba'/>
      <Message/>
      <ImageContainer/>
      <Collections/>
      <CardsContainer/>
    </div>
  );
}

export default App;

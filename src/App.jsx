import './App.css';
import Header from './Components/Header/Header';
import Daily from './Components/DailyOffers/Daily';
import Payment from './Components/Payment/Payment';
import Benefits from './Components/benefits/Benefits';
import BestStores from './Components/BestStores/BestStores';
import Footer from './Components/Footer/Footer';
import Category from './Components/Category/Category';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <>
      <Header />
      <Slider/>
      <Payment />
      <Daily />
      <Benefits />
      <BestStores />
      <Category />
      <Footer />
    </>
  );
}

export default App;

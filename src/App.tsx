
import { Header } from './components/Header';
import { Slider } from './components/Slider';
import { Cards } from './components/Cards';
import { CalculatorPage } from './components/Calculator';
import { Payments } from './components/Payments';
import { Question } from './components/Questions';
import { MobileApp } from './components/MobileApp';
import { Exchange } from './components/Exchange';
import { Footer } from './components/Footer';

function App() {

  return (
      <>
        <Header />
        <Slider/>
        <Cards/>
        <CalculatorPage/>
        <Payments/>
        <Question/>
        <MobileApp/>
        <Exchange/>
        <Footer/>
      </>
  );
}



export default App;

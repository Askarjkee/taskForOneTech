import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainPage, CreditPage } from './components/pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/credit" element={<CreditPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}



export default App;

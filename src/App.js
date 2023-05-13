
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Abituriyentlar, Announcement, Awardss, Calculators, Connections, Hamkorlar, Home, News, Students, Teacher } from './Pages';
import Faxriylar from './Pages/Faxriylar';
import Darsjadval from './Pages/Darsjadval';
import Hujjatlar from './Pages/Hujjatlar';
import Faoliyat from './Pages/Faoliyat';
import Statistika from './Pages/Statistika';
import Fanlar from './Pages/Fanlar';


function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='talabalar' element={<Students />} />
        <Route path='/abituriyentlar' element={<Abituriyentlar />} />
        <Route path='/hamkorlar' element={<Hamkorlar />} />
        <Route path='/yangiliklar' element={<News />} />
        <Route path='/mukofotlar' element={<Awardss />} />
        <Route path="/e'lonlar" element={<Announcement />} />
        <Route path="/aloqalar" element={<Connections />} />
        <Route path="/kafedratarixi" element={<Calculators />} />
        <Route path="/kalkulyatorlar" element={<Calculators />} />
        <Route path="/faxriylarimiz" element={<Faxriylar />} />
        <Route path="/kafedratarkibi" element={<Teacher />} />
        <Route path="/darsjadval" element={<Darsjadval />} />
        <Route path="/me'yoriyhujjatlar" element={<Hujjatlar />} />
        <Route path="/faoliyat" element={<Faoliyat />} />
        <Route path="/statistika" element={<Statistika />} />
        <Route path="/kafedrafanlar" element={<Fanlar />} />
      </Routes>




    </div>
  );
}

export default App;

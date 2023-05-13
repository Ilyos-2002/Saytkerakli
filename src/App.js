
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Students } from './Pages';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/talabalar' element={<Students />} />
        <Route path='/abituriyent' element="" />
        <Route path='/hamkorlar' element="" />
        <Route path='/yangiliklar' element="" />
        <Route path='/mukofatlar' element="" />
        <Route path="/e'lonlar" element="" />
        <Route path="/aloqalar" element="" />
        <Route path="/kalkulyatorlar" element="" />
        <Route path="/e'lonlar" element="" />
        <Route path="/e'lonlar" element="" />
        <Route path="/e'lonlar" element="" />
        <Route path="/e'lonlar" element="" />
        <Route path="/e'lonlar" element="" />
      </Routes>

      <Home />

    </div>
  );
}

export default App;

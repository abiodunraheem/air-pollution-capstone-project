import { Routes, Route, } from 'react-router-dom';
import Countries from './pages/Countries';
import CountryDetails from './pages/CountryDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Routes>
        <Route path="/" element={<Countries />}/>
        <Route path="/countryDetails" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;

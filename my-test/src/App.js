import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import HomepageCard from './components/HomePageCard';

function App() {
  return (
    <div className="App">
      <HomePage />  {/* Hiển thị trang chủ */}
      <HomepageCard/>
    </div>
  );
}

export default App;

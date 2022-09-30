import './App.css';
import Navbar from './components/Navbar';
import MainUp from './components/MainUp';
import Main from './components/Main';
import MainBottom from './components/MainBottom';
import MainBottomManSection from './components/MainBottomManSection';
import Brands from './components/Brands';
import Outlet from './components/Outlet';
import Adress from './components/Adress';

function App() {
  return (
    <>
    <Navbar />
    <MainUp />
    <Main />
    <MainBottom />
    <MainBottomManSection />
    <Brands />
    <Outlet />
    <Adress />
    </>
  );
}

export default App;

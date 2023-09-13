import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
   <>
   <Header/>
   <main className='py-3'>
    <Container>
    {/* <HomeScreen /> */}
    <Outlet/>
    </Container>
   </main>
   <Footer/>
   </>
  );
}

export default App;

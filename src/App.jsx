import './App.css';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  

    return (
        <>
            <div className="body-container">
                <Navigation />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

App.propTypes;
export default App;
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import HomepageSection from './HomapageSection/HomepageSection';
import './Homepage.css';

function Homepage() {

    return (
        <>
            <div className="body-container">
                <Navigation />
                <HomepageSection />
                <Footer />
            </div>
        </>
    );
}

export default Homepage;
import Footer from '../Components/Footer/Footer';
import Navigation from '../Components/Navigation/Navigation';
import HomepageSection from './HomapageSection/HomepageSection';
import './Homepage.css';

function Homepage() {

    return (
        <>
            <Navigation />
            <HomepageSection />
            <Footer />
        </>
    );
}

export default Homepage;
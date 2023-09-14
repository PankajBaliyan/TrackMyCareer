import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Home from '../Components/Home';
import AITools from '../Components/AITools';
import Contact from '../Components/Contact';

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/aitools" element={<AITools />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;

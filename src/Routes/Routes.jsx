import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Home from '../Components/Home';
import AITools from '../Components/AITools';
import ProfessionalEmailGenerator from '../Components/Tools/Professional-email-generator';
import JobApplicationTracker from '../Components/Tools/Job-application-tracker.jsx';
import Contact from '../Components/Contact';

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/aiTools" element={<AITools />} />
                <Route path="/email" element={<ProfessionalEmailGenerator />} />
                <Route path="/applicationTracker" element={<JobApplicationTracker />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRouter;

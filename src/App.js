import 'normalize.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppDiv from './AppStyles';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    return (
        <AppDiv>
            <Navbar />
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </AppDiv>
    );
};

export default App;

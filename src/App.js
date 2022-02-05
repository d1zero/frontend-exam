import 'normalize.css';
import { Routes, Route } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import AppDiv from './AppStyles';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/Main/Main';
import AboutPage from './pages/About/About';
import AdvertsPage from './pages/Adverts/Adverts';
import LeftWidget from './components/LeftWidget/LeftWidget';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    return (
        <AppDiv>
            <Header />
            <Container>
                <Grid container>
                    <Grid item xs={3}>
                        <Navbar />
                        <LeftWidget />
                    </Grid>
                    <Grid item xs={9}>
                        <Routes>
                            <Route exact path="/" element={<MainPage />} />
                            <Route path="/adverts" element={<AdvertsPage />} />
                            <Route path="/about" element={<AboutPage />} />
                        </Routes>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </AppDiv>
    );
};

export default App;

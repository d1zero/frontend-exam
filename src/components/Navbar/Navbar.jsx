import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import NavLink from './navbarStyles';
import logo from '../../logo.svg';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Container
                fixed
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Toolbar disableGutters>
                    <img src={logo} alt="logo" height="64px" width="64px" />
                    <NavLink to="/">
                        <Typography variant="h6">Home</Typography>
                    </NavLink>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;

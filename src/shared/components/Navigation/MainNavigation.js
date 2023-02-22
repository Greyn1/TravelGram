import { Link, Outlet } from 'react-router-dom';
import SideDrawer from './SideDrawer';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = () => {
    return (
        <>
            <SideDrawer>
                <nav className='main-navigation__drawer-nav' >
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className='main-navigation__menu-btn' >
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className='main-navigation__title'>
                    <Link to="/">Your Places</Link>
                </h1>
                <nav className='main-navigation__header-nav' >
                    <NavLinks />
                </nav>
            </MainHeader>
            <main><Outlet /></main>
        </>
    );
}

export default MainNavigation;

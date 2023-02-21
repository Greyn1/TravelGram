import { Link, Outlet } from 'react-router-dom';
import MainHeader from './MainHeader';
import './MainNavigation.css';

const MainNavigation = () => {
    return (
        <>
            <MainHeader>
                <button className='main-navigation__menu-btn' >
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className='main-navigation__title'>
                    <Link to="/">Your Places</Link>
                </h1>
                <nav>
                    ...
                </nav>
            </MainHeader>
            <main><Outlet /></main>
        </>
    );
}

export default MainNavigation;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import HistoryIcon from '../components/HistoryIcon.jsx';
import TodayIcon from '../components/TodayIcon.jsx';

const BottomNavigation = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;

    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #fff;
        box-shadow: 0 0 20px 0 #dfdfdf;

        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .5rem;
            padding: .5rem 1rem;
            transition: background-color 250ms ease-in-out;

            &.active {
                background-color: #dadada;
            }
        }
    }
`;

export const Navigation = () => {
    return (
        <BottomNavigation>
            <nav>
                {/*The className function is applied to both nav link items, which is strange!*/}
                <NavLink to={'/'}>
                    <TodayIcon width={35} height={35} />
                </NavLink>
                <NavLink to={'/history'}>
                    <HistoryIcon width={35} height={35} />
                </NavLink>
            </nav>
        </BottomNavigation>
    )
}

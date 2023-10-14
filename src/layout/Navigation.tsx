import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <>
            <nav>
                <Link to={'/'}>Today</Link>
                <Link to={'/history'}>History</Link>
            </nav>
        </>
    )
}
import {
    Link
} from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link exact="true" to="/">Home</Link>
                </li>
                <li>
                    <Link exact="true" to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;
import {
    Link
} from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link exact="true" to="/react-countries">Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;
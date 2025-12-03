import { Switch } from '../switch/swith';
import './footer.css';

export const Footer = () => {

    return (
        <div className="footer">
            <p>©2022 Blogolog</p>
            <div className='dark-theme'>
                <p>DarkTheme</p>
                <Switch />
            </div>
        </div>
    );
}
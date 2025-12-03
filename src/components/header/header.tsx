import { Logo } from "../../assets/logo"
import { Search } from "../../assets/search"
import { User } from "../user/user"
import './header.css';

export const Header = () => {
    return (
        <div className="header">
            <button><Logo /></button>
            <div className="right_block">
                <button><Search /></button>
                <User name='Vova master'></User>
            </div>
        </div>
    )
}
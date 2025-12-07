import { Link, useParams } from "react-router-dom";
import "./breadcrumbs.css";
import { useTheme } from "../../context/themeContext/theme-context";

export const Breadcrumbs = () => {
    const { id } = useParams();
    const { theme } = useTheme();

    return (
        <nav className="breadcrumbs">
            <Link to="/" className="breadcrumbs__link" style={{
                color: theme.colors.text
            }}>
                Home
            </Link>

            <span className="breadcrumbs__divider">/</span>

            <span className="breadcrumbs__current">
                Post {id}
            </span>
        </nav>
    );
};

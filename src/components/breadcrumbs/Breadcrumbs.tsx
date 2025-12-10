import { Link, useParams } from "react-router-dom";
import "./breadcrumbs.css";
import { useTheme } from "../../context/themeContext/theme-context";
import type { FC } from "react";

interface Ibreadcrumbs {
    type: "articles" | "blogs";
}

export const Breadcrumbs: FC<Ibreadcrumbs> = ({type}) => {
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
                {type==='articles' ? 'Articles' : 'Blogs'} {id}
            </span>
        </nav>
    );
};

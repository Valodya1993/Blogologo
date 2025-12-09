import { useEffect, type FC } from "react";
import './posts.css';
import { useTheme } from "../../context/themeContext/theme-context";
import { Link } from "react-router-dom";

interface IPost {
    id: string;
    image: string;
    title: string;
    text?: string;
    date: string;
}

export const Posts: FC<IPost> = ({ id, image, title, date }) => {
    const { theme } = useTheme();

    return (
        <Link to={`/${id}`} id={id} className="post" >
            <div className="post__card" style={{
                background: theme.colors.bg_header,
                color: theme.colors.text
            }}>
                <img className="post__image" src={image} />
                <div className="post__date-title">
                    <p className="post__date">{date}</p>
                    <p className="post__title">{title}</p>
                </div>
            </div>
        </Link>
    );
};


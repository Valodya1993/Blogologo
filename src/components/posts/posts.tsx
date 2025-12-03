import type { FC } from "react";
import './posts.css';

interface IPost {
    id: string;
    image: string;
    title: string;
    text: string;
    date: string;
}

export const Posts: FC<IPost> = ({ id, image, title, date }) => {
    return (
        <button id={id} className="post">
            <div className="post__card">
                <img className="post__image" src={image}/>
                <div className="post__date-title">
                    <p className="post__date">{date}</p>
                    <p className="post__title">{title}</p>
                </div>
            </div>
        </button>
    );
};


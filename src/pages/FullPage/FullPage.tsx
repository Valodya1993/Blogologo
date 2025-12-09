import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Container } from "../../components/layout/wrapper";
import "./FullPage.css";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";

interface Article {
    id: number;
    title: string;
    summary: string;
    image_url: string;
    published_at: string;
    url: string;
}

export const FullPage = () => {
    const { id } = useParams();
    const location = useLocation();

    // определяем тип: articles или blogs
    const type = location.pathname.includes("blogs") ? "blogs" : "articles";

    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        const load = async () => {
            const res = await fetch(`https://api.spaceflightnewsapi.net/v4/${type}/${id}/`);
            const data = await res.json();
            setArticle(data);
        };
        load();
    }, [id, type]);

    if (!article) return <p>Loading...</p>;

    return (
        <>
            <Header />
            <Container>
                <Breadcrumbs />
                <h2>{article.title}</h2>

                <img
                    src={article.image_url}
                    alt=""
                    style={{
                        width: "100%",
                        borderRadius: 10,
                        margin: "20px 0"
                    }}
                />

                <p className="text">{article.summary}</p>

                <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#6B1ADA", fontWeight: "bold" }}
                >
                    Читать оригинал →
                </a>
            </Container>
            <Footer />
        </>
    );
};

// pages/full/FullPage.tsx
import { useEffect, useState, type FC } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Container } from "../../components/layout/wrapper";
import { Breadcrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import type { ApiArticle } from "../../api/articles";
import "./FullPage.css";
import { fetchArticleById } from "../../api/fetchArticleById";

export const FullPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();

    const type: "articles" | "blogs" = location.pathname.includes("blogs") ? "blogs" : "articles";

    const [article, setArticle] = useState<ApiArticle | null>(null);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchArticleById(id, type);
                setArticle(data);
            } catch (error) {
                console.error("Error loading article:", error);
            }
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
                    alt={article.title}
                    style={{ width: "100%", borderRadius: 10, margin: "20px 0" }}
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

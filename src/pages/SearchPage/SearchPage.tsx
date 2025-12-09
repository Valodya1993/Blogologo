// pages/search/SearchPage.tsx
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Container, PostContainer } from "../../components/layout/wrapper";
import { Posts } from "../../components/posts/posts";
import { useEffect, useState, type FC } from "react";
import { Pagination } from "../../components/pagination/Pagination";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { searchArticles } from "../../api/searchArticles";
import type { ApiArticle } from "../../api/articles";

const LIMIT = 12;

export const SearchPage: FC = () => {
    const [articles, setArticles] = useState<ApiArticle[]>([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const { word } = useParams<{ word: string }>();
    const totalPages = Math.ceil(count / LIMIT);

    const loadArticles = async (page: number) => {
        if (!word) {
            setArticles([]);
            setCount(0);
            return;
        }

        const { articles: fetchedArticles, count } = await searchArticles(word, page);
        setArticles(fetchedArticles);
        setCount(count);
    };

    // Обновление при смене страницы или изменении слова поиска
    useEffect(() => {
        loadArticles(page);
    }, [page, word]);

    // Если слово поиска изменилось — сбросить на первую страницу
    useEffect(() => {
        setPage(1);
    }, [word]);

    return (
        <>
            <Header />
            <Container>
                <SearchTitle>
                    Number of results found for "{word}": {count}
                </SearchTitle>

                <PostContainer>
                    {articles.length === 0 && (
                        <p style={{ padding: "40px 0", fontSize: "20px" }}>
                            Nothing found for: <b>{word}</b>
                        </p>
                    )}

                    {articles.map((post) => (
                        <Posts
                            key={post.id}
                            id={`articles/${post.id}`}
                            image={post.image_url}
                            title={post.title}
                            date={new Date(post.published_at).toLocaleDateString()}
                        />
                    ))}

                    {articles.length > 0 && (
                        <Pagination
                            currentPage={page}
                            totalPages={totalPages}
                            onPageChange={setPage}
                        />
                    )}
                </PostContainer>
            </Container>
            <Footer />
        </>
    );
};

// ---------- Styled ----------
const SearchTitle = styled.p`
    font-family: Inter;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    vertical-align: middle;
`;

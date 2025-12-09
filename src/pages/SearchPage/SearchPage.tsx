import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Container, PostContainer } from "../../components/layout/wrapper";
import { Posts } from "../../components/posts/posts";
import { useEffect, useState, type FC } from "react";
import { Pagination } from "../../components/pagination/Pagination";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface ApiArticle {
    id: number;
    title: string;
    summary: string;
    image_url: string;
    published_at: string;
}

interface ISearchPage {
    tab: string;
}

interface ApiResponse {
    count: number;
    results: ApiArticle[];
}

const LIMIT = 12;

export const SearchPage: FC<ISearchPage> = (tab) => {
    const [articles, setArticles] = useState<ApiArticle[]>([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const { word } = useParams<{ word: string }>();
    const totalPages = Math.ceil(count / LIMIT);

    const loadArticles = async (page: number) => {
        const offset = (page - 1) * LIMIT;
        let way: string = '';
        if (word !== '') {
            way = `https://api.spaceflightnewsapi.net/v4/articles/?search=${word}&limit=${LIMIT}&offset=${offset}&ordering=-published_at`;
        } else {
            way = `https://api.spaceflightnewsapi.net/v4/articles/?limit=${LIMIT}&offset=${offset}`;
        }

        const res = await fetch(way);

        const data: ApiResponse = await res.json();

        setArticles(data.results);
        setCount(data.count);
    };

    // Обновление при смене страницы или изменении слова поиска
    useEffect(() => {
        loadArticles(page);
    }, [page, word]);

    // Если слово поиска изменилось — сбросить на 1 страницу
    useEffect(() => {
        setPage(1);
    }, [word]);

    return (
        <>
            <Header />
            <Container>
                <SearchTitle>Number of words found "{word}" : {count}</SearchTitle>
                <PostContainer>
                    {articles.length === 0 && (
                        <p style={{ padding: "40px 0", fontSize: "20px" }}>
                            Ничего не найдено по запросу: <b>{word}</b>
                        </p>
                    )}

                    {articles.map((post) => (
                        <Posts
                            key={post.id}
                            id={String('articles/'+post.id)}
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

const SearchTitle = styled.p`
    font-family: Inter;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    vertical-align: middle;
`;
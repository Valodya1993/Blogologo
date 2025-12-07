import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Container } from "../../components/layout/wrapper";
import { Posts } from "../../components/posts/posts";
import { useEffect, useState } from "react";
import { Pagination } from "../../components/pagination/Pagination";

interface ApiArticle {
    id: number;
    title: string;
    summary: string;
    image_url: string;
    published_at: string;
}

interface ApiResponse {
    count: number;
    results: ApiArticle[];
}

const LIMIT = 12;


export const Main = () => {

    const [articles, setArticles] = useState<ApiArticle[]>([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(count / LIMIT);

    const loadArticles = async (page: number) => {
        const offset = (page - 1) * LIMIT;

        const res = await fetch(
            `https://api.spaceflightnewsapi.net/v4/articles/?limit=${LIMIT}&offset=${offset}`
        );
        const data: ApiResponse = await res.json();

        setArticles(data.results);
        setCount(data.count);
    };

    useEffect(() => {
        loadArticles(page);
    }, [page]);


    return (
        <>
            <Header />
            <Container>
                {articles.map((post) => <Posts id={String(post.id)} image={post.image_url} title={post.title} date={new Date(post.published_at).toLocaleDateString()} />)}
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                />
            </Container>
            <Footer />
        </>
    );
}
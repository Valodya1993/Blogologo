import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Container, PostContainer } from "../../components/layout/wrapper";
import { Posts } from "../../components/posts/posts";
import { useEffect, useState } from "react";
import { Pagination } from "../../components/pagination/Pagination";
import { ToggleButtons } from "../../components/buttonGroup/ToggleButtonGroup";
import { CustomSelect } from "../../components/select/CustomSelect";
import styled from "styled-components";
import { Tabs } from "../../components/tabs/tabs";

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

// --- Генерация дат для фильтра ---
const getDateFilter = (type: string) => {
    const now = new Date();

    switch (type) {
        case "day":
            return new Date(now.getTime() - 24 * 60 * 60 * 1000);
        case "week":
            return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        case "month":
            return new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
        case "year":
            return new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
        default:
            return null; // all
    }
};

export const Main = () => {
    const [articles, setArticles] = useState<ApiArticle[]>([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);

    const [titleSort, setTitleSort] = useState("lp");

    // один фильтр для ToggleButtons и CustomSelect
    const [dateSort, setDateSort] = useState("all");

    // 🔥 добавлен таб Articles / Blogs
    const [tab, setTab] = useState("articles");

    const totalPages = Math.ceil(count / LIMIT);

    // --- запрос данных ---
    const loadArticles = async () => {
        const offset = (page - 1) * LIMIT;
    
        // выбираем endpoint по табу
        const endpoint =
            tab === "articles"
                ? "https://api.spaceflightnewsapi.net/v4/articles/"
                : "https://api.spaceflightnewsapi.net/v4/blogs/";
    
        let dateQuery = "";
        const date = getDateFilter(dateSort);
    
        if (date) {
            dateQuery = `&published_at_gte=${date.toISOString()}`;
        }
    
        // --- сортировка на стороне API ---
        let ordering = "-published_at"; // default: latest first
    
        if (titleSort === "op") {
            ordering = "published_at"; // old posts
        }
    
        // запрос
        const res = await fetch(
            `${endpoint}?limit=${LIMIT}&offset=${offset}${dateQuery}&ordering=${ordering}`
        );
    
        const data: ApiResponse = await res.json();
    
        let sorted = [...data.results];
    
        // --- локальная сортировка только по названию ---
        if (titleSort === "az") {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } 
        else if (titleSort === "za") {
            sorted.sort((a, b) => b.title.localeCompare(a.title));
        }
    
        setArticles(sorted);
        setCount(data.count);
    };

    // загрузка при изменении условий
    useEffect(() => {
        loadArticles();
    }, [page, dateSort, titleSort, tab]);

    return (
        <>
            <Header />
            <Container>

                {/* 🔥 переключатель Articles / Blogs */}
                <Tabs
                    value={tab}
                    onChange={(v) => {
                        setTab(v);
                        setPage(1);
                    }}
                />

                <SortDiv>

                    {/* ToggleButtons (мобильный/десктоп) */}
                    <ToggleButtons
                        value={dateSort}
                        onChange={(v) => {
                            setDateSort(v);
                            setPage(1);
                        }}
                    />

                    {/* Select фильтр по дате */}
                    <DateSort>
                        <CustomSelect
                            value={dateSort}
                            onChange={(v) => {
                                setDateSort(v);
                                setPage(1);
                            }}
                            options={[
                                { value: "all", label: "All" },
                                { value: "day", label: "Day" },
                                { value: "week", label: "Week" },
                                { value: "month", label: "Month" },
                                { value: "year", label: "Year" },
                            ]}
                        />
                    </DateSort>

                    {/* Select сортировки по названию */}
                    <TitleSort>
                        <CustomSelect
                            value={titleSort}
                            onChange={(v) => setTitleSort(v)}
                            options={[
                                { value: "lp", label: "Date (Latest posts)" },
                                { value: "op", label: "Date (Old posts)" },
                                { value: "az", label: "Title (A-Z)" },
                                { value: "za", label: "Title (Z-A)" }
                            ]}
                        />
                    </TitleSort>
                </SortDiv>

                <PostContainer>
                    {articles.map((post) => (
                        <Posts
                            key={post.id}
                            id={String(tab+'/'+post.id)}
                            image={post.image_url}
                            title={post.title}
                            date={new Date(post.published_at).toLocaleDateString()}
                        />
                    ))}
                </PostContainer>

                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                />

            </Container>
            <Footer />
        </>
    );
};

// ---------- Styled ----------

export const SortDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;
    flex-direction: column;
    @media (min-width: 500px) {
        flex-direction: row;
    }
`;

const DateSort = styled.div`
    width: 100%;
    @media (min-width: 900px) {
        display: none;
    }
`;

const TitleSort = styled.div`
    width: 100%;
    @media (min-width: 900px) {
        width: 260px;
    }
`;

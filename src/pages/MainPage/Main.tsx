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
import { fetchArticles, type ApiArticle } from "../../api/articles";

const LIMIT = 12;

export const Main = () => {
    const [articles, setArticles] = useState<ApiArticle[]>([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);


    const [titleSort, setTitleSort] = useState("lp");

    // один фильтр для ToggleButtons и CustomSelect
    const [dateSort, setDateSort] = useState("all");

    // 🔥 добавлен таб Articles / Blogs
    const [tab, setTab] = useState<"articles" | "blogs">("articles");

    const totalPages = Math.ceil(count / LIMIT);

    const loadArticles = async () => {
        const { articles: fetchedArticles, count } = await fetchArticles(
            tab,
            page,
            dateSort,
            titleSort
        );
        setArticles(fetchedArticles);
        setCount(count);
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
                        if (v === "articles" || v === "blogs"){
                            setTab(v);
                            setPage(1);
                        }
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
                            id={String(tab + '/' + post.id)}
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

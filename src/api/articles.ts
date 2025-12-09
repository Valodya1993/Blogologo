export interface ApiArticle {
    url: string | undefined;
    id: number;
    title: string;
    summary: string;
    image_url: string;
    published_at: string;
}

export interface ApiResponse {
    count: number;
    results: ApiArticle[];
}

const LIMIT = 12;

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
            return null;
    }
};

export const fetchArticles = async (
    tab: "articles" | "blogs",
    page: number,
    dateSort: string,
    titleSort: string
): Promise<{ articles: ApiArticle[]; count: number }> => {
    const offset = (page - 1) * LIMIT;

    const endpoint =
        tab === "articles"
            ? "https://api.spaceflightnewsapi.net/v4/articles/"
            : "https://api.spaceflightnewsapi.net/v4/blogs/";

    let dateQuery = "";
    const date = getDateFilter(dateSort);

    if (date) {
        dateQuery = `&published_at_gte=${date.toISOString()}`;
    }

    let ordering = "-published_at"; // default: latest first
    if (titleSort === "op") ordering = "published_at";

    const res = await fetch(
        `${endpoint}?limit=${LIMIT}&offset=${offset}${dateQuery}&ordering=${ordering}`
    );
    const data: ApiResponse = await res.json();

    let sorted = [...data.results];

    if (titleSort === "az") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (titleSort === "za") {
        sorted.sort((a, b) => b.title.localeCompare(a.title));
    }

    return { articles: sorted, count: data.count };
};

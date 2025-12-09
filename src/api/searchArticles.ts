import type { ApiArticle, ApiResponse } from "./articles";

const LIMIT = 12;

export const searchArticles = async (
    word: string,
    page: number,
    titleSort: "lp" | "op" | "az" | "za" = "lp"
): Promise<{ articles: ApiArticle[]; count: number }> => {
    const offset = (page - 1) * LIMIT;
    const endpoint = `https://api.spaceflightnewsapi.net/v4/articles/?limit=${LIMIT}&offset=${offset}${
        word ? `&search=${encodeURIComponent(word)}` : ""
    }&ordering=-published_at`;

    const res = await fetch(endpoint);
    const data: ApiResponse = await res.json();

    let sorted = [...data.results];

    // сортировка по названию на клиенте
    if (titleSort === "az") sorted.sort((a, b) => a.title.localeCompare(b.title));
    else if (titleSort === "za") sorted.sort((a, b) => b.title.localeCompare(a.title));

    return { articles: sorted, count: data.count };
};

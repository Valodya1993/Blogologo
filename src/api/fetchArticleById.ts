import type { ApiArticle } from "./articles";

export const fetchArticleById = async (
    id: string | undefined,
    type: "articles" | "blogs"
): Promise<ApiArticle> => {
    if (!id) throw new Error("ID is required");
    const res = await fetch(`https://api.spaceflightnewsapi.net/v4/${type}/${id}/`);
    const data: ApiArticle = await res.json();
    return data;
};
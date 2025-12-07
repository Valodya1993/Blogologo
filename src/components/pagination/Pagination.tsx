import React from "react";
import "./pagination.css";
import { useTheme } from "../../context/themeContext/theme-context";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const pages: (number | "...")[] = [];
    const { theme } = useTheme();
    const createPages = () => {


        if (totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
            return;
        }

        // always show first page
        pages.push(1);

        if (currentPage > 3) pages.push("...");

        // middle pages
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) pages.push(i);

        if (currentPage < totalPages - 2) pages.push("...");

        // last page
        pages.push(totalPages);
    };

    createPages();

    return (
        <div className="pagination" style={{ color: theme.colors.text }}>
            <button style={{ color: theme.colors.text }}
                className="nav-btn"
                disabled={currentPage === 1}
                onClick={() => { onPageChange(currentPage - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
                ← Prev
            </button>

            <div className="pages">
                {pages.map((p, i) =>
                    p === "..." ? (
                        <span key={i} className="dots" style={{ color: theme.colors.text }}>
                            ...
                        </span>
                    ) : (
                        <button style={{ color: theme.colors.text }}
                            key={i}
                            className={`page-btn ${p === currentPage ? "active" : ""}`}
                            onClick={() => { onPageChange(p as number); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        >
                            {p}
                        </button>
                    )
                )}
            </div>

            <button style={{ color: theme.colors.text }}
                className="nav-btn"
                disabled={currentPage === totalPages}
                onClick={() => { onPageChange(currentPage + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
                Next →
            </button>
        </div>
    );
};

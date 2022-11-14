import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                { portfolio.map(proj => (
                    <PortfolioItem
                        imageURL={proj.imageUrl}
                        title={proj.title}
                        stack={proj.stack}
                        link={proj.link}
                    />
                )) }
            </div>
        </div>
    )
}

export default Portfolio;
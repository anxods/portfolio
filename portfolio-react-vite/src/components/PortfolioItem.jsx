import React from "react";

function PortfolioItem({ title, imageURL, stack, link }) {
    return (
        <div className="bg-slate-200 border-2 border-stone-900 rounded-md overflow-hidden">
            <a href={ link }>
                <img 
                    src={ imageURL } 
                    alt="imageURL" 
                    className="border-b-2 border-stone-900 w-full h-36 md:h-48 object-cover cursor-pointer"    
                />
            </a>
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold
                    text-center">{ title }</h3>
                <p className="flex flex-wrap gap-2 flex-row items-centered justify-start 
                    text-xs md:text-sm">
                    { stack.map(item => (
                        <span className="bg-blue-100 inline-block px-2 py-2 font-semibold border-2 
                            border-stone-900 rounded-md">
                            { item }
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem;
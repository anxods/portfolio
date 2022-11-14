import React from "react";

function PortfolioItem({ title, imageURL, stack, link }) {
    return (
        <div className="border-2 border-stone-900 rounded-md overflow-hidden">
            <img 
                src={ imageURL } 
                alt="imageURL" 
                className="w-full h-36 md:h-48 object-cover cursor-pointer"    
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold
                    text-center">{ title }</h3>
                <p className="flex flex-wrap gap-2 flex-row items-centered justify-start 
                    text-xs md:text-sm">
                    { stack.map(item => (
                        <span className="inline-block px-2 py-2 font-semibold border-2 
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
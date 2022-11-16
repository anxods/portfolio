import React from "react";

function Footer() {
    return (
        <div className="py-10 text-center">
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} anxods
            </p>
        </div>
    )
}

export default Footer;
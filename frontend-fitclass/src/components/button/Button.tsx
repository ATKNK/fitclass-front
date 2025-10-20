import React from "react";
import './Button.css';

function Button({ title }: { title: string }) {
    return (
        <a className="button">
            {title}
        </a>
    )
}

export default Button;
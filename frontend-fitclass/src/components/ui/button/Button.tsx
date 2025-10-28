import './Button.css';

interface ButtonProps {
    title: string;
    onClick?: () => void;
}

function Button({ title, onClick }: ButtonProps) {
    return (
        <button type='submit' className="button" onClick={onClick}>
            {title}
        </button>
    )
}

export default Button;
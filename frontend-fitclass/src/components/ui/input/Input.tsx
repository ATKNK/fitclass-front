interface Props {
    type: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({type, value, onChange}: Props) {
    return (
        <input type={type} value={value} onChange={onChange}/>
    )
}

export default Input;
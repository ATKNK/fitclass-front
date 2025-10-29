import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import { useState } from "react";

export default function RegisterForm() {
    const [name, setName] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [error, setError] = useState("")

    

    return (
        <form className="registerForm">
            <div className="inputContainer">
                <label htmlFor="name" className="label">Nome: </label>
                <Input
                type="text"
                placeholder="Seu Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="birthDate" className="label">Data de Nascimento: </label>
                <Input
                type="text"
                placeholder="DD/MM/AAAA"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                id="birthDate"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="cpf" className="label">Cpf: </label>
                <Input
                type="text"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                id="birthDate"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="email" className="label">Email: </label>
                <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="password" className="label">Senha: </label>
                <Input
                type="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                />
            </div>

            <div className="inputContainer">
                <label htmlFor="passwordConfirmation" className="label">Confirme sua senha: </label>
                <Input
                type="password"
                placeholder="Confirme sua senha:"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                id="passwordConfirmation"
                />
            </div>

            <div className="buttonContainer">
                <Button onClick={handleLogin} title="Entrar"/>
            </div>

            {error && <div className="error">{error}</div>}

        </form>
    )
}
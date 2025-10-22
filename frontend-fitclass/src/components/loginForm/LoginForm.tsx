import { useState } from "react";
import { saveToken } from "../../utils/api/auth";
import { apiFetch } from "../../utils/api/api";
import Input from "../ui/input/Input";

export default function LoginForm() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError("");
      const data = await apiFetch<{ token: string }>("/login", {
        method: "POST",
        body: JSON.stringify({ nome, senha }),
      });

      saveToken(data.token);
      window.location.href = "/home";
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Erro desconhecido");
      }
    }
  };

  return(
    <div className="login-form">
      <h2>Login</h2>

      <Input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <Input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={handleLogin} />

      {error && <div className="error">{error}</div>}
    </div>
  )
}

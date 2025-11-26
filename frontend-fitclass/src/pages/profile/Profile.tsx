import Button from "../../components/ui/button/Button";
import InputAlt from "../../components/formInputAlt/InputAlt";
import "./Profile.css";

function Profile() {
    return (<div className="profileMain">
        <div className="title">
            <p className="meu">Meu</p><p className="perfil">Perfil</p>
        </div>

        <div className="buttons">
            <Button title="Editar Dados" />
            <Button title="Redefinir Senha" />
        </div>

        <form className="forms">
            <label className="formLabel">Nome</label>
            <InputAlt />

            <label className="formLabel">Email</label>
            <InputAlt />

            <label className="formLabel">CEP</label>
            <InputAlt />
        </form>

        <div className="lowerButtons">
            <Button title="Fale Conosco" />
            <Button title="Excluir Conta" />
        </div>
    </div>
    );
}

export default Profile;
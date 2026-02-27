import "./Register.css";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { useNavigate } from "react-router-dom";

import iconlogin from "../../assets/icon_login.png";
import iconPessoa from "../../assets/Pessoa.png";
import iconCadeado from "../../assets/cadeado.png";

function Register() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/");
    }

    return (
        <AuthLayout
            title="Criar conta"
            subtitle="Preencha os dados para se cadastrar"
            icon={iconlogin}
        >
            <form className="register-form" onSubmit={handleSubmit}>

                <div className="register-field">
                    <img className="register-field-icon" src={iconPessoa} alt="" />
                    <input
                        className="register-input"
                        type="email"
                        placeholder="Digite seu email"
                        required
                    />
                </div>

                <div className="register-field">
                    <img className="register-field-icon" src={iconCadeado} alt="" />
                    <input
                        className="register-input"
                        type="password"
                        placeholder="Digite sua senha"
                        required
                    />
                </div>

                <div className="register-field">
                    <img className="register-field-icon" src={iconCadeado} alt="" />
                    <input
                        className="register-input"
                        type="password"
                        placeholder="Confirme sua senha"
                        required
                    />
                </div>

                <button className="register-button" type="submit">
                    Criar conta
                </button>

                <p className="register-login-link">
                    Já tem conta?{" "}
                    <span
                        onClick={() => navigate("/")}
                        style={{ color: "black", cursor: "pointer" }}
                    >
                        Entrar
                    </span>
                </p>

            </form>
        </AuthLayout>
    );
}

export default Register;
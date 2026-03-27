import './Login.css'
import { useState } from 'react'
import iconlogin from '../../assets/icon_login.png'
import iconPessoa from '../../assets/Pessoa.png'
import iconCadeado from '../../assets/cadeado.png'
import { loginService } from '../../services/userService';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const result = await loginService({ email, password })
            console.log(result);
            toast.success("Login realizado com sucesso");
            navigate("/dashboard");
        } catch (error) {
            toast.error("Email ou senha inválidos", error);
        }
    }

    return (
        <div className="page">
            <div className='Login'>
                <img className="icon-login" src={iconlogin} alt="Ícone de login" />

                <form onSubmit={handleLogin}>
                    <div className='Email'>
                        <img className='pessoa' src={iconPessoa} alt="Ícone de pessoa" />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='input-email'
                            placeholder="Digite seu email"
                            type="email"
                        />
                    </div>

                    <div className='Password'>
                        <img className='cadeado' src={iconCadeado} alt="Ícone de cadeado" />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='input-password'
                            placeholder="Digite sua senha"
                            type="password"
                        />
                    </div>

                    <p><a href="">Não sei minha senha</a></p>

                    <button type="submit" className='btn-login'>
                        Entrar
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Login
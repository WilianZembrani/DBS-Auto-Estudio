import './Login.css'
import { useNavigate } from "react-router-dom";
import iconlogin from '../../assets/icon_login.png'
import iconPessoa from '../../assets/Pessoa.png'
import iconCadeado from '../../assets/cadeado.png'


function Login() {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        navigate('/dashboard');
    }




    return (
        <div className="page">
            <div className='Login'>
                <img className="icon-login" src={iconlogin} alt="Ícone de login" />
                <form onSubmit={handleSubmit}>
                    <div className='Email'>
                        <img className='pessoa' src={iconPessoa} alt="Ícone de pessoa" />
                        <input className='input-email   ' placeholder="Digite seu email" type="text" name="email" id="email" />
                    </div>
                    <div className='Password'>
                        <img className='cadeado' src={iconCadeado} alt="Ícone de cadeado" />
                        <input className='input-password' placeholder="Digite sua senha" type="password" name="password" id="password" />
                    </div>
                    <p><a href="">Não sei minha senha</a></p>
                </form>
                <button onClick={handleSubmit} className='btn-login'>Entrar</button>
            </div >
        </div >
    )
}

export default Login
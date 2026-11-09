import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from '../../../supabaseClient.js';

import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc"; // Descomente quando implementar o login com Google

function traduzirErro(mensagem) {
    if (!mensagem) return 'Não foi possível entrar. Tente novamente.';
    if (mensagem.includes('Invalid login credentials')) return 'E-mail ou senha incorretos.';
    if (mensagem.includes('Email not confirmed')) return 'Confirme seu e-mail antes de entrar. Verifique sua caixa de entrada.';
    if (mensagem.includes('Failed to fetch')) return 'Falha de conexão. Verifique sua internet e tente novamente.';
    return mensagem;
}

function LoginForm({ onSwitchToRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { error: authError } = await supabase.auth.signInWithPassword({
                email: email.trim(),
                password: password,
            });

            if (authError) {
                setError(traduzirErro(authError.message));
                return;
            }

            navigate('/home');
        } catch (err) {
            console.error('Erro inesperado no login:', err);
            setError(traduzirErro(err?.message));
        } finally {
            setLoading(false);
        }
    };

    // PARA SER IMPLEMENTADO MAIS TARDE...
    // const handleGoogleLogin = async () => {
    //     setError('');
    //     const { error: authError } = await supabase.auth.signInWithOAuth({
    //         provider: 'google',
    //     });
    //     if (authError) {
    //         setError(traduzirErro(authError.message));
    //     }
    // };

    return (
        <div className="auth-form-container">
            <h1>Bem-vindo(a)!</h1>
            <p className="form-subtitle">Entre na sua conta para continuar.</p>

            <form className="login-form" onSubmit={handleLogin}>
                <div className="input-group">
                    <label htmlFor="login-email" className="visually-hidden">Endereço de e-mail</label>
                    <MdEmail className="input-icon" />
                    <input
                        id="login-email"
                        name="email"
                        type="email"
                        placeholder="Endereço de e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="login-password" className="visually-hidden">Senha</label>
                    <FaLock className="input-icon" />
                    <input
                        id="login-password"
                        name="password"
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <div className="form-options">
                    <Link to="/esqueci-minha-senha" className="forgot-password-link">
                        Esqueci minha senha
                    </Link>
                </div>

                <button type="submit" className="primary-button" disabled={loading}>
                    {loading ? 'Entrando...' : 'Entrar'}
                </button>

                {/* PARA SER IMPLEMENTADO MAIS TARDE...

                <div className="form-divider">
                    <hr />
                    <span>ou</span>
                    <hr />
                </div>

                <button type="button" className="social-button" onClick={handleGoogleLogin}>
                    <FcGoogle />
                    Entrar com Google
                </button>

                */}
            </form>

            <p className="switch-view-text">
                Não tem uma conta?{' '}
                <button type="button" onClick={onSwitchToRegister} className="switch-view-button">
                    Cadastre-se
                </button>
            </p>
        </div>
    );
}

export default LoginForm;

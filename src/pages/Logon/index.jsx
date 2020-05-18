import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import './style.css';
import heroesImgs from '../../assets/heroes.png'
import logoHeroes from '../../assets/logo.svg'
import { Link } from 'react-router-dom';


export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoHeroes} alt="Logo" />

                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImgs} alt="Heroes" />
        </div>
    );
}
import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import './style.css';
import heroesImgs from '../../assets/heroes.png'
import logoHeroes from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';



export default function Logon() {

    const [id, setID] = useState('');
    const history = useHistory();

    async function getUserLogin(e) {
        e.preventDefault();
        const data = {
            id
        }

        try {
            const response = await api.post(`/session`, data);
            // alert(`Seu ID é ${response.data.id} e seu name é ${response.data.name}`);
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.id);

            history.push('/profile');
        }
        catch (e) {
            alert(e);
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoHeroes} alt="Logo" />

                <form onSubmit={getUserLogin}>
                    <h1>Faça seu Logon</h1>
                    <input
                        placeholder="Sua ID"
                        onChange={(e) => setID(e.target.value)}
                    />
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
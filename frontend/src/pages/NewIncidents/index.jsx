import React, { useState, useEffect } from 'react';

import logoHeroes from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

export default function NewIncidents() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [ong, setOng] = useState(0);
    const [token, setToken] = useState('');

    const history = useHistory();

    useEffect(() => {
        setOng(localStorage.getItem('id'));
        setToken(localStorage.getItem('token'));
    }, [])

    async function handlerNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
            ong
        }
        try {
            const response = await api.post('/incidents/', data, {
                headers: {
                    Authorization: `Token ${token}`
                }
            });
            const newIncident = response.data;
            alert(`Caso criado com sucesso. ${newIncident.id}`);
            history.goBack();

        } catch (error) {
            alert(error);
        }

    }

    return (
        <div className="new-incidents-container">
            <div className="content">
                <section>
                    <img src={logoHeroes} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handlerNewIncident}>
                    <input
                        placeholder="Título do caso"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Valor em reais"
                        onChange={(e) => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

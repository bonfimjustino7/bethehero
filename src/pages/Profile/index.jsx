import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';
import LogoImg from '../../assets/logo.svg';
import api from '../../services/api';


export default function Profile() {

    const history = useHistory();

    let name_ong = '';
    let token = '';
    let id = '';

    if (localStorage.getItem('name') && localStorage.getItem('token') && localStorage.getItem('id')) {
        name_ong = localStorage.getItem('name');
        token = localStorage.getItem('token');
        id = localStorage.getItem('id');
    } else {
        history.push('/');
    }

    const [cases, setCase] = useState([]);

    useEffect(() => {
        async function getInsidents() {
            try {
                const response = await api.get('/incidents/', {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                    params: {
                        ong: id
                    }
                });
                const ca = response.data;

                setCase(ca);

            } catch (erro) {
                alert(erro);
            }
        }
        getInsidents();

    }, []);

    function handlerLogout() {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        localStorage.removeItem('id');

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt="Be The Hero" />
                <span>Bem vinda, {name_ong}</span>

                <Link className="button" to="/incidents/new">
                    Cadastrar novo caso
                </Link>
                <button type="button" onClick={handlerLogout}>
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>
            <h1>Casos cadastrados</h1>

            <ul>
                {cases.map((c) => (
                    <li key={c.id}>
                        <strong>CASO:</strong>
                        <p>{c.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{c.description}</p>

                        <strong>VALOR:</strong>
                        <p>{c.value}</p>

                        <button type="button">
                            <FiTrash2 size={20} color="a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

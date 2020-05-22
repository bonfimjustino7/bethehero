import React, { useState } from 'react';

import './styles.css';
import logoHeroes from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';


export default function Register() {

    // states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory(); // history do react-router-dom

    async function handlerSubmit(e) {
        e.preventDefault(); // Impede da pagina recarregar quando for feito o submit

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('/ongs/', data);
            alert(`Seu ID é ${response.data.id}`);

            history.push('/');

        } catch (e) {
            alert(`Erro ao cadastrar tente novamente, error: ${e}`);
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoHeroes} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>
                </section>

                <form onSubmit={handlerSubmit}>
                    <input
                        placeholder="Nome da ONG"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="WhatsApp"
                        onChange={(e) => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <input
                            placeholder="UF"
                            style={{ width: 80 }}
                            onChange={(e) => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}


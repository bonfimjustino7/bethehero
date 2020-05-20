import React from 'react';

import logoHeroes from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function NewIncidents() {
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

                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />

                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

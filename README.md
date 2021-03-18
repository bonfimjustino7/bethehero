## BE THE HERO
![enter image description here](https://github.com/bonfimjustino7/bethehero/blob/master/frontend/src/assets/logo.svg) 
![enter image description here](https://miro.medium.com/max/600/1*N5Iep1wJY1iXgMzpHxzE8w.png)

## Ajustes
Front-end criando em react JS como ensinado na Semana OmniStack 11 pelo Diego Fernandes, com alguns ajustes a mais como: 
- Na tela de /profile está sendo retornado os casos que a ONG cadastrou, assim mantendo um nível de acesso para cada usuário;
- A API foi escrita em Python, especificament em Django utilizando o Django Rest Framework. Escolhi esse framework, não por o nodejs ser ruim, mas por que já trabalho com Django e já tenho esperiência com ele, então achei melhor utilizá-lo para estudar o framework Rest do Django.
- Nas telas de /profile e /incidents/new como ensinado foi usando autenticação com Token, então se o usuário entrar sem o token, ele será redirecionando para a página de Logon.

## Atualizações
- Rotas privadas;


## Tecnlogias Utilizadas
- Node JS
- Python 3.6
- Expo
- Front-End: React JS;
- Mobile: React Native;
- Back-end: Django Rest Framework;

## Instalação
### Back-end
- `git clone 'url do projeto'.git`
- `cd backend`; Navega para a pasta
- `python3 -m venv venv`; Criando venv python
- `pip install -r requirements`; Instalando dependência dos pacotes py
- `python manage.py migrate`; Cria todos as migrations do sistema
- `python manage.py runserver`; Roda o servidor do django;

### Front-end
- `cd frontend`; Navega para a pasta
- `npm install`; Instala as dependências
- `npm start`; Roda o servidor do frontend

### Mobile
- `cd mobile`; Navega para a pasta
- `npm install`; Instala as dependências
- `npm start`; Roda o servidor do expo


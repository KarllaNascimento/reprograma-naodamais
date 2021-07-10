<h1 align="center">
    <br>
    <p align="center">Projeto Final {reprograma}<p>
</h1>

<p align="center">
  <img width="470" src="src/assets/teCuida.gif">
</p>

## Conheça o projeto :open_book:

<br>

<p align="justify"> A sociedade em que vivemos deu muito errado para a grande maioria das pessoas. O falso conservadorismo que nos permeia faz com que assuntos como a vida sexual da mulher não sejam discutidos. O resultado disso: violência. Se entre mulheres cis heterossexuais a experiência ginecológica já é traumática. Quando fazemos o recorte para mulheres lésbicas, bissexuais e pessoas não binárias, uma consulta ao ginecologista é composta por violência, apagamento, desrespeito e a sensação de que ter acesso ao básico, como um tratamento médico humanizado, é algo que jamais será alcançado. Afinal, o problema é bem mais profundo quando paramos para pensar que as faculdades de medicina não formam médicas e médicos para nada que não seja heteronormativo. 
  
<p align="justify"> Como resultado a esses dois problemas existe uma verdadeira fuga desse grupo das consultas ginecológicas. De acordo com a Febrasgo (Federação Brasileira das Associações de Ginecologia e Obstetrícia) 76% das mulheres (independentemente de sua sexualidade) realizam consultas ginecológicas anualmente. Mas quando falamos das mulheres que fazem sexo com mulheres o índice cai para 47%. Uma situação extremamente preocupante porque a prevenção é o melhor caminho para evitar problemas e ter uma boa saúde. 
  
<p align="justify"> Atualmente o processo de encontrar uma boa ginecologista se dá por meio do boca a boca ou através de indicação em grupos nas redes sociais. Fora o difícil acesso para encontrar médicas/os especialistas para tratar sobre o assunto. Pensando nisso e como forma de mitigar esse problema, decidi criar a <strong>teCuida</strong>, que será um ambiente seguro e de apoio tanto para essas pessoas que buscam um atendimento humanizado quanto para médicos que desejam se instruir ou contribuir sobre quais metodologias e abordagens devem ser adotadas. 
  
  
  
 ## Como vai funcionar? :hammer_and_wrench:
  
<strong>teCuida</strong> é uma API RESTfull feita com a tecnologia Javascript no Node.js e integrada ao MongoDB que atende três clientes: usuáries, pessoas da medicina que buscam informação sobre o tema e especialistas atuantes na área desejam contribuir com seus conhecimentos. Sendo assim, será possível realizar ações como o cadastro, atualização e visualização de médicos que já fazem esse atendimento especializado, considerando informações como preço social, plano de saúde, descrição e gênero. Assim como também será possível, por parte dos médicos atuantes, o cadastro e atualização de guias para realização de um atendimento não violento. 

Por se tratar de um tema que requer cautela e abordagem segura, ações como cadastro, atualização e deleção de informações só podem ser realizadas por usuários já cadastrados no sistema.



## Tecnologias utilizadas:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|

<br>
<br>

## 📁 Arquitetura MVC

```
 📁 teCuida
   |
   |-  📁 src
   |    |
   |    |- 📁 assets
   |    |    |- 📄 teCuida.gif
   |    |  
   |    |- 📁 controllers
   |    |    |- 📄 authController.js
   |    |    |- 📄 doctorUserController.js
   |    |    |- 📄 guideController.js
   |    |    |- 📄 userController.js 
   |    |
   |    |- 📁 data  
   |    |    |- 📄 dbConfig.js
   |    | 
   |    |- 📁 helpers
   |    |    |- 📄 check-token.js
   |    |    |- 📄 get-user-by-token.js
   |    |
   |    |- 📁 models
   |    |    |- 📄 doctorUser.js 
   |    |    |- 📄 guide.js 
   |    |    |- 📄 user.js
   |    | 
   |    |- 📁 routes
   |    |    |- 📄 auth.routes.js
   |    |    |- 📄 doctorUser.routes.js
   |    |    |- 📄 guide.routes.js
   |    |    |- 📄 index.js
   |    |    |- 📄 user.routes.js
   |    |   
   |    |- 📄 app.js 
   |    
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 README.md 
   |- 📄 server.js

```

<br>
<br>

     
     
## Regras de negócio :handshake:

#### Rota de registro:
    
- [x]  Cadastro só pode ser feito se todos os campos obrigatórios forem preenchidos;
- [x]  Cadastro só pode ser feitos se a senha digitada for a mesma da confirmação senha;
- [x]  Cadastro não pode ser feito com um e-mail que já esteja no sistema;
- [x]  Ausência do CRM não pode ser impeditivo na realização de cadastro.
    
#### Rota de login:
    
- [x]  Acesso só pode ser liberado caso o e-mail e senha coincidam com os já cadastrados.
    
#### Rota de usuário:
    
- [x]  Atualização só pode ser feita por um usuário já cadastrado;
- [x]  Atualização de senha só acontece se as senhas coincidirem;
- [x]  Atualização só pode ser feita pelo próprio usuário.

#### Rota de cadastro de médicos/as:
    
- [x]  Cadastro só pode ser feito por um usuário logado no sistema;
- [x]  Nome, endereço, preço social, plano de saúde, descrição e gênero devem ser campos obrigatórios;
- [x]  O cadastro só pode ser realizado se todos os campos obrigatórios estiverem preenchidos;
- [x]  O mesmo médico não pode ser cadastrado duas vezes.
    
#### Rota de visualização de médicos/as:    
- [x]  Deve ser possível retornar apenas médicos que aceitem preço social;
- [x]  Deve ser possível retornar apenas médicos que aceitem plano de saúde; 
- [x]  Deve ser possível retornar apenas médicas do gênero feminino; 
- [x]  Deve ser possível retornar apenas médicos do gênero masculino. 

    
#### Rota para atualização de médico:
    
- [x]  Atualização só pode ser feito por um usuário logado no sistema;
- [x]  A atualização só pode ser feita se todos os campos obrigatórios estiverem preenchidos.
- [x]  O mesmo médico não pode ser cadastrado duas vezes.   
    
#### Rota para deleletar médico: 

- [x]  Médico só pode ser apagado por um usuário logado no sistema.
    
#### Rota de cadastro de guia:
    
- [x]  Cadastro só pode ser feito por um usuário logado no sistema;
- [x]  Nome, endereço, preço social, plano de saúde, descrição e gênero devem ser campos obrigatórios;
- [x]  O cadastro só pode ser realizado se todos os campos obrigatórios estiverem preenchidos.
- [x]  O mesmo médico não pode ser cadastrado duas vezes.
    
#### Rota para atualização de guia:
    
- [x]  Atualização só pode ser feito por um usuário logado no sistema;
- [x]  A atualização só pode ser feita se todos os campos obrigatórios estiverem preenchidos. 
    
#### Rota para deletar guia:

- [x]  Guia só pode ser apagada por um usuário logado no sistema.    
    
<br>
<br>
     
## Implementações Futuras

     
## Autora woman_technologist

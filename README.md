<h1 align="center">
    <br>
    <p align="center">Projeto Final {reprograma}<p>
</h1>

<p align="center">
  <img width="470" src="src/assets/teCuida.gif">
</p>

## Conheça o projeto 

<br>

<p align="justify"> A sociedade em que vivemos deu muito errado para a grande maioria das pessoas. O falso conservadorismo que nos permeia faz com que assuntos como a vida sexual da mulher não sejam discutidos. O resultado disso: violência. Se entre mulheres cis heterossexuais a experiência ginecológica já é traumática. Quando fazemos o recorte para mulheres lésbicas, bissexuais e pessoas não binárias, uma consulta ao ginecologista é composta por violência, apagamento, desrespeito e a sensação de que ter acesso ao básico, como um tratamento médico humanizado, é algo que jamais será alcançado. Afinal, o problema é bem mais profundo quando paramos para pensar que as faculdades de medicina não formam médicas e médicos para nada que não seja heteronormativo. 
  
<p align="justify"> Como resultado a esses dois problemas existe uma verdadeira fuga desse grupo das consultas ginecológicas. De acordo com a Febrasgo (Federação Brasileira das Associações de Ginecologia e Obstetrícia) 76% das mulheres (independentemente de sua sexualidade) realizam consultas ginecológicas anualmente. Mas quando falamos das mulheres que fazem sexo com mulheres o índice cai para 47%. Uma situação extremamente preocupante porque a prevenção é o melhor caminho para evitar problemas e ter uma boa saúde. 
  
<p align="justify"> Atualmente o processo de encontrar uma boa ginecologista se dá por meio do boca a boca ou através de indicação em grupos nas redes sociais. Fora o difícil acesso para encontrar médicas/os especialistas para tratar sobre o assunto. Pensando nisso e como forma de mitigar esse problema, decidi criar a <strong>teCuida</strong>, que será um ambiente seguro e de apoio tanto para essas pessoas que buscam um atendimento humanizado quanto para médicos que desejam se instruir ou contribuir sobre quais metodologias e abordagens devem ser adotadas. 
  
  
  
 ## Como vai funcionar?
  
 <p align="justify"> 


## Tecnologias que vamos usar:
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

## 📁 Arquitetura 

```
 📁 FavMovies
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 tituloController.js
   |         |- 📄 estudioController.js
   |
   |    |- 📁 models
   |         |- 📄 titulo.js
   |         |- 📄 estudio.js
   |
   |    |- 📁 routes
   |         |- 📄 tituloRoutes.js 
   |         |- 📄 estudioRoutes.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js

```

<br>
<br>

### Regras de negócio

- [x]  Não deverá ser possível criar estudio com o mesmo nome
- [x]  Não deverá ser possível criar título com o mesmo nome
- [x]  Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema

<br>
<br>

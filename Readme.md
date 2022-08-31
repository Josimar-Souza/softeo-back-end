<h1>Back-end para o processo seletivo da Softeo.</h1>
<p>Esse projeto foi desenvolvido para o processo seletivo da Softeo, consiste em uma api para cadastrar clientes.</p>

<h1>Rotas:</h1>
<span style="color: cyan"><strong>GET</strong></span>
<span>/customers</span>
<p>Retorna todos os clientes cadastrados.</p>
<span style="color: cyan"><strong>GET</strong></span>
<span>/customers/:id</span>
<p>Retorna um cliente cadastrado identificado pelo id informado na rota.</p>
<span style="color: red"><strong>DELETE</strong></span>
<span>/customers/:id</span>
<p>Deleta um cliente com seu id informado na rota</p>
<span style="color: lightgreen"><strong>POST</strong></span>
<span>/customers</span>
<p>Cadastra um novo cliente.</p>
<p>Exemplo do corpo da requisição com os tipos e restrições das chaves.</p>
<pre>
  {
    "name": string, min 3, max 30, necessário,
    "email": string, email válido, necessário,
    "phone": number, min 11 dígitos, max 11 dígitos necessário,
    "installments": [
      {
        "date": string, dd-mm-aaaa, necessário,
        "value": number, necessário,
      }
    ], necessário
  }
</pre>
<span style="color: magenta"><strong>PUT</strong></span>
<span>/customers/:id</span>
<p>Atualiza o cadastro de um cliente identificado pelo seu id informado na rota</p>
<p>Exemplo do corpo da requisição com os tipos e restrições das chaves</p>
<pre>
  {
    "name": string, min 3, max 30, opcional,
    "email": string, email válido, opcional,
    "phone": number, min 11 dígitos, max 11 dígitos, opcional,
    "installments": [
      {
        "date": string, dd-mm-aaaa, necessário,
        "value": number, necessário,
      }
    ], opcional
  }
</pre>

<h1>Desenvolvimento:</h1>
<p>Para esse projeto criei uma api utilizando Node.js e Express, Joi para as validações, Pm2 para gerenciar os processos e o MongoDB como banco de dados</p>
<p>Todas as tecnologias utilizadas durante o desenvolvimento</p>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>DotEnv</li>
  <li>Joi</li>
  <li>Http-Status-Codes</li>
  <li>MongoDB</li>
  <li>Pm2</li>
  <li>ESlint</li>
  <li>Nodemon</li>
</ul>

<h2>Deploy:</h2>
<p>O projeto foi publicado no <a href="https://www.heroku.com/" target="_blank">Heroku</a>, uma plataforma de aplicação na nuvem.</p>
<p>O link para a api é esse: <a href="https://softeo-back-end.herokuapp.com/customers" target="_blank">https://softeo-back-end.herokuapp.com/customers</a></p>

<h1>Contatos:</h1>
<p>contact.josimarsouza@gmail.com</p>
<a href="https://www.linkedin.com/in/josimar-souza-brito/" target="_blank">Linkedin</a>

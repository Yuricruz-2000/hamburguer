Hamburgueria API - ADS Uninassau
Este projeto é uma API REST desenvolvida como parte do curso de Análise e Desenvolvimento de Sistemas na Uninassau Aracaju. O sistema gerencia o backend de uma hamburgueria, permitindo o controle de categorias, produtos, pedidos, entregas e avaliações.

Tecnologias Utilizadas
Node.js: Ambiente de execução Javascript.
Express: Framework para construção das rotas e lógica do servidor.
Sequelize (ORM): Manipulação do banco de dados MySQL através de objetos.
MySQL: Banco de dados relacional para persistência dos dados.
Sequelize CLI: Interface de linha de comando para gerenciamento de migrations.

Estrutura do Banco de Dados
O projeto utiliza um modelo relacional focado em integridade, utilizando chaves estrangeiras (foreign keys) e o padrão snake_case para os campos.

Principais Relacionamentos:

Categorias e Produtos: Uma categoria possui muitos produtos (1:N).
Pedidos e Entregas: Um pedido possui uma única entrega (1:1).
Pedidos e Avaliações: Um pedido possui uma única avaliação (1:1).
Nota: O projeto utiliza paranoid: true, o que significa que os registros não são apagados permanentemente do banco, mas sim marcados com uma data de exclusão no campo deletedAt.

Como Instalar e Rodar

Clone o repositório: git clone https://github.com/Yuricruz-2000/hamburguer.git

Instale as dependências:
npm install

Configure o banco de dados:
Edite o arquivo config/config.json com suas credenciais do MySQL.

Execute as Migrations:
Este comando criará todas as tabelas e relacionamentos automaticamente:
npx sequelize-cli db:migrate

Inicie o servidor:
node app.js

Autor
Yuri Cruz Brandão Estudante de Análise e Desenvolvimento de Sistemas - Uninassau Aracaju.
Foco em Backend Architecture, Node.js e SQL.

## Decisões Técnicas

- **Session Storage**: MemoryStore em desenvolvimento. 
Em produção recomenda-se connect-pg-simple ou Redis.

- **Autenticação**: bcrypt + express-session

- **Autorização**: se o usuario não tiver autorização ele não será redirecionado pelo server. O servir irá apenas informar com a mensagem e codigo correto o erro e será responsabilidade do front-end decidir sobre o redirecionamento.

- **ORM**: Sequelize com PostgreSQL

- **Utils**: Função de Hash com bcrypt por enquanto direto em authController. 
Em produção recomenda-se criação de pasta /Utils para funções de apoio.
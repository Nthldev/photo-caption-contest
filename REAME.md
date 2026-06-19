## Decisões Técnicas

- **Session Storage**: MemoryStore em desenvolvimento. 
Em produção recomenda-se connect-pg-simple ou Redis.

- **Autenticação**: bcrypt + express-session

- **ORM**: Sequelize com PostgreSQL

- **Utils**: Função de Hash com bcrypt por enquanto direto em authController. 
Em produção recomenda-se criação de pasta /Utils para funções de apoio.
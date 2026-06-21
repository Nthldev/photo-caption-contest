## Decisões Técnicas

- **Buscar Fotos/Legendas**: o exercício explicitamente pede para que as legendas associadas às fotos só sejam acessadas quando buscar a imagem por id e não quando buscar todas as imagens.

- **Session Storage**: MemoryStore em desenvolvimento. 
Em produção recomenda-se connect-pg-simple ou Redis.

- **Autenticação**: bcrypt + express-session

- **Autorização**: se o usuario não tiver autorização ele não será redirecionado pelo server. O servir irá apenas informar com a mensagem e codigo correto o erro e será responsabilidade do front-end decidir sobre o redirecionamento.

- **ORM**: Sequelize com PostgreSQL

- **Utils**: Função de Hash com bcrypt por enquanto direto em authController. 
Em produção recomenda-se criação de pasta /Utils para funções de apoio.

- **commits**: commits foram feitos inicialmente na lingua nativa do desenvolvedor em portugues e mantido desta forma para manter coerência. 
No entanto, o recomendado é realização de commits em inglês para entendimento global.

- **cache/json**: Devido à um erro apresentado durante o desenvolvimento entre o cache e o objeto do sequelize optei por transformar as instancias sequelize em json puro com .toJSON() antes de inserir no cache.
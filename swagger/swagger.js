const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API for Photo Caption Contest',
            description: 'API for logged users to insert captions to images',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor de Desenvolvimento (Local)'
            },
        ],
        components: {
            securitySchemes: {
                cookieAuth: {
                    type: 'apiKey',
                    in: 'cookie',
                    name: 'connect.sid'
                }
            }
        }
    },
        
    apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
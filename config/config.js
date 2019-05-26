const env = process.env.NODE_ENV || 'development';

const config = () => {
    switch(env) {
        case 'development':
            return {
                db_string: 'mongodb+srv://usuario_test:<password>@clusterapi-dgjk3.mongodb.net/test?retryWrites=true',
                jwt: {
                    pass: 'batatafrita2019',
                    expires: {
                        expiresIn: '7d'
                    }
                }
            }

        case 'hml':
            return {
                db_string: 'mongodb+srv://usuario_test:<password>@clusterapi-dgjk3.mongodb.net/test?retryWrites=true',
                jwt_pass: 'batatafrita2019',
                jwt_expires: {
                    expiresIn: '7d'
                }
            }

        case 'prod':
            return {
                db_string: 'mongodb+srv://usuario_test:<password>@clusterapi-dgjk3.mongodb.net/test?retryWrites=true',
                jwt_pass: 'batatafrita2019',
                jwt_expires: {
                    expiresIn: '7d'
                }
            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();
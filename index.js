
import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import path from 'path';
import {connect} from './services/transactionService.js'
import {logger} from './config/logger.js'

const app = express();
app.use(cors());
app.use(express.json());

global.log = logger;


/**
 * Vinculando o React ao app
 */
//app.use(express.static(path.join(__dirname, 'client/build')));

/**
 * Rota raiz
 */
app.get('/api/', (_, response) => {
  response.send({
    message:
      'Bem-vindo à API de lançamentos. Acesse /transaction e siga as orientações',
  });
});

/**
 * Rotas principais do app
 */
app.use('/api/transaction', routes);

/**
 * Conexão ao Banco de Dados
 */

//console.log('Iniciando conexão ao MongoDB...');

(async()=>{

  try {
    await connect(process.env.DB_CONNECTION);
    //console.log (await distinctYearMonth());
  } catch (error) {
    log.error(error.message);
    process.exit();
  }
  
  //await disconect();
})(); 


 /**
   * Definição de porta e
   * inicialização do app
   */  
  const APP_PORT = process.env.PORT || 3001;
  app.listen(APP_PORT, () => {
    log.info(`Servidor iniciado na porta ${APP_PORT}`);
  });


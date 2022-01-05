//impotação do aap para rodar no servidor
import { app } from './app';

app.listen(process.env.SERVER_PORT);
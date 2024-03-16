import * as SQLite from "expo-sqlite"
import senha from "./entities/senha"; /*NOME DA MINHA ENTIDADE, LEMBRAR DE IMPORTAR ESSA BAGAÇA*/

const config = {
    database: "senha",
    driver: SQLite,
    entities: [senha], /*NOME DA MINHA ENTIDADE, LEMBRAR DE IMPORTAR ESSA BAGAÇA*/
    synchronize: true,
    type: "expo"
}

export default config;
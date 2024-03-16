import { EntitySchema } from "typeorm";

const senha = new EntitySchema ({
    name: "Senha",
    tableName: "senhas",
        columns:{
            id:{
                primary: true,
                type: "int",
                generated: true
            },
            senha: {
                type: "varchar"
            }
        }
});

export default senha
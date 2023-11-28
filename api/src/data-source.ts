import "reflect-metadata"
import {DataSource} from "typeorm"
import {User} from "./entity/User"
import {Medico} from "./entity/Medico"


export const AppDataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "avaliacao",
        entities: [User, Medico],
        synchronize: true,
        logging:false
        
    })

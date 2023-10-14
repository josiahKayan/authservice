import { AppDataSource } from "../data-source";

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log('Connected');
    })
    .catch((error) => console.log(error))

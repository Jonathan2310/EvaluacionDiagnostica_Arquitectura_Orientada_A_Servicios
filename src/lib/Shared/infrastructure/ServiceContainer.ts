import { FlowerGetAll } from '../../Catalogo/application/FlowerGetAll/FlowerGetAll';
import { InMemoryFlowerRepository } from '../../Catalogo/infrastructure/InMemoryFlowerRepository';
import { FlowerGetById } from '../../Catalogo/application/FlowerGetById/FlowerGetById';
import { FlowerCreate } from '../../Catalogo/application/FlowerCreate/FlowerCreate';
import { FlowerEdit } from '../../Catalogo/application/FlowerEdit/FlowerEdit';
import { FlowerDelete } from '../../Catalogo/application/FlowerDelete/FlowerDelete';
import { PostgresFlowerRepository } from '../../Catalogo/infrastructure/PostgresFlowerRepository';
import { MySQLFlowerRepository } from '../../Catalogo/infrastructure/MysqlFlowerRepository';



//const flowerRepository = new InMemoryFlowerRepository();
const flowerRepository = new MySQLFlowerRepository();

export const ServiceContainer = {
    flower: {
        getAll: new FlowerGetAll(flowerRepository),
        getById: new FlowerGetById(flowerRepository),
        create: new FlowerCreate(flowerRepository),
        edit: new FlowerEdit(flowerRepository),
        delete: new FlowerDelete(flowerRepository),
    },
}
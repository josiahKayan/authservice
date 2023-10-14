import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Createauth1697226336891 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(new Table({

            name:'auth',
            columns:[
                {
                    name:'id',
                    type:'uuid',
                    isPrimary:true,
                    generationStrategy:'uuid',
                },
                {
                    name:'email',
                    type:'varchar',
                    isNullable:false,
                },
                {
                    name:'token',
                    type:'varchar',
                    isNullable:false,
                },
                {
                    name:'dateLogin',
                    type:'date',
                    isNullable:false,
                },
            ]
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('auth');
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');

    }

}

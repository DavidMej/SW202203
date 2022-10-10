import { IUser } from "../entities/Usuario";
import { AbstractDao } from "./AbstractDao";
import  sqlite from "sqlite";


export class UsuarioDao extends AbstractDao<IUser> {

    public constructor(db: sqlite.Database) {
        super('Usuario', db as sqlite.Database);
        super.exec('CREATE TABLE IF NOT EXISTS Usuario ('
            + ' _id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,'
            + ' identidad TEXT,'
            + ' nombre TEXT,'
            + ' apellido TEXT,'
            + ' direction TEXT,'
            + ' edad NUMERIC,'
            + ' correo TEXT,'
            + ' telefono NUMERIC);').then().catch(e => console.error(e));
    }

    public async getUsuarios() {
        return super.findAll()
    }

    public async getUsuarioById(identifier: Partial<IUser>) {
        try {
            const result = await super.findByID(identifier);
            return result;
        } catch (ex: unknown) {
            console.log("UsuarioDao sqlite:", (ex as Error).message);
            throw ex;
        }
    }

    public async insertNewUsuario(newUsuario: IUser) {
        try {
            const result = await super.createOne(newUsuario);
            return result;
        } catch (ex: unknown) {
            console.log("UsuarioDao sqlite:", (ex as Error).message);
            throw ex;
        }
    }

    public async updateNewUsuario(updateUsuario: IUser) {
        try {
            const { _id, ...updateObject } = updateUsuario;
            const result = await super.update({ _id }, updateObject);
            return result;

        } catch (ex: unknown) {
            console.log("UsuarioDao sqlite:", (ex as Error).message);
            throw ex;
        }
    }

    public async deleteUsuario(deleteUsuario: Partial<IUser>) {
        try {
            const { _id } = deleteUsuario;
            const result = await super.delete({ _id });
            return result;
        } catch (ex: unknown) {
            console.log("UsuarioDao sqlite:", (ex as Error).message);
            throw ex;
        }
    }

}
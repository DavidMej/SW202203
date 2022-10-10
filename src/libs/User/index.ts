import { getConnection } from "@server/dao/models/sqlite/SqliteConn";
import { UsuarioDao } from "@server/dao/models/sqlite/UserDao";

export interface IUser {
    identidad: string;
    nombre: string;
    apellido: string;
    direccion: string;
    edad: number;
    correo: string;
    telefono: number;
}

export class Usuarios {

    private dao: UsuarioDao;
  
    public constructor() {
      getConnection()
      .then(conn=>{
        this.dao = new UsuarioDao(conn);
      })
      .catch(ex=>console.error(ex));
    }

    public getAllUsuarios() {
      return this.dao.getUsuarios();
    }

    public getUsuarioByIndex( index:number) {
        return this.dao.getUsuarioById({_id:index});
    }
  
    public addUsuario( usuario:IUser) {
      return this.dao.insertNewUsuario(usuario);
    }

    public updateUsuario( index:number, usuario:IUser){
     return this.dao.update({_id:index}, usuario);
    }

    public deleteUsuario( index:number) {
      return this.dao.deleteUsuario({_id:index});
    }
  
}
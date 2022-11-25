import {Request, Response} from "express";
import pool from "../database";


class GamesController{
    public async list(req: Request, res:Response){
        try {
            const  games = await pool
                .then((r: any)=> r.query('SELECT * FROM games'));
            res.json(games);
        }catch (e){
             console.log(e);
        }

    }
}
const gamesController=new GamesController();
export default gamesController;
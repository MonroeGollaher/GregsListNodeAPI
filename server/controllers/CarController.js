import BaseController from "../utils/BaseController"
import {carService} from "../services/CarService"
import { carService } from "../services/CarService"

export class CarController extends BaseController {
    constructor(){
      super("api/cars")
      this.router
        .get("", this.getAll)
        .post("", this.create)
        .delete("/:id", this.delete)
        .put("/:id", this.edit)
    }

    async getAll(req, res, next){
        try {
            let cars = await carService.getAll(req.query)
            res.send(cars)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            res.send(await carService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            res.send(await carService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next){
        try {
            res.send(await carService.edit(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }
}
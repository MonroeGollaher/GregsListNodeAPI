import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CarService {
    async getAll(query = {}){
        let cars = dbContext.Cars.find(query)
        return cars
    }

    async create(body){
        return await dbContext.Cars.create(body)
    }

    async delete(id){
        let car = dbContext.Cars.findByIdAndDelete(id)
        if(!car){
            throw new BadRequest("No car to be found")
        }
        return car
    }

    async edit(id, body){
        return await dbContext.Cars.findByIdAndUpdate(id, body, {new: true })
    }
}

export const carService = new CarService()
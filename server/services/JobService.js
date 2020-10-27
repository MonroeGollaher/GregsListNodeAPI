import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class JobService {
    async getAll(query ={}){
        let data = await dbContext.Jobs.find(query)
        return data
    }

    async create(body){
        return await dbContext.Jobs.create(body) 
    }

    async edit(id, body){
        return await dbContext.Jobs.findByIdAndUpdate(id, body, {new: true})
    }

    async delete(id){
        let job = await dbContext.Jobs.findByIdAndDelete(id)
        if(!job){
            throw new BadRequest("not a job")
        }
        return job
    }
}


export const jobService = new JobService()
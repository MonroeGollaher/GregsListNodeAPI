import BaseController from "../utils/BaseController"
import {jobService} from "../services/JobService"

export class JobController extends BaseController {
    constructor(){
        super("api/jobs")
        this.router
        .get("", this.getAll)
        .post("", this.create)
        .delete("/:id", this.delete)
        .put("/:id", this.edit)
    }

    async getAll(req, res, next){
        try {
            let jobs = await jobService.getAll(req.query)
            res.send(jobs)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
            res.send(await jobService.create(req.body))
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next){
        try {
            res.send(await jobService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next){
        try {
            res.send(await jobService.edit(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }

}
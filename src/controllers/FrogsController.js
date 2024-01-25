import { query } from "express";
import { frogsService } from "../services/FrogsService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";





export class FrogsController extends BaseController{
  constructor(){
    super('api/frogs')
    this.router
    .post('', this.createFrog)
    .get('', this.getAllFrogs)
    .get('/search', this.searchFrogs)
    .get('/age', this.getFrogsByAge)
    .get('/pages', this.getPagesOfFrogs)
  }

  async createFrog(req, res, next){
    try {
      const frogData = req.body
      const frog = await frogsService.createFrog(frogData)
      res.send(frog)
    } catch (error) {
      next(error)
    }
  }

  async getAllFrogs(req, res, next){
    try {
      logger.log(req.query)
      const frogs = await frogsService.getAllFrogs(req.query)
      res.send(frogs)
    } catch (error) {
      next(error)
    }
  }

  async searchFrogs(req, res, next){
    try {
      const frogs = await frogsService.searchFrogs(req.query)
      res.send(frogs)
    } catch (error) {
      next(error)
    }
  }
  async getFrogsByAge(req, res, next){
    try {
      const frogs = await frogsService.getFrogsByAge(req.query)
      res.send(frogs)
    } catch (error) {
      next(error)
    }
  }

  async getPagesOfFrogs(req, res, next){
    try {
      const results = await frogsService.getPagesOfFrogs(req.query)
      res.send(results)
    } catch (error) {
      next(error)
    }
  }
}

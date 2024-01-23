import { dbContext } from "../db/DbContext.js"




class FrogsService{
  async getFrogsByAge(query) {
    query.lt = query.lt? query.lt : Infinity
    query.gt = query.gt? query.gt : 0
    const frogs = await dbContext.Frogs.find({age: {$lt: query.lt, $gt: query.gt}})
    return frogs
  }
  async searchFrogs(query) {
    // NOTE change what they typed into a RegEx (regular expression) pattern
      const rgxColor = new RegExp(query.color, 'ig') // i for insensitive casing and g for global search
      const rgxLikes = new RegExp(query.likes, 'ig')
      const rgxDiet = new RegExp(query.diet, 'ig')
      // This format, will shrink the results, based on matching values
      // const frogs = await dbContext.Frogs.find({color: {$regex: rgxColor}, likes: {$regex: rgxLikes}})
    const frogs = await dbContext.Frogs
    .find({$or: [{color: {$regex: rgxColor}}, {likes:{$regex: rgxLikes}}, {diet: {$regex: rgxDiet}}]})
    return frogs
  }

  async getAllFrogs(query) {
    const frogs = await dbContext.Frogs.find(query)
    return frogs
  }
  async createFrog(frogData) {
    const frog = await dbContext.Frogs.create(frogData)
    return frog
  }

}

export const frogsService = new FrogsService()

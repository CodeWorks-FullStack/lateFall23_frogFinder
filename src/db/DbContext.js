import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { FrogSchema } from '../models/Frog.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Frogs = mongoose.model('Frog', FrogSchema)
}

export const dbContext = new DbContext()

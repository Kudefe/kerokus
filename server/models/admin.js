import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const adminSchema = new Schema({
  name: { type: String, required: true},
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
})

const Admin = mongoose.model('Admin', adminSchema)

export default Admin

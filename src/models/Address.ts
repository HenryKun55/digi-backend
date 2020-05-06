import { Schema, model } from 'mongoose'

const AddressSchema = new Schema({
  cep: String,
  rua: String,
  numero: String,
  cidade: String,
  bairro: String,
  uf: {
    type: String,
    min: 2,
    max: 2
  }
}, {
  timestamps: true
})

export default model('Address', AddressSchema)
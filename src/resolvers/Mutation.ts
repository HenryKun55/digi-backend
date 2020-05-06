import Address from '../models/Address'

const Mutation = {
    async addAddress(_, { cep, rua, numero, bairro, cidade, uf }) {
        const address = await Address.create({cep, rua, numero, bairro, cidade, uf})

        return address
    }
}

export default Mutation

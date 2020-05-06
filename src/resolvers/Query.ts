import Address from '../models/Address'

const Query = {
    async address(){
        return await Address.find()
    }
}

export default Query
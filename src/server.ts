import mongoose from 'mongoose'
import { GraphQLServer } from 'graphql-yoga'
import resolvers from './resolvers'

export default class Server {

  graphql: GraphQLServer

  public constructor() {
    this.graphql = new GraphQLServer({
      typeDefs: `${__dirname}/typedefs/app.graphql`,
      resolvers,
    })

    this.database()
  }

  start() {
    this.graphql.start()
  }

  private database(): void {
    mongoose.connect('mongodb+srv://digi:NtK65rwdRM1svWCk@cluster0-1u75s.mongodb.net/digi?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
}

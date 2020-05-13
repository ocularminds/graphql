import { gql } from 'apollo-server-express'
import * as db from '../db'

export const typeDefs = gql`
    extend type Query {
        statuses: [Status]
        status(id: ID!): Status
    }
    type Status {
        id: ID!
        name: String
        slug: String
    }
`
export const resolvers = {
    Query: {
        statuses: async () => db.status.findAll(),
        status: async (obj, args, context, info) =>
            db.status.findByPk(args.id),
    },
}

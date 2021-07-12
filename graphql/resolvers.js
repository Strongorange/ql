import {getById, people} from "./db"

const resolvers = {
    Query: {
        people: () => people,
        person: (_, {id}) => {
            return getById(id)
        }
    }
}

export default resolvers;
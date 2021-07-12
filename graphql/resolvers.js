const chanhwi = {
    name: "chanhwi",
    age: 26,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => chanhwi
    }
}

export default resolvers;
const User = `
extend type Query {
    users: [User]!
}

extend type Mutation {
    createUser(user: UserInput!): User!
}

type User {
    id: ID!
    username: String!
}

input UserInput {
    username: String!
}
`;

export default () => [User];

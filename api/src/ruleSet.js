const RuleSet = `
extend type Query {
    ruleSets: [RuleSet]!
}

extend type Mutation {
    createRuleSet(ruleSet: RuleSetInput!): RuleSet!
}

type RuleSet {
    id:         ID!
    name:       String!
}

input RuleSetInput {
    name:       String!
}
`;

export default () => [RuleSet];

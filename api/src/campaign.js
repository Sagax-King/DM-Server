import RuleSet from './ruleSet';

const Campaign = `
extend type Query {
    campaigns(userId: ID!): [Campaign]!
}

extend type Mutation {
    createCampaign(campaign: CampaignInput!): Campaign!
}

type Campaign {
    id:         ID!
    name:       String!
    ruleSet:    String!
}

input CampaignInput {
    userId:     ID!
    name:       String!
    ruleSet:    ID!
}
`;

export default () => [Campaign];

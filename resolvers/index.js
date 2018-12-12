import {connect, disconnect} from '../model';
import {
    User,
    Query as UserQuery,
    Mutation as UserMutation,
} from './src/user';
import {
    RuleSet,
    Query as RuleSetQuery,
    Mutation as RuleSetMutation,
} from './src/ruleSet';
import {
    Campaign,
    Query as CampaignQuery,
    Mutation as CampaignMutation,
} from './src/campaign';

const resolvers = {
    Query: {
        ...UserQuery,
        ...RuleSetQuery,
        ...CampaignQuery,
    },
    Mutation: {
        ...UserMutation,
        ...RuleSetMutation,
        ...CampaignMutation,
    },
    User,
    RuleSet,
    Campaign,
};

export {resolvers, connect, disconnect};

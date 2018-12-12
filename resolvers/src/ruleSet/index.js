import { RuleSetModel } from '../../../model';

const Query = {
    ruleSets: (_, { }) => {
        return RuleSetModel.find({});
    }
};

const Mutation = {
    createRuleSet: (_, { ruleSet }) => {
        return RuleSetModel.create({
            ...ruleSet
        })
    }
};

const RuleSet = {
    id: (ruleSet, _) => ruleSet._id,
};

export { RuleSet, Mutation, Query };
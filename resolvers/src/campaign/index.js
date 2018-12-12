import { CampaignModel, RuleSetModel } from '../../../model';

const Query = {
    campaigns: (_, { userId }) => {
        return CampaignModel.find({ userId: userId });
    }
};

const Mutation = {
    createCampaign: (_, { campaign }) => {
        return CampaignModel.create({
            ...campaign
        })
    }
};

const Campaign = {
    id: (campaign, _) => campaign._id,
    ruleSet: (campaign, _) => RuleSetModel.findById(campaign.ruleSet).then(val => val.name)
};

export { Campaign, Mutation, Query };
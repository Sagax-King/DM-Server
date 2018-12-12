import mongoose, { Schema } from 'mongoose';

const CampaignSchema = new Schema({
    name: String,
    userId: Schema.Types.ObjectId,
    ruleSet: Schema.Types.ObjectId,
});

const CampaignModel = mongoose.model('Campaign', CampaignSchema);

export { CampaignModel };

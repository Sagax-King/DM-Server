import mongoose, { Schema } from 'mongoose';

const RuleSetSchema = new Schema({
    name: String
});

const RuleSetModel = mongoose.model('RuleSet', RuleSetSchema);

export { RuleSetModel };

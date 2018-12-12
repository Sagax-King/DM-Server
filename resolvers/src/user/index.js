import { UserModel } from '../../../model';

const Query = {
    users: (_, { }) => {
        return UserModel.find({});
    }
};

const Mutation = {
    createUser: (_, { user }) => {
        return UserModel.create({
            ...user
        })
    }
};

const User = {
    id: (user, _) => user._id,
};

export { User, Mutation, Query };
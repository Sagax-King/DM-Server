import mongoose from 'mongoose';

const connectDatabase = url =>
  new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.connection
      .on('error', error => reject(error))
      .on('close', () => console.log('Database connection closed.'))
      .once('open', () => {
        console.log('DB Connection opened');
        return resolve(mongoose.connections[0]);
      });

    mongoose.connect(url);
  });

const connect = async url => {
  mongoose.set('debug', true);
  try {
    const info = await connectDatabase(url);
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
  } catch (error) {
    console.error('Unable to connect to db');
    process.exist(1);
  }
};
const disconnect = async () => {
  await mongoose.disconnect();
};

export { connect, disconnect };

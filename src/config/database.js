import mongoose from 'mongoose';

export async function connectDB(uri) {
  // options minimales; Mongoose 6+ n’exige plus useNewUrlParser/useUnifiedTopology
  await mongoose.connect(uri);
}

export async function disconnectDB() {
  await mongoose.connection.close();
}

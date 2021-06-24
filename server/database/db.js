import mongoose from "mongoose";

const Connection = async () => {
  const URL = process.env.MONGOURL;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully...");
  } catch (error) {
    console.log(error);
  }
};

export default Connection;

import {config} from 'dotenv';

// pathToengfile = "../.env"
config(/*{path:"../.env"}*/);

export const WEB = {
    HOST: process.env.HOST || "localhost",
    PORT: parseInt(process.env.PORT || "5001")
}
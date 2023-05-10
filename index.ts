import { config } from "dotenv";
import { populateDB } from "./app/utilities/populate-db";
import { startServer } from "./app/app";

config();
startServer();
// populateDB();
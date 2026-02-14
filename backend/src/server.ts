import app from './app.js';
import { ENV } from "./configs"

const startServer = async () => {
    try {
        app.listen(ENV.PORT, ENV.HOST, (err) => {
            if (err)
                console.log("failed to start server");
            console.log(`Server started at http://${ENV.HOST}:${ENV.PORT}`)
        });
    } catch (error) {
    }
};

startServer();
export default startServer;
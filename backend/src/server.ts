import app from './app.js';
import {WEB_ENV} from './configs/env.config.js';

const startServer = async ()=>{
    try {
        app.listen(WEB_ENV.PORT, WEB_ENV.HOST, (err)=>{
            if(err)
                console.log("failed to start server");
            console.log(`Server started at http://${WEB_ENV.HOST}:${WEB_ENV.PORT}`)
        });
        
    } catch (error) {
    }
};
startServer();


export default startServer;
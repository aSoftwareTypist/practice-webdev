import app from './app.js';
import {WEB} from './configs/env.config.js';

const startServer = async ()=>{
    try {
        app.listen(WEB.PORT, WEB.HOST, (err)=>{
            if(err)
                console.log("failed to start server");
            console.log(`Server started at http://${WEB.HOST}:${WEB.PORT}`)
        });
        
    } catch (error) {
    }
};
startServer();


export default startServer;
import express from 'express';
import dotenv from 'dotenv';

const main = () => {
    // Environment variables
    dotenv.config();

    const app = express();
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}!`);
    })
}

main();
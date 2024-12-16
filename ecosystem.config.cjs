module.exports = {
    apps: [
        {
            name: "diuwin",
            script: "npx",
            args: "serve -s dist -l 4009",
            interpreter: "none", // Ensures PM2 runs the npx command directly
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
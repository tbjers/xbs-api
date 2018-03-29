"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
// Handles database interaction
class DB {
    constructor(logger) {
        this.config = require('./config.json');
        this.logger = logger;
    }
    // Connects to the database
    connect() {
        const options = {
            connectTimeoutMS: this.config.db.connTimeout,
            keepAlive: 1,
            pass: this.config.db.password || process.env.XBROWSERSYNC_DB_PWD,
            user: this.config.db.username || process.env.XBROWSERSYNC_DB_USER
        };
        return new Promise((resolve, reject) => {
            mongoose.connect(`mongodb://${this.config.db.host}/${this.config.db.name}`, options);
            const db = mongoose.connection;
            db.on('error', (err) => {
                if (this.config.log.enabled) {
                    this.logger.error({ err }, 'Uncaught exception occurred in database.');
                }
                reject(err);
            });
            db.once('open', resolve);
        });
    }
}
exports.default = DB;
//# sourceMappingURL=db.js.map
const fs = require('fs');

const record = (req, res, next) => {
    const writeRecord = (data) => {
        fs.writeFile('records.json', JSON.stringify(data, null, 2), (err) => {
            if (err) console.log(err);
        });
    };

    res.on('finish', () => {
        const date = new Date().toString();
        const record = {
            userID: req.body.userID || req.body._id,
            email:req.body.email,
            method: req.method,
            url: req.originalUrl,
            time: date,
            query: req.query
        };
        fs.readFile('records.json', (err, fileData) => {
            if (err) console.log(err);
            const data = JSON.parse(fileData);
            data.records.push(record);
            writeRecord(data);
        });
    });

    next();
};

module.exports = {
    record
};

const fs = require('fs');


// takes in the template to write HTML file
function writeHtml(data) {
    fs.writeFile(`./dist/index.html`, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Success! Your web page has been generated.');
    })
};

module.exports = writeHtml;
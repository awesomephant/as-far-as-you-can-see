const parse = require("csv-parse/lib/sync");
const fs = require("fs");

function readCSV() {
    const input = fs.readFileSync("./_data/values.csv");
    const records = parse(input, {
        columns: true,
        skip_empty_lines: true,
    });
    console.log(`${records.length} records found.`);
    return records
}

function calculateRatios(values) {
    let ratios = []
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if (i !== j) { // Avoid lots of 1s
                ratios.push({
                    title: `${values[i].Title} / ${values[j].Title}`,
                    a: parseFloat(values[i].Value).toFixed(1),
                    b: parseFloat(values[j].Value).toFixed(1),
                    value: values[i].Value / values[j].Value
                })
            }
        }
    }

    return ratios
}

module.exports = function () {
    const values = readCSV()
    const data = calculateRatios(values);
    return data;
};
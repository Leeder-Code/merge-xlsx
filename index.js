const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

const inputFolder = path.join(__dirname, "xlsx");
const outputFile = path.join(__dirname, "merged.xlsx");

function mergeXLSXFiles(folder, output) {
    const files = fs.readdirSync(folder).filter(file => file.endsWith(".xlsx"));
    const outputWorkbook = XLSX.utils.book_new();
    let allData = [];

    files.forEach(file => {
        const filePath = path.join(folder, file);
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
        
        if (sheetData.length > 0) {
            allData.push(...sheetData);
        }
    });

    const newSheet = XLSX.utils.aoa_to_sheet(allData);
    XLSX.utils.book_append_sheet(outputWorkbook, newSheet, "MergedSheet");
    XLSX.writeFile(outputWorkbook, output);

    console.log(`Merged ${files.length} files into ${output}`);
}

mergeXLSXFiles(inputFolder, outputFile);

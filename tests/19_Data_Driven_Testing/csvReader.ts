import * as fs from 'fs';
import * as path from "path";

export interface TestDataRow {
    [key: string]: string;
}

export function readCSV(filePath: string): TestDataRow[] {

    let fullPath = path.resolve(filePath);
    let content = fs.readFileSync(fullPath, 'utf-8');
    let lines = content.trim().split('\n');

    // First Line is headers
    let headers = lines[0].split(",");

    // Remaining lines are data rows
    return lines.slice(1).map(line => {
        let values = line.split(",");
        let row: TestDataRow = {};
        headers.forEach((header, index) => {
            row[header.trim()] = (values[index] || '').trim();
        });
        return row;
    });
}

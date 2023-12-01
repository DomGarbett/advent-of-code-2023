const path = require('path');
const fs = require('fs');



export const readFileIntoArray = (filePath: string) =>{
    const value = fs
    .readFileSync(path.join(filePath), 'utf8')
    .toString()
    .trim()
    .split('\n');

    return value;
}
import fs from 'fs';
import cheerio from 'cheerio';

try {
    const data = fs.readFileSync('bmw.html', 'utf8');
    const $ = cheerio.load(data);
    const carTable = $('.expandabletable')
    for(let i = 0; i < carTable.length; i++) {
        //const name = carTable.find('tr').eq(i).find($('td > .elementName')).text().trim() === "" ? carTable.find('tr').eq(i).find($('td > .elementNameLeafNode')).text().trim() : carTable.find('tr').eq(i).find($('td > .elementName')).text().trim();
        const name = carTable[i].attribs["data-xpath"]
        const occurs = carTable.find('tr').eq(i).find($('td > .occurs')).text().trim() === "" ? carTable.find('tr').eq(i).find($('td > .occursLeafNode')).text().trim() : carTable.find('tr').eq(i).find($('td > .occurs')).text().trim();
        console.log(name, occurs);
    }
}catch(e){
    console.log(e);
}
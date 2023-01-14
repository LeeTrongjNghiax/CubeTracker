let dates = [];
let sql = `INSERT INTO image VALUES \n`;
let sql2 = `INSERT INTO algorithm (id, userId, imageId, content, note) VALUES \n`;
// let orders = ['1', '4', '2', '5', '3', '6', '0'];
let algAndImg = [
  {
    content: '455000000501005550303303330111111110200222220666666000',
    algorithms: [
      "R' F R F'", 
      "U2 R U2 R'", 
      "M' U R U' r'", 
      "y2 U L U' L'", 
    ],
    note: "F2L 01"
  },
  {
    content: '403300000555005550301003330111111110200222220666666000',
    algorithms: [
      "y U' L' U L", 
      "F R' F' R", 
      "y' U' R' U R", 
      "r U R' U' M", 
    ],
    note: "F2L 02"
  },
  {
    content: '405003000501005550303003330111111110200222220666666050',
    algorithms: [
      "y L' U' L", 
      "F' U' F", 
      "y' R' U' R", 
      "U M R U' R' U M'", 
    ],
    note: "F2L 03"
  },
  {
    content: '403000050505005550301003330111111110230222220666666000',
    algorithms: [
      "R U R'", 
      "y2 L U L'", 
      "y F U F'", 
    ],
    note: "F2L 04"
  },
  {
    content: '405000050501005550303003330111111110230222220666666000',
    algorithms: [
      "U' R U R' U2 R U' R'", 
      "U' R U R' U' R U2 R'", 
      "F2 L' U' L U F2", 
      "U' R U R' U R' F R F'", 
    ],
    note: "F2L 05"
  },
  {
    content: '403003000505005550301003330111111110200222220666666050',
    algorithms: [
      "d R' U' R U2 R' U R", 
      "y U L' U' L U2 L' U L", 
      "U' r U' R' U R U r'", 
      "U F' U' F U2 F' U F", 
    ],
    note: "F2L 06"
  },
  {
    content: '405005000501005550303003330111111110200222220666666030',
    algorithms: [
      "U' R U2 R' U2 R U' R'", 
      "U' R U2 R' U' R U2 R'", 
      "U' R U2 R' U R' F R F'", 
      "M' U' M U2 r U' r'",   
    ],
    note: "F2L 07"
  },
  {
    content: '403000030505005550301003330111111110250222220666666000',
    algorithms: [
      "d R' U2 R U2 R' U R", 
      "r' U2 R2 U R2’ U r", 
      "y U L' U2 L U2 L' U L", 
      "U F' U2 F U2 F' U F", 
    ],
    note: "F2L 08"
  },
  {
    content: '405000030501005550303003330111111110250222220666666000',
    algorithms: [
      "U' R U' R' U F' U' F", 
      "U' R U' R' d R' U' R", 
      "F R U R' U' F' R U' R'", 
      "y' U R' U' R U' R' U' R", 
    ],
    note: "F2L 09"
  },
  {
    content: '403005000505005550301003330111111110200222220666666030',
    algorithms: [
      "U' R U R' U R U R'", 
      "U y' R' U R U' y R U R'", 
      "U2 R U' R' U' R U R'", 
      "R' U R2 U R'", 
    ],
    note: "F2L 10"
  },
  {
    content: '435000000501005550303503330111111110200222220666666000',
    algorithms: [
      "U' R U2 R' U F' U' F", 
      "U' R U2 R' d R' U' R", 
      "y' R U2 R2 U' R2 U' R'", 
      "y L' U L U' L' U L U2 L' U L", 
    ],
    note: "F2L 11"
  },
  {
    content: '403500000535005550301003330111111110200222220666666000',
    algorithms: [
      "R U' R' U R U' R' U2 R U' R'", 
      "R' U2 R2 U R2 U R", 
      "U F' U2 F U' R U R'", 
      "U R U' R' U' R U R' U' R U R'", 
    ],
    note: "F2L 12"
  },
  {
    content: '405300000551005550303003330111111110200222220666666000',
    algorithms: [
      "y' U R' U R U' R' U' R", 
      "d R' U R U' R' U' R", 
      "y U L' U L U' L' U' L", 
      "M' U' R U R' U' R U2 r'", 
    ],
    note: "F2L 13"
  },
  {
    content: '453000000505005550301303330111111110200222220666666000',
    algorithms: [
      "U' R U' R' U R U R'", 
      "y L' U2 L U2 F U2 F' U F U' F'", 
      "R U' R' U R U2 R' U2 R U' R'", 
    ],
    note: "F2L 14"
  },
  {
    content: '405500000531005550303003330111111110200222220666666000',
    algorithms: [
      "R U R' U2 R U' R' U R U' R'", 
      "M U r U' r' U' M'", 
      "y L' U L U2 y' R U R'", 
      "F' U F U2 R U R'", 
    ],
    note: "F2L 15"
  },
  {
    content: '433000000505005550301503330111111110200222220666666000',
    algorithms: [
      "R U' R' U2 F' U' F", 
      "R U' R' U2 y L' U' L", 
      "R U' R' U d R' U' R", 
      "U F U R U' R' F' R U R'", 
    ],
    note: "F2L 16"
  },
  {
    content: '451000000503005550305303330111111110200222220666666000',
    algorithms: [
      "R U2 R' U' R U R'", 
      "y L F' L' F L' U L U' L' U L", 
      "U' R U' R' U2 R U2 R2 F R F'", 
    ],
    note: "F2L 17"
  },
  {
    content: '401300000553005550305003330111111110200222220666666000',
    algorithms: [
      "y' R' U2 R U R' U' R", 
      "y L' U2 L U L' U' L", 
      "R' F R F' R U' R' U R U' R'", 
      "R U R' U' R U R' U' F R' F' R", 
    ],
    note: "F2L 18"
  },
  {
    content: '401000050503005550305003330111111110230222220666666000',
    algorithms: [
      "U R U2 R' U R U' R'", 
      "U R U2 R2 F R F'", 
      "R U' R' U R U' R' U R U R'", 
      "U R U2 R' U R U' R", 
    ],
    note: "F2L 19"
  },
  {
    content: '401003000503005550305003330111111110200222220666666050',
    algorithms: [
      "y' U' R' U2 R U' R' U R", 
      "y U' L' U2 L U' L' U L", 
      "U' R U' R2 F R F' R U' R'", 
      "d' L' U2 L U' L' U L", 
    ],
    note: "F2L 20"
  },
  {
    content: '401005000503005550305003330111111110200222220666666030',
    algorithms: [
      "U2 R U R' U R U' R'", 
      "R U' R' U2 R U R'", 
      "y F R U2 R' F'", 
      "y' r' U r U2 r' U' r", 
    ],
    note: "F2L 21"
  },
  {
    content: '401000030503005550305003330111111110250222220666666000',
    algorithms: [
      "F' L' U2 L F", 
      "y' U2 R' U' R U' R' U R", 
      "r U' r' U2 r U r'", 
      "y U2 L' U' L U' L' U L", 
    ],
    note: "F2L 22"
  },
  {
    content: '401500000533005550305003330111111110200222220666666000',
    algorithms: [
      "R U R' U2 R U R' U' R U R'", 
      "U R U' R' U' R U' R' U R U' R'", 
      "U2 R2 U2 R' U' R U' R2", 
      "y F' U' L' U L F L' U L", 
    ],
    note: "F2L 23"
  },
  {
    content: '431000000503005550305503330111111110200222220666666000',
    algorithms: [
      "F U R U' R' F' R U' R'", 
      "y U' L' U L U L' U L U' L' U L", 
      "U' R U R2 F R F' R U' R'", 
      "y' R' U' R U2 R' U' R U R' U' R", 
    ],
    note: "F2L 24"
  },
  {
    content: '450000000500055550300303333111111111200222220666666000',
    algorithms: [
      "R' F' R U R U' R' F", 
      "U' R' F R F' R U R'", 
      "y U' L' U L y' U R U' R'", 
      "R' U' R' U' R' U R U R", 
    ],
    note: "F2L 25"
  },
  {
    content: '400300000550055550300003333111111111200222220666666000',
    algorithms: [
      "U R U' R' U' F' U F", 
      "U R U' R' F R' F' R", 
      "y r U r' U' r' F r F'", 
      "U R U' R' d' L' U L", 
    ],
    note: "F2L 26"
  },
  {
    content: '450000000500015550300303335111111113200222220666666000',
    algorithms: [
      "R U' R' U R U' R'", 
      "R U' R2 F R F'", 
      "y L' U' L U2 F U' F'", 
      "y' R' U' R U y U R U' R'", 
    ],
    note: "F2L 27"
  },
  {
    content: '400300000550035550300003331111111115200222220666666000',
    algorithms: [
      "R U R' U' F R' F' R", 
      "y L' U L U' L' U L", 
      "y' R' U R U' R' U R", 
      "R U R' U2 F' U F", 
    ],
    note: "F2L 28"
  },
  {
    content: '400300000550015550300003335111111113200222220666666000',
    algorithms: [
      "R' F R F' R' F R F'", 
      "y L' U' L U L' U' L", 
      "y' R' U' R U R' U' R", 
      "R' F R F' U R U' R'", 
    ],
    note: "F2L 29"
  },
  {
    content: '450000000500035550300303331111111115200222220666666000',
    algorithms: [
      "R U R' U' R U R'", 
      "F R' F' R F R' F' R", 
      "y U' L' U' L U2 F U2 F' U F U' F'", 
    ],
    note: "F2L 30"
  },
  {
    content: '401000000503305550355003330111111110200222220666666000',
    algorithms: [
      "U' R' F R F' R U' R'", 
      "R U' R' y L' U2 L", 
      "R U' R' U2 F R' F' R", 
      "l F' R U' R' U l'", 
    ],
    note: "F2L 31"
  },
  {
    content: '401000000503505550335003330111111110200222220666666000',
    algorithms: [
      "R U R' U' R U R' U' R U R'", 
      "U R U' R' U R U' R' U R U' R'", 
      "R2 U R2 U R2 U2 R2", 
      "U R U R' U' R U2 R' U R U' R'", 
    ],
    note: "F2L 32"
  },
  {
    content: '405000000501505550333003330111111110200222220666666000',
    algorithms: [
      "U' R U' R' U2 R U' R'", 
      "U' R U' R' U R' F R F'", 
      "y R' D R U' R' D' R", 
      "R U R' U' R U' R' U R U' R'", 
    ],
    note: "F2L 33"
  },
  {
    content: '403000000505505550331003330111111110200222220666666000',
    algorithms: [
      "U R U R' U2 R U R'", 
      "U' R U2 R' U R U R'", 
      "y U L' U L U2 L' U L", 
      "y' U R' U R U2 R' U R", 
    ],
    note: "F2L 34"
  },
  {
    content: '405000000501305550353003330111111110200222220666666000',
    algorithms: [
      "U' R U R' U F' U' F", 
      "U2 R U R' F R' F' R", 
      "U' R U R' d R' U' R", 
      "U M' U R U' r' R U' R'", 
    ],
    note: "F2L 35"
  },
  {
    content: '403000000505305550351003330111111110200222220666666000',
    algorithms: [
      "U2 R' F R F' U2 R U R'", 
      "U F' U' F U' R U R'", 
      "y U L' U' L y' U' R U R'", 
      "U2 F' U' F U R U' R'", 
    ],
    note: "F2L 36"
  },
  {
    content: '400000000500355550350003333111111111200222220666666000',
    algorithms: [
      "R2 U2 F R2 F' U2 R' U R'", 
      "R U' R' d R' U2 R U2 R' U R", 
      "R U2 R' U R U2 R' U F' U' F", 
      "R' F R F' R U' R' U R U' R' U2 R U' R'", 
    ],
    note: "F2L 37"
  },
  {
    content: '400000000500515550330003335111111113200222220666666000',
    algorithms: [
      "R U R' U' R U2 R' U' R U R'", 
      "R U' R' U' R U R' U2 R U' R'", 
      "R2 U2 R' U' R U' R' U2 R'", 
      "F R' F' R2 U2 R' U' R U R'", 
    ],
    note: "F2L 38"
  },
  {
    content: '400000000500535550330003331111111115200222220666666000',
    algorithms: [
      "R U R' U2 R U' R' U R U R'", 
      "R U' R' U R U2 R' U R U' R'", 
      "R U2 R U R' U R U2 R2", 
      "R U2 R' U R U' R' U R U R'", 
    ],
    note: "F2L 39"
  },
  {
    content: '400000000500315550350003335111111113200222220666666000',
    algorithms: [
      "R U' R' F R U R' U' F' R U' R'", 
      "r U' r' U2 r U r' R U R'", 
      "R U' R' U' R U' R' U F' U' F", 
      "R F U R U' R' F' U' R'", 
    ],
    note: "F2L 40"
  },
  {
    content: '400000000500335550350003331111111115200222220666666000',
    algorithms: [
      "R U R' U' R U' R' U2 y' R' U' R", 
      "R U F R U R' U' F' R'", 
      "R U' R' F' L' U2 L F", 
      "R U' M' U' r' U2 r U r'", 
    ],
    note: "F2L 41"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 2"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 3"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 4"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 5"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 6"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 7"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 8"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 9"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 0"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 1"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 2"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 3"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 4"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 5"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 6"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 7"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 8"
  },
  {
    content: '',
    algorithms: [
      
    ],
    note: "F2L 9"
  },
]

for (let i = 0; i < 41; i++) {
  let d = randomDate(new Date('2000-01-01 08:00:00'), new Date('2000-03-01 20:00:00'));
  dates.push( d.date );
}
dates = dates.sort();

for (let i = 0; i < 41; i++)
  dates[i] = new Date(dates[i]);

for (let i = 0; i < 41; i++)
  sql += `( "img${dates[i].toISOString().slice(0, 19).replace(/(T|-| |:)/g, "")}", "${ algAndImg[i].content }" ),\n`

for (let i = 0; i < algAndImg.length; i++)
  for (let j = 0; j < algAndImg[i].algorithms.length; j++) {
    let date2 = new Date( dates[i] );
    date2.setSeconds(dates[i].getSeconds() + j + 1)
    sql2 += `( "alg${date2.toISOString().slice(0, 19).replace(/(T|-| |:)/g, "")}", "u45121201012002", "img${dates[i].toISOString().slice(0, 19).replace(/(T|-| |:)/g, "")}", "${algAndImg[i].algorithms[j]}", "${algAndImg[i].note}" ),\n`
  }

console.log(sql);
console.log(sql2);
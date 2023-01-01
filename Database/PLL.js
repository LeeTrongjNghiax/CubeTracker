let dates = [];
let sql = `INSERT INTO image VALUES \n`;
let sql2 = `INSERT INTO algorithm (id, userId, imageId, content, note) VALUES \n`;
let orders = ['1', '4', '2', '5', '3', '6', '0'];
let algAndImg = [
  {
    content: '222222222363333335666466666111111111455444444555555334',
    algorithms: [
      "x' R2 D2 R' U' R D2 R' U R' x", 
      "y' x R' U R' D2 R U' R' D2 R2", 
    ],
    note: "PLL Aa"
  },
  {
    content: '222222222336333333664646666111111111443444445555555655',
    algorithms: [
      "x R2 D2 R U R' D2 R U' R x'", 
      "y x' R U' R D2 R' U R D2 R2 x", 
      "y' x L U' L D2 L' U L D2 L2", 
    ],
    note: "PLL Ab"
  },
  {
    content: '222222222336333335664636666111111111445444446555555354',
    algorithms: [
      "x' R U' R' D R U R' D' R U R' D R U' R' D' x", 
      "y R2 U R' U' y R U R' U' R U R' U' R U R' y' R U' R2", 
      "y z U2 R2 F R U R' U' R U R' U' R U R' U' F' R2 U2 z'", 
      "y R2 U R2 U D R2 U' R2 U R2 U' D' R2 U R2 U2 R2", 
    ],
    note: "PLL E"
  },
  {
    content: '222222222346333333664636666111111111434444446555555555',
    algorithms: [
      "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R", 
      "y R' U2 R' d' R' F' R2 U' R' U R' F R U' F", 
      "y' R' U R U' R2 F' U' F U R F R' F' R2", 
    ],
    note: "PLL F"
  },
  {
    content: '222222222366333333664536666111111111434444446555555545',
    algorithms: [
      "R2 U R' U R' U' R U' R2 D U' R' U R D'", 
      "R2 u R' U R' U' R u' R2 y' R' U R", 
      "D' R2 U R' U R' U' R U' R2 U' D R' U R", 
      "R2 u R' U R' U' R u' R2 F' U F", 
    ],
    note: "PLL Ga"
  },
  {
    content: '222222222346333333664336666111111111454444446555555565',
    algorithms: [
      "R' U' R U D' R2 U R' U R U' R U' R2 D", 
      "R' U' R y R2 u R' U R U' R u' R2", 
      "y F' U' F R2 u R' U R U' R u' R2", 
      "R' d' F R2 u R' U R U' R u' R2", 
    ],
    note: "PLL Gb"
  },
  {
    content: '222222222346333333664536666111111111464444446555555535',
    algorithms: [
      "R2 U' R U' R U R' U R2 D' U R U' R' D", 
      "R2 u' R U' R U R' u R2 y R U' R'", 
      "y2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2", 
      "R2 u' R U' R U R' u R2 f R' f'", 
    ],
    note: "PLL Gc"
  },
  {
    content: '222222222356333333664436666111111111434444446555555565',
    algorithms: [
      "R U R' U' D R2 U' R U' R' U R' U R2 D'", 
      "R U R' y' R2 u' R U' R' U R' u R2", 
      "D' R U R' U' D R2 U' R U' R' U R' U R2", 
      "f R f' R2 u' R U' R' U R' u R2", 
    ],
    note: "PLL Gd"
  },
  {
    content: '222222222343333333666566666111111111434444444555555565',
    algorithms: [
      "M2 U M2 U2 M2 U M2", 
      "M2 U' M2 U2 M2 U' M2", 
      "R2 U2 R U2 R2 U2 R2 U2 R U2 R2", 
    ],
    note: "PLL H"
  },
  {
    content: '222222222333333333666646666111111111456444445555555445',
    algorithms: [
      "R' U L' U2 R U' R' U2 R L U'", 
      "L' U' L F L' U' L U L F' L2 U L", 
      "y F U' R U' R' U' R U R' F' R U R' U' R' F R U F'", 
    ],
    note: "PLL Ja"
  },
  {
    content: '222222222366333333664336666111111111444444446555555555',
    algorithms: [
      "R U R' F' R U R' U' R' F R2 U' R' U'", 
      "R U2 R' U' R U2 L' U R' U' L", 
      "R U2 R' U' R U2 L' U R' U' r x", 
      "L' U R U' L U2 R' U R U2 R'", 
    ],
    note: "PLL Jb"
  },
  {
    content: '222222222333333334666556666111111111444444443555555566',
    algorithms: [
      "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'", 
      "L U' R U2 L' U R' L U' R U2 L' U R'", 
      "z U R' D R2 U' R D' U R' D R2 U' R D' z'", 
      "r' D r U2 r' D r U2 r' D r U2 r' D r U2 r' D r", 
    ],
    note: "PLL Na"
  },
  {
    content: '222222222334333333665566666111111111443444444555555665',
    algorithms: [
      "R' U R U' R' F' U' F R U R' F R' F' R U' R", 
      "R' U L' U2 R U' L R' U L' U2 R U' L", 
      "z D' R U' R2 D R' U D' R U' R2 D R' U z'", 
      "r D r' U2 r D r' U2 r D r' U2 r D r' U2 r D r'", 
    ],
    note: "PLL Nb"
  },
  {
    content: '222222222336333333664636666111111111454444446555555545',
    algorithms: [
      "R U R' F' R U2 R' U2 R' F R U R U2 R' U'", 
      "R U' R' U' R U R D R' U' R D' R' U2 R'", 
      "y R U2 R' U2 R B' R' U' R U R B R2", 
    ],
    note: "PLL Ra"
  },
  {
    content: '222222222356333333664636666111111111444444446555555535',
    algorithms: [
      "R2 F R U R U' R' F' R U2 R' U2 R U", 
      "y' R' U2 R U2 R' F R U R' U' R' F' R2", 
      "y' R' U2 R' D' R U' R' D R U R U' R' U' R", 
    ],
    note: "PLL Rb"
  },
  {
    content: '222222222336333333664536666111111111444444446555555565',
    algorithms: [
      "R U R' U' R' F R2 U' R' U' R U R' F'", 
      "R U R' U' R' F R2 U' R' U F' L' U L", 
      "R2 U R2 U' R2 U' D R2 U' R2 U R2 D'", 
      "y2 L' U' L U L F' L2 U L U L' U' L F", 
    ],
    note: "PLL T"
  },
  {
    content: '222222222363333333666566666111111111444444444555555535',
    algorithms: [
      "M2 U M U2 M' U M2", 
      "y2 M2 U M' U2 M U M2", 
      "R U' R U R U R U' R' U' R2", 
      "y2 R2 U' R' U' R U R U R U' R", 
    ],
    note: "PLL Ua"
  },
  {
    content: '222222222353333333666366666111111111444444444555555565',
    algorithms: [
      "M2 U' M U2 M' U' M2", 
      "y2 M2 U' M' U2 M U' M2", 
      "y2 R' U R' U' R' U' R' U R U R2", 
      "R2 U R U R' U' R' U' R' U R'", 
    ],
    note: "PLL Ub"
  },
  {
    content: '222222222334333333665466666111111111463444444555555655',
    algorithms: [
      "R' U R' U' y R' F' R2 U' R' U R' F R F", 
      "R' U R' d' R' F' R2 U' R' U R' F R F", 
      "R' U R' U' R D' R' D R' U D' R2 U' R2 D R2", 
      "z D' R2 D R2 U R' D' R U' R U R' D R U'", 
    ],
    note: "PLL V"
  },
  {
    content: '222222222334333333665666666111111111453444444555555645',
    algorithms: [
      "F R U' R' U' R U R' F' R U R' U' R' F R F'", 
      "F R' F R2 U' R' U' R U R' F' R U R' U' F'", 
      "R2 U' R2 U' R2 U R' F' R U R2 U' R' F R", 
      "R2 D' R2 U R2 U' R2 D R2 U' R2 U R2 U R2", 
    ],
    note: "PLL Y"
  },
  {
    content: '222222222363333333666366666111111111454444444555555545',
    algorithms: [
      "M2 U M2 U M' U2 M2 U2 M' U2", 
      "y M2 U' M2 U' M' U2 M2 U2 M'", 
      "y M' U M2 U M2 U M' U2 M2 U'", 
    ],
    note: "PLL Z"
  },
]

for (let i = 0; i < 57; i++) {
  let d = randomDate(new Date('2001-04-02 08:00:00'), new Date('2001-07-01 20:00:00'));
  dates.push( d.date );
}
dates = dates.sort();

for (let i = 0; i < 57; i++)
  dates[i] = new Date(dates[i]);

for (let i = 0; i < algAndImg.length; i++)
  sql += `( "img${dates[i].toISOString().slice(0, 19).replace(/(T|-| |:)/g, "")}", "${ changeImage( algAndImg[i].content, orders )}" ),\n`

for (let i = 0; i < algAndImg.length; i++)
  for (let j = 0; j < algAndImg[i].algorithms.length; j++) {
    let date2 = new Date( dates[i] );
    date2.setSeconds(dates[i].getSeconds() + j + 1)
    sql2 += `( "alg${date2.toISOString().slice(0, 19).replace(/(T|-| |:)/g, "")}", "u45121201012002", "img${dates[i].toISOString().slice(0, 19).replace(/(T|-| |:)/g, "")}", "${algAndImg[i].algorithms[j]}", "${algAndImg[i].note}" ),\n`
  }

console.log(sql);
console.log(sql2);
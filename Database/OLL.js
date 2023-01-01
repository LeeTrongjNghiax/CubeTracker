let dates = [];
    let sql = `INSERT INTO image VALUES \n`;
    let sql2 = `INSERT INTO algorithm (id, userId, imageId, content, note) VALUES \n`;
    let algAndImg = [
  {
    "content": "200000000020000000002220000111111111020000000000000222",
    "algorithms": [
      "r U R' U R' r2 U' R' U R' r2 U2 r'",
      "R U2 R2 F R F' U2 R' F R F'",
      "y R U' R2 D' r U' r' D R2 U R'",
      "R U B' R B R2 U' R' F R F'"
    ],
    "note": "OLL 01"
  },
  {
    "content": "200000000022000000000200000111111111020000002000000222",
    "algorithms": [
      "y r U r' U2 R U2 R' U2 r U' r'",
      "F R U R' U' S R U R' U' f'",
      "F R U R' U' F' f R U R' U' f'",
      "R' U2 r U' r' U2 r U r' U2 R"
    ],
    "note": "OLL 02"
  },
  {
    "content": "200020000022000000000220000111111111022000000000000020",
    "algorithms": [
      "r' R U R' F2 R U L' U L M'",
      "r' R2 U R' U r U2 r' U M'",
      "y F U R U' R' F' U F R U R' U' F'",
      "y' f R U R' U' f' U' F R U R' U' F'"
    ],
    "note": "OLL 03"
  },
  {
    "content": "202000000020000002000200000111111111020000002000000220",
    "algorithms": [
      "M U' r U2 r' U' R U' R' M'",
      "y F U R U' R' F' U' F R U R' U' F'",
      "y' f R U R' U' f' U F R U R' U' F'",
      "M U' r U2 r' U' R U' R2 r"
    ],
    "note": "OLL 04"
  },
  {
    "content": "222200000000000000000020000111111111022000000000000022",
    "algorithms": [
      "y2 R' F2 r U r' F R",
      "F R U R' U' F' U' F R U R' U' F'",
      "y2 l' U2 L U L' U l",
      "r' U2 R U R' U r"
    ],
    "note": "OLL 05"
  },
  {
    "content": "220000022020000002002000000000000000000000000000000220",
    "algorithms": [
      "r U2 R' U' R U' r'",
      "y' x' D R2 U' R' U R' D' x",
      "y2 l U2 L' U' L U' l'",
      "y2 R U R2 F R F2 U F"
    ],
    "note": "OLL 06"
  },
  {
    "content": "200022020022000000000220000000000000002000000000000000",
    "algorithms": [
      "F R' F' R U2 R U2 R'",
      "y2 l U L' U L U2 l'",
      "L' U2 L U2 L F' L' F",
      "r U R' U R U2 r'"
    ],
    "note": "OLL 07"
  },
  {
    "content": "222000020020000002000000000000000000000000002000000220",
    "algorithms": [
      "y2 r' U' R U' R' U2 r",
      "R U2 R' U2 R' F R F'",
      "l' U' L U' L' U2 l",
      "R' F' r U' r' F2 R"
    ],
    "note": "OLL 08"
  },
  {
    "content": "202002020020000002000200000000000000000000002000000200",
    "algorithms": [
      "r' R2 U2 R' U' R U' R' U' M'",
      "y2 R' U' R U' R' U R' F R F' U R",
      "y R U R' U' R' F R2 U R' U' F'",
      "y' L' U' L U' L F' L' F L' U2 L"
    ],
    "note": "OLL 09"
  },
  {
    "content": "200202002002000000000200000000000000022000000000000002",
    "algorithms": [
      "R U R' y' r' U r U' r' U' r",
      "R U R' y R' F R U' R' F' R",
      "y2 L' U' L U L F' L2 U' L U F",
      "R U R' U R' F R F' R U2 R'"
    ],
    "note": "OLL 10"
  },
  {
    "content": "220220000002000000000020000000000000022000000000000020",
    "algorithms": [
      "M R U R' U R U2 R' U M'",
      "y F' L' U' L U F U F R U R' U' F'",
      "y2 r U R' U R' F R F' R U2 r'",
      "r' R2 U R' U R U2 R' U M'"
    ],
    "note": "OLL 11"
  },
  {
    "content": "220200002000000002002000000000000000020000000000000220",
    "algorithms": [
      "F R U R' U' F' U F R U R' U' F'",
      "y l L2 U' L U' L' U2 L U' M'",
      "y' M' R' U' R U' R' U2 R U' M",
      "y' r R2 U' R U' R' U2 R U' R r'"
    ],
    "note": "OLL 12"
  },
  {
    "content": "220022000022000000000020000000000000022000000000000000",
    "algorithms": [
      "F U R U2 R' U' R U R' F'",
      "F U R U' R2 F' R U R U' R'",
      "r U' r' U' r U r' y' R' U R",
      "r U' r' U' r U r' F' U F"
    ],
    "note": "OLL 13"
  },
  {
    "content": "222002000020000002000000000000000000020000002000000200",
    "algorithms": [
      "R' F R U R' F' R y' R U' R'",
      "l' U l U l' U' l F U' F'",
      "R' F R U R' F' R F U' F'",
      "r' U r U r' U' r y R U' R'"
    ],
    "note": "OLL 14"
  },
  {
    "content": "222002000020000000000020000000000000022000000000000002",
    "algorithms": [
      "r' U' r R' U' R U r' U r",
      "y2 l' U' l L' U' L U l' U l",
      "y2 R' F' R L' U' L U R' F R",
      "r' U' M' U' R U r' U r"
    ],
    "note": "OLL 15"
  },
  {
    "content": "220002002020000002002000000000000000020000000000000200",
    "algorithms": [
      "r U r' R U R' U' r U' r'",
      "r U M U R' U' r U' r'",
      "y2 l U l' L U L' U' l U' l'",
      "y2 R' F R U R' U' F' R U' R' U2 R"
    ],
    "note": "OLL 16"
  },
  {
    "content": "202000200020000000000200000000000000020000002000000022",
    "algorithms": [
      "f R U R' U' f' U' R U R' U' R' F R F'",
      "R' F R U' M' U2 r' U' F' U R",
      "y2 F R' F' R2 r' U R U' R' U' M'",
      "R U R' U R' F R F' U2 R' F R F'"
    ],
    "note": "OLL 17"
  },
  {
    "content": "200000202022000002000200000000000000020000000000000020",
    "algorithms": [
      "y2 F R U R' U y' R' U2 R' F R F'",
      "y2 F R U R' d R' U2 R' F R F'",
      "r U R' U R U2 r2 U' R U' R' U2 r",
      "y R U2 R2 F R F' U2 M' U R U' r'"
    ],
    "note": "OLL 18"
  },
  {
    "content": "200000202020000000002200000000000000020000000000000022",
    "algorithms": [
      "M U R U R' U' M' R' F R F'",
      "r' U2 R U R' U r2 U2 R' U' R U' r'",
      "r' R U R U R' U' r R2 F R F'",
      "R' U2 F R U R' U' F2 U2 F R"
    ],
    "note": "OLL 19"
  },
  {
    "content": "202020202020000000000200000000000000020000000000000020",
    "algorithms": [
      "M' U M' U M' U M' U' M' U M' U M' U M'",
      "r' R U R U R' U' r2 R2 U R U' r'",
      "M U R U R' U' M2 U R U' r'",
      "r U R' U' M2 U R U' R' U' M'"
    ],
    "note": "OLL 20"
  },
  {
    "content": "220202020000000000002020000000000000000000000000000202",
    "algorithms": [
      "y R U2 R' U' R U R' U' R U' R'",
      "R U R' U R U' R' U R U2 R'",
      "y F R U R' U' R U R' U' R U R' U' F'",
      "R' U' R U' R' U R U' R' U2 R"
    ],
    "note": "OLL 21"
  },
  {
    "content": "220202020002000000000000000000000000000000002000000202",
    "algorithms": [
      "f R U R' U' f' F R U R' U' F'",
      "R U2 R2 U' R2 U' R2 U2 R",
      "R' U2 R2 U R2 U R2 U2 R'",
      "f R U R' U' S' R U R' U' F'"
    ],
    "note": "OLL 22"
  },
  {
    "content": "220202222002000002000000000000000000000000000000000000",
    "algorithms": [
      "R U R' U R U2 R2 U' R U' R' U2 R",
      "y2 R2 D' R U2 R' D R U2 R",
      "y R U R' U' R U' R' U2 R U' R' U2 R U R'",
      "R2 D R' U2 R D' R' U2 R'"
    ],
    "note": "OLL 23"
  },
  {
    "content": "222202022000000002000000000000000000002000000000000000",
    "algorithms": [
      "r U R' U' r' F R F'",
      "y2 l' U' L U R U' r' F",
      "L F R' F' L' F R F'",
      "y' x' R U R' D R U' R' D' x"
    ],
    "note": "OLL 24"
  },
  {
    "content": "222202220000000002000020000000000000000000000000000000",
    "algorithms": [
      "F R' F' r U R U' r'",
      "y F' r U R' U' r' F R",
      "R' F R B' R' F' R B",
      "y' x' R U' R' D R U R' D' x"
    ],
    "note": "OLL 25"
  },
  {
    "content": "220202220000000002002000000000000000000000002000000000",
    "algorithms": [
      "y2 L' U' L U' L' U2 L",
      "y R U2 R' U' R U' R'",
      "y2 L' U R U' L U R'",
      "R' U' R U' R' U2 R"
    ],
    "note": "OLL 26"
  },
  {
    "content": "220222020002000000000020000000000000002000000000000000",
    "algorithms": [
      "R U R' U R U2 R'",
      "y L' U2 L U L' U L",
      "R U' L' U R' U' L",
      "y' R' U2 R U R' U R"
    ],
    "note": "OLL 27"
  },
  {
    "content": "202022222020000000000200000000000000000000000000000000",
    "algorithms": [
      "r U R' U' M U R U' R'",
      "r U R' U' r' R U R U' R'",
      "y2 M' U M U2 M' U M",
      "y' M' U' M U2 M' U' M"
    ],
    "note": "OLL 28"
  },
  {
    "content": "200202202000000000002200000000000000020000000000000002",
    "algorithms": [
      "y2 R' F R F' R U2 R' U' F' U' F",
      "y R U R' U' R U' R' F' U' F R U R'",
      "r2 D' r U r' D r2 U' r' U' r",
      "M U R U R' U' R' F R F' M'"
    ],
    "note": "OLL 29"
  },
  {
    "content": "202022020020000000000220000000000000000000000000000200",
    "algorithms": [
      "y2 F R' F R2 U' R' U' R U R' F2",
      "y' r' D' r U' r' D r2 U' r' U r U r'",
      "M U' L' U' L U L F' L' F M'",
      "y2 F U R U2 R' U' R U2 R' U' F'"
    ],
    "note": "OLL 30"
  },
  {
    "content": "222000022020000002000000000000000000002000000000000020",
    "algorithms": [
      "y2 S' L' U' L U L F' L' f",
      "R' U' F U R U' R' F' R",
      "y S R U R' U' f' U' F",
      "y' F R' F' R U R U R' U' R U' R'"
    ],
    "note": "OLL 31"
  },
  {
    "content": "222200002000000002000000000000000000022000000000000020",
    "algorithms": [
      "S R U R' U' R' F R f'",
      "R U B' U' R' U R B R'",
      "y2 L U F' U' L' U L F L'",
      "y2 F U R U' F' r U R' U' r'"
    ],
    "note": "OLL 32"
  },
  {
    "content": "222002002020000002000000000000000000022000000000000000",
    "algorithms": [
      "F R U' R' U R U R' F'",
      "y' r' U' r' D' r U r' D r2",
      "R U R' U' R' F R F'",
      "y2 L' U' L U L F' L' F"
    ],
    "note": "OLL 33"
  },
  {
    "content": "222022000020000000000020000000000000020000000000000200",
    "algorithms": [
      "y2 R U R2 U' R' F R U R U' F'",
      "y2 R U R' U' x D' R' U R U' D x'",
      "F R U R' U' R' F' r U R U' r'",
      "y2 R U R' U' B' R' F R F' B"
    ],
    "note": "OLL 34"
  },
  {
    "content": "222200200000000002000020000000000000020000000000000020",
    "algorithms": [
      "f R U R' U' f' R U R' U R U2 R'",
      "R U2 R2 F R F' R U2 R'",
      "y' R' U2 R l U' R' U l' U2 R",
      "y' R U2 R' U' R U' R' U2 F R U R' U' F'"
    ],
    "note": "OLL 35"
  },
  {
    "content": "222000220020000000000000000000000000000000002000000022",
    "algorithms": [
      "R U R' U' F' U2 F U R U R'",
      "y2 L' U' L U' L' U L U L F' L' F",
      "y2 R U R' F' R U R' U' R' F R U' R' F R F'",
      "R' U' R U' R' U R U l U' R' U x"
    ],
    "note": "OLL 36"
  },
  {
    "content": "202002220020000002000220000000000000000000000000000000",
    "algorithms": [
      "y2 r2 D' r U' r' D r U r",
      "F R U' R' U' R U R' F'",
      "F R' F' R U R U' R'",
      "R' F R F' U' F' U F"
    ],
    "note": "OLL 37"
  },
  {
    "content": "200022022020000000002200000000000000002000000000000000",
    "algorithms": [
      "L' U' L F L' U' L U L F' L' U L F' L' F",
      "r U R' U R U' R' U' r' F R F'",
      "R' U2 r' D' r U2 r' D R r",
      "R U R' U R U' R' U' R' F R F'"
    ],
    "note": "OLL 38"
  },
  {
    "content": "220022002020000000002000000000000000022000000000000000",
    "algorithms": [
      "y' R B' R' U' R U B U' R'",
      "y' R U R' F' U' F U R U2 R'",
      "y L F' L' U' L U F U' L'",
      "y F R U R' U' F' R' U' R U' R' U2 R"
    ],
    "note": "OLL 39"
  },
  {
    "content": "222002200020000000000000000000000000020000002000000002",
    "algorithms": [
      "y' f R' F' R U R U' R' S'",
      "R r D r' U r D' r' U' R'",
      "y R' F R U R' U' F' U R",
      "y' F R U R' U' F' R U R' U R U2 R'"
    ],
    "note": "OLL 40"
  },
  {
    "content": "202022020020000000000200000000000000002000002000000000",
    "algorithms": [
      "y' L F' L' F L F' L' F L' U' L U L' U' L",
      "y2 R U R' U R U2 R' F R U R' U' F'",
      "R U' R' U2 R U y R U' R' U' F'",
      "f R U R' U' f' U' R U R' U R U2 R'"
    ],
    "note": "OLL 41"
  },
  {
    "content": "200202202002000002000200000000000000020000000000000000",
    "algorithms": [
      "y R' F R F' R' F R F' R U R' U' R U R'",
      "L' U L U2 L' U' y' L' U L U F",
      "M U F R U R' U' F' M'",
      "R' U' R U' R' U2 R F R U R' U' F'"
    ],
    "note": "OLL 42"
  },
  {
    "content": "200002222022000002000200000000000000000000000000000000",
    "algorithms": [
      "y R' U' F' U F R",
      "f' L' U' L U f",
      "y2 F' U' L' U L F",
      "B' U' R' U R B"
    ],
    "note": "OLL 43"
  },
  {
    "content": "200022220020000000002220000000000000000000000000000000",
    "algorithms": [
      "y' F R U' R' F' L' U L",
      "y2 F U R U' R' F'",
      "f R U R' U' f'",
      "y2 r U x' R U' R' U x U' r'"
    ],
    "note": "OLL 44"
  },
  {
    "content": "222002002020000000000000000000000000020000000000000202",
    "algorithms": [
      "y2 f U R U' R' f'",
      "y R' F' U' F U R",
      "F R U R' U' F'",
      "y2 F' L' U' L U F"
    ],
    "note": "OLL 45"
  },
  {
    "content": "200220220000000000002220000000000000000000000000000020",
    "algorithms": [
      "R' U' R' F R F' U R",
      "y F R U R' y' R' U R U2 R'",
      "y2 r' F' L' U L U' F r",
      "y F R U R' F' d R U2 R'"
    ],
    "note": "OLL 46"
  },
  {
    "content": "220000020020000002002020000000000000002000000000000020",
    "algorithms": [
      "R' U' l' U R U' R' U R U' x' U R",
      "y' F R' F' R U2 R U' R' U R U2 R'",
      "F' L' U' L U L' U' L U F",
      "R' U' R' F R F' R' F R F' U R"
    ],
    "note": "OLL 47"
  },
  {
    "content": "200002020022000000000200000000000000000000002000000202",
    "algorithms": [
      "F R U R' U' R U R' U' F'",
      "y2 f U R U' R' U R U' R' f'",
      "R U2 R' U' R U R' U2 R' F R F'"
    ],
    "note": "OLL 48"
  },
  {
    "content": "200202000000000002002220000000000000022000000000000000",
    "algorithms": [
      "l U' l2 U l2 U l2 U' l",
      "y2 r U' r2 U r2 U r2 U' r",
      "y2 R' F R' F' R2 U2 B' R B R'",
      "R B' R2 F R2 B R2 F' R"
    ],
    "note": "OLL 49"
  },
  {
    "content": "220200000002000000000000000000000000020000002000000222",
    "algorithms": [
      "r' U r2 U' r2 U' r2 U r'",
      "y' R U2 R' U' R U' R' F R U R' U' F'",
      "y2 R' F R2 B' R2 F' R2 B R'",
      "y2 l' U l2 U' l2 U' l2 U l'"
    ],
    "note": "OLL 50"
  },
  {
    "content": "220002000020000002002020000000000000022000000000000000",
    "algorithms": [
      "y2 F U R U' R' U R U' R' F'",
      "y' R' U' R' F R F' R U' R' U2 R",
      "f R U R' U' R U R' U' f'",
      "y2 f' L' U' L U L' U' L U f"
    ],
    "note": "OLL 51"
  },
  {
    "content": "200200020000000002002220000000000000002000000000000020",
    "algorithms": [
      "R' U' R U' R' U F' U F R",
      "y2 R' F' U' F U' R U R' U R",
      "R U R' U R d' R U' R' F'",
      "R U R' U R U' y R U' R' F'"
    ],
    "note": "OLL 52"
  },
  {
    "content": "220000020022000002000000000000000000002000002000000020",
    "algorithms": [
      "r' U' R U' R' U R U' R' U2 r",
      "y2 F R U R' U' F' R U R' U' R' F R F'",
      "y2 l' U' L U' L' U L U' L' U2 l",
      "y r' U2 R U R' U' R U R' U r"
    ],
    "note": "OLL 53"
  },
  {
    "content": "220000020020000000002020000000000000000000000000000222",
    "algorithms": [
      "y' r U2 R' U' R U R' U' R U' r'",
      "r U R' U R U' R' U R U2 r'",
      "y' r U r' R U R' U' R U R' U' r U' r'",
      "F' L' U' L U L' U L U' L' U' L F"
    ],
    "note": "OLL 54"
  },
  {
    "content": "200200020000000000002220000000000000000000000000000222",
    "algorithms": [
      "y R' F R U R U' R2 F' R2 U' R' U R U R'",
      "r U2 R2 F R F' U2 r' F R F'",
      "y r U2 R' U' R2 r' U R' U' r U' r'",
      "R U2 R2 U' R U' R' U2 F R F'"
    ],
    "note": "OLL 55"
  },
  {
    "content": "220002000020000000002020000000000000020000000000000202",
    "algorithms": [
      "F R U R' U' R F' r U R' U' r'",
      "y f R U R' U' f' F R U R' U' R U R' U' F'",
      "r' U' r U' R' U R U' R' U R r' U r",
      "r U r' U R U' R' U R U' R' r U' r'"
    ],
    "note": "OLL 56"
  },
  {
    "content": "222022202020000000000000000000000000020000000000000000",
    "algorithms": [
      "R U R' U' M' U R U' r'",
      "M' U M' U M' U M' U2 M' U M' U M' U M'",
      "M' U M' U M' U2 M U M U M",
      "R U R' U' r R' U R U' r'"
    ],
    "note": "OLL 57"
  }
];

    for (let i = 0; i < 57; i++) {
      let d = randomDate(new Date('2001-01-20 8:00:00'), new Date('2002-12-30 18:00:00'));
      dates.push( d.date );
    }
    dates = dates.sort();

    for (let i = 0; i < 57; i++)
      dates[i] = new Date(dates[i]);

    for (let i = 0; i < algAndImg.length; i++)
      sql += `( "img${dates[i].toISOString().slice(0, 19).replace(/(T|-| |:)/g, "")}", "${algAndImg[i].content}" ),\n`

    for (let i = 0; i < algAndImg.length; i++)
      for (let j = 0; j < algAndImg[i].algorithms.length; j++) {
        let date2 = new Date( dates[i] );
        date2.setSeconds(dates[i].getSeconds() + j + 1)
        sql2 += `( "alg${date2.toISOString().slice(0, 19).replace(/(T|-| |:)/g, "")}", "u45121201012002", "img${dates[i].toISOString().slice(0, 19).replace(/(T|-| |:)/g, "")}", "${algAndImg[i].algorithms[j]}", "${algAndImg[i].note}" ),\n`
      }
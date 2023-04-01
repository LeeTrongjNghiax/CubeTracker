function createCookie(name, value, days) {
  var expires;
    
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  else {
    expires = "";
  }
    
  document.cookie = escape(name) + "=" + 
    escape(value) + expires + "; path=/";
}

numberToColor = (num) => {
  switch (parseInt(num)) {
    case 1: return 'white';
    case 2: return 'green';
    case 3: return 'red';
    case 4: return 'yellow';
    case 5: return 'blue';
    case 6: return 'orange';
    default: return 'gray';
  }
}

multipleSeriesSwap = (string, positions) => {
  for (let i = 0; i < positions.length; i++) {
    string = seriesSwap(string, positions[i]);
  }
  return string;
}

seriesSwap = (string, positions) => {
  let arr = string.split("");
  let temp = arr[ positions[0] ];

  for (let i = 0; i < positions.length - 1; i++)
    arr[ positions[i] ] = arr[ positions[i + 1] ];

  arr[ positions[ positions.length - 1 ] ] = temp;

  return arr.join('');
}

turn = (string, directions) => {
  let arr = directions.split(" ");

  for (let i = 0; i < arr.length; i++) {
    string = turnOne(string, arr[i]);
  }

  return string;
}

/*



━




*/

turnOne = (string, direction) => {
  const U_move = [
    [1, 7, 5, 3], 
    [2, 8, 6, 4], 
    [22, 38, 53, 11], 
    [21, 37, 52, 10], 
    [20, 44, 51, 17]
  ];
  const D_move = [
    [28, 34, 32, 30], 
    [29, 35, 33, 31], 
    [26, 15, 49, 42], 
    [25, 14, 48, 41], 
    [24, 13, 47, 40]
  ];
  const F_move = [
    [10, 16, 14, 12], 
    [11, 17, 15, 13], 
    [4, 47, 35, 20], 
    [3, 46, 34, 19], 
    [2, 53, 33, 26]
  ];
  const B_move = [
    [37, 43, 41, 39], 
    [38, 44, 42, 40], 
    [8, 24, 31, 51], 
    [7, 23, 30, 50], 
    [6, 22, 29, 49]
  ];
  const R_move = [
    [19, 25, 23, 21], 
    [20, 26, 24, 22], 
    [13, 29, 44, 2], 
    [12, 28, 43, 1], 
    [11, 35, 42, 8]
  ];
  const L_move = [
    [46, 52, 50, 48], 
    [47, 53, 51, 49], 
    [17, 6, 40, 33], 
    [16, 5, 39, 32], 
    [15, 4, 38, 31]
  ];
  const M_move = [
    [7, 41, 34, 10], 
    [0, 36, 27, 9], 
    [3, 37, 30, 14]
  ];
  const E_move = [
    [16, 50, 43, 19], 
    [9, 45, 36, 18], 
    [12, 46, 39, 23]
  ];
  const S_move = [
    [21, 5, 48, 28], 
    [18, 0, 45, 27], 
    [25, 1, 52, 32]
  ];

  const U_prime_move = U_move.map( arr => JSON.parse( JSON.stringify(arr) ).reverse() );
  const D_prime_move = D_move.map( arr => JSON.parse( JSON.stringify(arr) ).reverse() );
  const F_prime_move = F_move.map( arr => JSON.parse( JSON.stringify(arr) ).reverse() );
  const B_prime_move = B_move.map( arr => JSON.parse( JSON.stringify(arr) ).reverse() );
  const R_prime_move = R_move.map( arr => JSON.parse( JSON.stringify(arr) ).reverse() );
  const L_prime_move = L_move.map( arr => JSON.parse( JSON.stringify(arr) ).reverse() );
  const M_prime_move = M_move.map( arr => JSON.parse( JSON.stringify(arr) ).reverse() );
  const E_prime_move = E_move.map( arr => JSON.parse( JSON.stringify(arr) ).reverse() );
  const S_prime_move = S_move.map( arr => JSON.parse( JSON.stringify(arr) ).reverse() );

  switch (direction) {
    case "U": string = multipleSeriesSwap(string, U_move); break;
    case "D": string = multipleSeriesSwap(string, D_move); break;
    case "F": string = multipleSeriesSwap(string, F_move); break;
    case "B": string = multipleSeriesSwap(string, B_move); break;
    case "R": string = multipleSeriesSwap(string, R_move); break;
    case "L": string = multipleSeriesSwap(string, L_move); break;

    case "U'": string = multipleSeriesSwap(string, U_prime_move); break;
    case "D'": string = multipleSeriesSwap(string, D_prime_move); break;
    case "F'": string = multipleSeriesSwap(string, F_prime_move); break;
    case "B'": string = multipleSeriesSwap(string, B_prime_move); break;
    case "R'": string = multipleSeriesSwap(string, R_prime_move); break;
    case "L'": string = multipleSeriesSwap(string, L_prime_move); break;

    case "U2": string = multipleSeriesSwap(string, U_move); string = multipleSeriesSwap(string, U_move); break;
    case "D2": string = multipleSeriesSwap(string, D_move); string = multipleSeriesSwap(string, D_move); break;
    case "F2": string = multipleSeriesSwap(string, F_move); string = multipleSeriesSwap(string, F_move); break;
    case "B2": string = multipleSeriesSwap(string, B_move); string = multipleSeriesSwap(string, B_move); break;
    case "R2": string = multipleSeriesSwap(string, R_move); string = multipleSeriesSwap(string, R_move); break;
    case "L2": string = multipleSeriesSwap(string, L_move); string = multipleSeriesSwap(string, L_move); break;



    case "u": string = multipleSeriesSwap(string, U_move); string = multipleSeriesSwap(string, E_prime_move); break;
    case "d": string = multipleSeriesSwap(string, D_move); string = multipleSeriesSwap(string, E_move); break;
    case "f": string = multipleSeriesSwap(string, F_move); string = multipleSeriesSwap(string, S_move); break;
    case "b": string = multipleSeriesSwap(string, B_move); string = multipleSeriesSwap(string, S_prime_move); break;
    case "r": string = multipleSeriesSwap(string, R_move); string = multipleSeriesSwap(string, M_prime_move); break;
    case "l": string = multipleSeriesSwap(string, L_move); string = multipleSeriesSwap(string, M_move); break;

    case "u'": string = multipleSeriesSwap(string, U_prime_move); string = multipleSeriesSwap(string, E_move); break;
    case "d'": string = multipleSeriesSwap(string, D_prime_move); string = multipleSeriesSwap(string, E_prime_move); break;
    case "f'": string = multipleSeriesSwap(string, F_prime_move); string = multipleSeriesSwap(string, S_prime_move); break;
    case "b'": string = multipleSeriesSwap(string, B_prime_move); string = multipleSeriesSwap(string, S_move); break;
    case "r'": string = multipleSeriesSwap(string, R_prime_move); string = multipleSeriesSwap(string, M_move); break;
    case "l'": string = multipleSeriesSwap(string, L_prime_move); string = multipleSeriesSwap(string, M_prime_move); break;

    case "u2": string = multipleSeriesSwap(string, U_move); string = multipleSeriesSwap(string, U_move); string = multipleSeriesSwap(string, E_prime_move); string = multipleSeriesSwap(string, E_prime_move); break;
    case "d2": string = multipleSeriesSwap(string, D_move); string = multipleSeriesSwap(string, D_move); string = multipleSeriesSwap(string, E_move); string = multipleSeriesSwap(string, E_move); break;
    case "f2": string = multipleSeriesSwap(string, F_move); string = multipleSeriesSwap(string, F_move); string = multipleSeriesSwap(string, S_move); string = multipleSeriesSwap(string, S_move); break;
    case "b2": string = multipleSeriesSwap(string, B_move); string = multipleSeriesSwap(string, B_move); string = multipleSeriesSwap(string, S_prime_move); string = multipleSeriesSwap(string, S_prime_move); break;
    case "r2": string = multipleSeriesSwap(string, R_move); string = multipleSeriesSwap(string, R_move); string = multipleSeriesSwap(string, M_prime_move); string = multipleSeriesSwap(string, M_prime_move); break;
    case "l2": string = multipleSeriesSwap(string, L_move); string = multipleSeriesSwap(string, L_move); string = multipleSeriesSwap(string, M_move); string = multipleSeriesSwap(string, M_move); break;


    
    case "M": string = multipleSeriesSwap(string, M_move); break;
    case "M'": string = multipleSeriesSwap(string, M_prime_move); break;
    case "M2": string = multipleSeriesSwap(string, M_move); string = multipleSeriesSwap(string, M_move); break;

    case "E": string = multipleSeriesSwap(string, E_move); break;
    case "E'": string = multipleSeriesSwap(string, E_prime_move); break;
    case "E2": string = multipleSeriesSwap(string, E_move); string = multipleSeriesSwap(string, E_move); break;

    case "S": string = multipleSeriesSwap(string, S_move); break;
    case "S'": string = multipleSeriesSwap(string, S_prime_move); break;
    case "S2": string = multipleSeriesSwap(string, S_move); string = multipleSeriesSwap(string, S_move); break;



    case "x": string = multipleSeriesSwap(string, R_move); string = multipleSeriesSwap(string, M_prime_move); string = multipleSeriesSwap(string, L_prime_move); break;
    case "y": string = multipleSeriesSwap(string, U_move); string = multipleSeriesSwap(string, E_prime_move); string = multipleSeriesSwap(string, D_prime_move); break;
    case "z": string = multipleSeriesSwap(string, F_move); string = multipleSeriesSwap(string, S_move); string = multipleSeriesSwap(string, B_prime_move); break;

    case "x'": string = multipleSeriesSwap(string, R_prime_move); string = multipleSeriesSwap(string, M_move); string = multipleSeriesSwap(string, L_move); break;
    case "y'": string = multipleSeriesSwap(string, U_prime_move); string = multipleSeriesSwap(string, E_move); string = multipleSeriesSwap(string, D_move); break;
    case "z'": string = multipleSeriesSwap(string, F_prime_move); string = multipleSeriesSwap(string, S_prime_move); string = multipleSeriesSwap(string, B_move); break;

    case "x2": string = multipleSeriesSwap(string, R_move); string = multipleSeriesSwap(string, M_prime_move); string = multipleSeriesSwap(string, L_prime_move); string = multipleSeriesSwap(string, R_move); string = multipleSeriesSwap(string, M_prime_move); string = multipleSeriesSwap(string, L_prime_move); break;
    case "y2": string = multipleSeriesSwap(string, U_move); string = multipleSeriesSwap(string, E_prime_move); string = multipleSeriesSwap(string, D_prime_move); string = multipleSeriesSwap(string, U_move); string = multipleSeriesSwap(string, E_prime_move); string = multipleSeriesSwap(string, D_prime_move); break;
    case "z2": string = multipleSeriesSwap(string, F_move); string = multipleSeriesSwap(string, S_move); string = multipleSeriesSwap(string, B_prime_move); string = multipleSeriesSwap(string, F_move); string = multipleSeriesSwap(string, S_move); string = multipleSeriesSwap(string, B_prime_move); break;
  }

  return string;
}

stringImageTo3DImage = (string) => `
  <svg viewBox='-0.9 -0.9 1.8 1.8' class="rubik3d">
    <rect fill='var(--rubik-background-color)' x='-0.9' y='-0.9' width='1.8' height='1.8'/>
    <g>
      <polygon fill='var(--rubik-${numberToColor(string.substring(6, 7))}-color)' stroke='#000000' points='-4.94395492722E-17,-0.747570645647 0.195987546512,-0.662774614696 -1.69795801266E-17,-0.571237209618 -0.195987546512,-0.662774614696'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(7, 8))}-color)' stroke='#000000' points='0.232005309244,-0.646547084507 0.443574072948,-0.555009679429 0.248231527177,-0.455893701578 0.0360177627316,-0.555009679429'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(8, 9))}-color)' stroke='#000000' points='0.482583855536,-0.537431994052 0.711668838657,-0.4383160162 0.517783415392,-0.330639653666 0.287241309765,-0.4383160162'/>

      <polygon fill='var(--rubik-${numberToColor(string.substring(5, 6))}-color)' stroke='#000000' points='-0.232005309244,-0.646547084507 -0.0360177627316,-0.555009679429 -0.248231527177,-0.455893701578 -0.443574072948,-0.555009679429'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(0, 1))}-color)' stroke='#000000' points='-1.19067117689E-17,-0.537431994052 0.212213764446,-0.4383160162 1.31258271398E-17,-0.330639653666 -0.212213764446,-0.4383160162'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(1, 2))}-color)' stroke='#000000' points='0.251353447717,-0.419212035245 0.481895553344,-0.311535672712 0.270508995897,-0.19413986641 0.039139683271,-0.311535672712'/>

      <polygon fill='var(--rubik-${numberToColor(string.substring(4, 5))}-color)' stroke='#000000' points='-0.482583855536,-0.537431994052 -0.287241309765,-0.4383160162 -0.517783415392,-0.330639653666 -0.711668838657,-0.4383160162'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(3, 4))}-color)' stroke='#000000' points='-0.251353447717,-0.419212035245 -0.039139683271,-0.311535672712 -0.270508995897,-0.19413986641 -0.481895553344,-0.311535672712'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(2, 3))}-color)' stroke='#000000' points='1.92197429271E-17,-0.290697160276 0.231369312626,-0.173301353974 6.32515829415E-17,-0.0448079088972 -0.231369312626,-0.173301353974'/>



      <polygon fill='var(--rubik-${numberToColor(string.substring(20, 21))}-color)' stroke='#000000' points='0.0195723118985,-0.0109626610455 0.250941624524,-0.139456106122 0.241391846748,0.126727563228 0.0195723118985,0.261716201016'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(21, 22))}-color)' stroke='#000000' points='0.289305344891,-0.161716522847 0.500691902338,-0.279112329149 0.48317508531,-0.0193241313 0.279755567114,0.104467146503'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(22, 23))}-color)' stroke='#000000' points='0.535862871621,-0.299523577255 0.729748294886,-0.407199939789 0.705563815696,-0.153667051647 0.518346054594,-0.0397353794067'/>

      <polygon fill='var(--rubik-${numberToColor(string.substring(19, 20))}-color)' stroke='#000000' points='0.0187964861684,0.30740091162 0.240616021018,0.172412273832 0.23182332941,0.417493465286 0.0187964861684,0.557525119942'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(18, 19))}-color)' stroke='#000000' points='0.277484981547,0.149131684797 0.480904499743,0.0253404069942 0.464720974424,0.265354838312 0.26869228994,0.394212876251'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(23, 24))}-color)' stroke='#000000' points='0.514822720476,0.00392025149203 0.702040481578,-0.110011420748 0.679626178607,0.124964198255 0.498639195158,0.24393468281'/>

      <polygon fill='var(--rubik-${numberToColor(string.substring(26, 27))}-color)' stroke='#000000' points='0.0180798211904,0.599570709585 0.231106664432,0.459539054929 0.222984461349,0.685931529237 0.0180798211904,0.829827540014'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(25, 26))}-color)' stroke='#000000' points='0.266593210281,0.435462585597 0.462621894766,0.306604547658 0.447625016912,0.529020062126 0.258471007198,0.661855059905'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(24, 25))}-color)' stroke='#000000' points='0.495373153236,0.284381590748 0.676360136685,0.165411106194 0.655528520228,0.383794964844 0.480376275383,0.506797105216'/>



      <polygon fill='var(--rubik-${numberToColor(string.substring(17, 18))}-color)' stroke='#000000' points='-0.730336618018,-0.406648000697 -0.536451194753,-0.298971638163 -0.518934377726,-0.0391834403149 -0.706152138828,-0.153115112555'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(10, 11))}-color)' stroke='#000000' points='-0.501394876389,-0.27854802284 -0.290008318942,-0.161152216538 -0.280458541166,0.105031452812 -0.483878059362,-0.0187598249911'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(11, 12))}-color)' stroke='#000000' points='-0.251784251975,-0.138883000883 -0.0204149393493,-0.0103895558063 -0.0204149393493,0.262289306255 -0.242234474199,0.127300668467'/>

      <polygon fill='var(--rubik-${numberToColor(string.substring(16, 17))}-color)' stroke='#000000' points='-0.702590256077,-0.109566819661 -0.515372494975,0.0043648525786 -0.499188969657,0.244379283896 -0.680175953105,0.125408799342'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(9, 10))}-color)' stroke='#000000' points='-0.481556632129,0.025787474065 -0.278137113933,0.149578751868 -0.269344422326,0.394659943322 -0.465373106811,0.265801905383'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(12, 13))}-color)' stroke='#000000' points='-0.241391846748,0.172857245909 -0.0195723118985,0.307845883697 -0.0195723118985,0.557970092018 -0.23259915514,0.417938437362'/>

      <polygon fill='var(--rubik-${numberToColor(string.substring(15, 16))}-color)' stroke='#000000' points='-0.676874966562,0.165766840531 -0.495887983113,0.284737325085 -0.480891105259,0.507152839553 -0.656043350105,0.384150699181'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(14, 15))}-color)' stroke='#000000' points='-0.463228483716,0.306955455879 -0.267199799232,0.435813493818 -0.259077596148,0.662205968126 -0.448231605863,0.529370970347'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(13, 14))}-color)' stroke='#000000' points='-0.23182332941,0.459880027528 -0.0187964861684,0.599911682184 -0.0187964861684,0.830168512613 -0.223701126327,0.686272501836'/>
    </g>
  </svg>
`;

stringImageTo2DImage = (string) => `
  <svg viewBox='-0.9 -0.9 1.8 1.8' class="rubik2d">
    <rect fill='var(--rubik-background-color)' x='-0.9' y='-0.9' width='1.8' height='1.8'/>
    <g style='stroke-width:0.1;stroke-linejoin:round;opacity:1'>
      <polygon fill='var(--white)' stroke='#000000' points='-0.52222222222222,-0.52222222222222 0.52222222222222,-0.52222222222222 0.52222222222222,0.52222222222222 -0.52222222222222,0.52222222222222'/>
    </g>
    <g style='opacity:1;stroke-opacity:0.5;stroke-width:0;stroke-linejoin:round'>
      <polygon fill='var(--rubik-${numberToColor(string.substring(6, 7))}-color)' stroke='#000000' points='-0.52777777777778,-0.52777777777778 -0.21296296296296,-0.52777777777778 -0.21296296296296,-0.21296296296296 -0.52777777777778,-0.21296296296296'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(7, 8))}-color)' stroke='#000000' points='-0.15740740740741,-0.52777777777778 0.15740740740741,-0.52777777777778 0.15740740740741,-0.21296296296296 -0.15740740740741,-0.21296296296296'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(8, 9))}-color)' stroke='#000000' points='0.21296296296296,-0.52777777777778 0.52777777777778,-0.52777777777778 0.52777777777778,-0.21296296296296 0.21296296296296,-0.21296296296296'/>
    
      <polygon fill='var(--rubik-${numberToColor(string.substring(5, 6))}-color)' stroke='#000000' points='-0.52777777777778,-0.15740740740741 -0.21296296296296,-0.15740740740741 -0.21296296296296,0.15740740740741 -0.52777777777778,0.15740740740741'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(0, 1))}-color)' stroke='#000000' points='-0.15740740740741,-0.15740740740741 0.15740740740741,-0.15740740740741 0.15740740740741,0.15740740740741 -0.15740740740741,0.15740740740741'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(1, 2))}-color)' stroke='#000000' points='0.21296296296296,-0.15740740740741 0.52777777777778,-0.15740740740741 0.52777777777778,0.15740740740741 0.21296296296296,0.15740740740741'/>
    
      <polygon fill='var(--rubik-${numberToColor(string.substring(4, 5))}-color)' stroke='#000000' points='-0.52777777777778,0.21296296296296 -0.21296296296296,0.21296296296296 -0.21296296296296,0.52777777777778 -0.52777777777778,0.52777777777778'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(3, 4))}-color)' stroke='#000000' points='-0.15740740740741,0.21296296296296 0.15740740740741,0.21296296296296 0.15740740740741,0.52777777777778 -0.15740740740741,0.52777777777778'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(2, 3))}-color)' stroke='#000000' points='0.21296296296296,0.21296296296296 0.52777777777778,0.21296296296296 0.52777777777778,0.52777777777778 0.21296296296296,0.52777777777778'/>
    </g>
    <g style='opacity:1;stroke-opacity:1;stroke-width:0.02;stroke-linejoin:round'>
      <polygon fill='var(--rubik-${numberToColor(string.substring(17, 18))}-color)' stroke='#000000' points='-0.54406130268199,0.5544061302682 -0.19591315453384,0.5544061302682 -0.18390804597701,0.7183908045977 -0.50804597701149,0.7183908045977'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(10, 11))}-color)' stroke='#000000' points='-0.17445721583653,0.5544061302682 0.17369093231162,0.5544061302682 0.16168582375479,0.7183908045977 -0.16245210727969,0.7183908045977'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(11, 12))}-color)' stroke='#000000' points='0.19514687100894,0.5544061302682 0.54329501915709,0.5544061302682 0.50727969348659,0.7183908045977 0.18314176245211,0.7183908045977'/>
    
      <polygon fill='var(--rubik-${numberToColor(string.substring(22, 23))}-color)' stroke='#000000' points='0.5544061302682,-0.19514687100894 0.5544061302682,-0.54329501915709 0.7183908045977,-0.50727969348659 0.7183908045977,-0.18314176245211'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(21, 22))}-color)' stroke='#000000' points='0.5544061302682,0.17445721583653 0.5544061302682,-0.17369093231162 0.7183908045977,-0.16168582375479 0.7183908045977,0.16245210727969'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(20, 21))}-color)' stroke='#000000' points='0.5544061302682,0.54406130268199 0.5544061302682,0.19591315453384 0.7183908045977,0.18390804597701 0.7183908045977,0.50804597701149'/>
    
      <polygon fill='var(--rubik-${numberToColor(string.substring(38, 39))}-color)' stroke='#000000' points='-0.19514687100894,-0.5544061302682 -0.54329501915709,-0.5544061302682 -0.50727969348659,-0.7183908045977 -0.18314176245211,-0.7183908045977'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(37, 38))}-color)' stroke='#000000' points='0.17445721583653,-0.5544061302682 -0.17369093231162,-0.5544061302682 -0.16168582375479,-0.7183908045977 0.16245210727969,-0.7183908045977'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(44, 45))}-color)' stroke='#000000' points='0.54406130268199,-0.5544061302682 0.19591315453384,-0.5544061302682 0.18390804597701,-0.7183908045977 0.50804597701149,-0.7183908045977'/>
    
      <polygon fill='var(--rubik-${numberToColor(string.substring(51, 52))}-color)' stroke='#000000' points='-0.5544061302682,-0.54406130268199 -0.5544061302682,-0.19591315453384 -0.7183908045977,-0.18390804597701 -0.7183908045977,-0.50804597701149'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(52, 53))}-color)' stroke='#000000' points='-0.5544061302682,-0.17445721583653 -0.5544061302682,0.17369093231162 -0.7183908045977,0.16168582375479 -0.7183908045977,-0.16245210727969'/>
      <polygon fill='var(--rubik-${numberToColor(string.substring(53, 54))}-color)' stroke='#000000' points='-0.5544061302682,0.19514687100894 -0.5544061302682,0.54329501915709 -0.7183908045977,0.50727969348659 -0.7183908045977,0.18314176245211'/>
    </g>
  </svg>
`;

randomDate = (start, end) => {
  return {
    date: (new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))).toISOString().slice(0, 19).replace("T", " "), 
    string: (new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))).toISOString().slice(0, 19).replace(/(T|-| |:)/g, "")
  }
}

changeImage = (string, orders) => {
  let result = ''; 

  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "1": result += orders[0]; break;
      case "2": result += orders[1]; break;
      case "3": result += orders[2]; break;
      case "4": result += orders[3]; break;
      case "5": result += orders[4]; break;
      case "6": result += orders[5]; break;
      default: result += orders[6]; break;
    }
  }

  return result;
}

changeColorScheme = e => {
  let content = e.parentElement.parentElement.dataset.currentState;
  let state = e.parentElement.parentElement.dataset.rubikState;
  let result = changeImage(content, ['2', '3', '4', '5', '6', '1', '0']);
  
  changeSvg(e, result, state, result);
}

rotate = (e, direction) => {
  let content = e.parentElement.parentElement.dataset.currentState;
  let state = e.parentElement.parentElement.dataset.rubikState;
  let result = turn(content, direction);

  changeSvg(e, result, state, result);

  if (e.parentElement.parentElement.dataset.rotateCount == 3) 
    e.parentElement.parentElement.dataset.rotateCount = "0";
  else 
    e.parentElement.parentElement.dataset.rotateCount = parseInt( e.parentElement.parentElement.dataset.rotateCount ) + 1;

  switch (e.parentElement.parentElement.dataset.rotateCount) {
    case "0": 

      break;
    case "1": 
      break;
    case "2": 
      break;
    case "3": 
      break;
  }
}

reset = e => {
  let content = e.parentElement.parentElement.dataset.rootState;
  let state = e.parentElement.parentElement.dataset.rubikState;

  changeSvg(e, content, state, content);
}

toggleState = e => {
  let content = e.parentElement.parentElement.dataset.currentState;

  e.parentElement.parentElement.removeChild( e.parentElement.parentElement.querySelector("svg") );
  if ( e.parentElement.parentElement.dataset.rubikState == '3D' ) {
    e.parentElement.parentElement.dataset.rubikState = '2D';
    e.parentElement.parentElement.insertAdjacentHTML( 'afterbegin', stringImageTo2DImage(content) );
  } else {
    e.parentElement.parentElement.dataset.rubikState = '3D';
    e.parentElement.parentElement.insertAdjacentHTML( 'afterbegin', stringImageTo3DImage(content) );
  }
}

changeSvg = (e, string, state, currentState) => {
  e.parentElement.parentElement.removeChild( e.parentElement.parentElement.querySelector("svg") );
  if (state == "3D") 
    e.parentElement.parentElement.insertAdjacentHTML( 'afterbegin', stringImageTo3DImage(string) );
  else 
    e.parentElement.parentElement.insertAdjacentHTML( 'afterbegin', stringImageTo2DImage(string) );
  e.parentElement.parentElement.dataset.currentState = currentState;
}

const patternChecks = {
  f2l: [
    [27, 28, 30, 32, 34, 35],
    [45, 48],
    [36, 41],
    [9, 12, 13, 14],
    [18, 19, 25, 26]
  ],
  oll: [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [9, 12, 13, 14, 15, 16],
    [18, 19, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 32, 33, 34, 35],
    [36, 39, 40, 41, 42, 43],
    [45, 46, 47, 48, 49, 50]
  ],
  pll: [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42, 43, 44],
    [45, 46, 47, 48, 49, 50, 51, 52, 53]
  ]
}

submit = (e) => {
  let result;

  switch (document.querySelector("h1").innerHTML.match(/\w+\b/)[0]) {
    case "F2L":
      console.log("lmao");
      result = 
        checkAlgorithm( 
          turn(
            e.parentElement.parentElement.parentElement.querySelector(".img").dataset.currentState, 
            e.parentElement.querySelector("input").value
          ), 
          patternChecks.f2l
        )
      break;
    case "OLL":
      result = 
        checkAlgorithm( 
          turn(
            e.parentElement.parentElement.parentElement.querySelector(".img").dataset.currentState, 
            e.parentElement.querySelector("input").value
          ), 
          patternChecks.oll
        )
      break;
    case "PLL":
      result = 
        checkAlgorithm( 
          turn(
            e.parentElement.parentElement.parentElement.querySelector(".img").dataset.currentState, 
            e.parentElement.querySelector("input").value
          ), 
          patternChecks.pll
        )
      break;
  }

  if (!result) {
    alert("This algorithm does not solve this rubik's cube case");
    return;
  } else {
    alert("faejvbn");
    let date = new Date();

    let a = document.createElement("a");
    a.setAttribute(`href`, 
      `Redirect/submitAlgorithm.php?
        image=${e.parentElement.parentElement.parentElement.querySelector(".img").dataset.currentState}&
        algorithm=${e.parentElement.querySelector("input").value}&
        date=${date.toISOString().slice(0, 19).replace(/(T|-| |:)/g, "")}`);
    document.body.appendChild(a);
    a.click();
  }
}

let solvedF2lPatternCheck = [
  [27, 28, 30, 32, 34, 35],
  [45, 48],
  [36, 41],
  [9, 12, 13, 14],
  [18, 19, 25, 26]
]

let solvedOllPatternCheck = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [9, 12, 13, 14, 15, 16],
  [18, 19, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 32, 33, 34, 35],
  [36, 39, 40, 41, 42, 43],
  [45, 46, 47, 48, 49, 50]
]

let solvedPllPatternCheck = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42, 43, 44],
  [45, 46, 47, 48, 49, 50, 51, 52, 53]
]

checkAlgorithm = (algorithm, patternCheck) => {
  alert(algorithm);
  for (let i = 0; i < patternCheck.length; i++)
    for (let j = 1; j < patternCheck[i].length; j++)
      if (algorithm[ patternCheck[i][j] ] != algorithm[ patternCheck[i][0] ]) return false;

  return true;
}

showFromMilliSecond = (str) => str.slice(9);
showFromSecond = (str) => str.slice(6);
showFromMinute = (str) => str.slice(3);
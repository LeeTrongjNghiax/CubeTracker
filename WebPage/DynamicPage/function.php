<?php
  function numberToColor($num) {
    switch ((int)$num) {
      case 1: return 'white';
      case 2: return 'green';
      case 3: return 'red';
      case 4: return 'yellow';
      case 5: return 'blue';
      case 6: return 'orange';
      default: return 'gray';
    }
  }

  function stringImageTo3DImage($string) {
    return `<svg viewBox='-0.9 -0.9 1.8 1.8' class="rubik3d">
      <rect fill='var(--rubik-background-color)' x='-0.9' y='-0.9' width='1.8' height='1.8'/>
      <g>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='-4.94395492722E-17,-0.747570645647 0.195987546512,-0.662774614696 -1.69795801266E-17,-0.571237209618 -0.195987546512,-0.662774614696'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='0.232005309244,-0.646547084507 0.443574072948,-0.555009679429 0.248231527177,-0.455893701578 0.0360177627316,-0.555009679429'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='0.482583855536,-0.537431994052 0.711668838657,-0.4383160162 0.517783415392,-0.330639653666 0.287241309765,-0.4383160162'/>

        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='-0.232005309244,-0.646547084507 -0.0360177627316,-0.555009679429 -0.248231527177,-0.455893701578 -0.443574072948,-0.555009679429'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='-1.19067117689E-17,-0.537431994052 0.212213764446,-0.4383160162 1.31258271398E-17,-0.330639653666 -0.212213764446,-0.4383160162'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='0.251353447717,-0.419212035245 0.481895553344,-0.311535672712 0.270508995897,-0.19413986641 0.039139683271,-0.311535672712'/>

        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='-0.482583855536,-0.537431994052 -0.287241309765,-0.4383160162 -0.517783415392,-0.330639653666 -0.711668838657,-0.4383160162'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='-0.251353447717,-0.419212035245 -0.039139683271,-0.311535672712 -0.270508995897,-0.19413986641 -0.481895553344,-0.311535672712'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='1.92197429271E-17,-0.290697160276 0.231369312626,-0.173301353974 6.32515829415E-17,-0.0448079088972 -0.231369312626,-0.173301353974'/>



        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='0.0195723118985,-0.0109626610455 0.250941624524,-0.139456106122 0.241391846748,0.126727563228 0.0195723118985,0.261716201016'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='0.289305344891,-0.161716522847 0.500691902338,-0.279112329149 0.48317508531,-0.0193241313 0.279755567114,0.104467146503'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='0.535862871621,-0.299523577255 0.729748294886,-0.407199939789 0.705563815696,-0.153667051647 0.518346054594,-0.0397353794067'/>

        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='0.0187964861684,0.30740091162 0.240616021018,0.172412273832 0.23182332941,0.417493465286 0.0187964861684,0.557525119942'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='0.277484981547,0.149131684797 0.480904499743,0.0253404069942 0.464720974424,0.265354838312 0.26869228994,0.394212876251'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='0.514822720476,0.00392025149203 0.702040481578,-0.110011420748 0.679626178607,0.124964198255 0.498639195158,0.24393468281'/>

        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='0.0180798211904,0.599570709585 0.231106664432,0.459539054929 0.222984461349,0.685931529237 0.0180798211904,0.829827540014'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='0.266593210281,0.435462585597 0.462621894766,0.306604547658 0.447625016912,0.529020062126 0.258471007198,0.661855059905'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='0.495373153236,0.284381590748 0.676360136685,0.165411106194 0.655528520228,0.383794964844 0.480376275383,0.506797105216'/>



        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='-0.730336618018,-0.406648000697 -0.536451194753,-0.298971638163 -0.518934377726,-0.0391834403149 -0.706152138828,-0.153115112555'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='-0.501394876389,-0.27854802284 -0.290008318942,-0.161152216538 -0.280458541166,0.105031452812 -0.483878059362,-0.0187598249911'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='-0.251784251975,-0.138883000883 -0.0204149393493,-0.0103895558063 -0.0204149393493,0.262289306255 -0.242234474199,0.127300668467'/>

        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='-0.702590256077,-0.109566819661 -0.515372494975,0.0043648525786 -0.499188969657,0.244379283896 -0.680175953105,0.125408799342'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='-0.481556632129,0.025787474065 -0.278137113933,0.149578751868 -0.269344422326,0.394659943322 -0.465373106811,0.265801905383'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='-0.241391846748,0.172857245909 -0.0195723118985,0.307845883697 -0.0195723118985,0.557970092018 -0.23259915514,0.417938437362'/>

        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='-0.676874966562,0.165766840531 -0.495887983113,0.284737325085 -0.480891105259,0.507152839553 -0.656043350105,0.384150699181'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='-0.463228483716,0.306955455879 -0.267199799232,0.435813493818 -0.259077596148,0.662205968126 -0.448231605863,0.529370970347'/>
        <polygon fill='var(--rubik-` . numberToColor(substr($string, 0, 1)) . `-color)' stroke='#000000' points='-0.23182332941,0.459880027528 -0.0187964861684,0.599911682184 -0.0187964861684,0.830168512613 -0.223701126327,0.686272501836'/>
      </g>
    </svg>
    `;
  }
?>
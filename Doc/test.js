turnOne = (string, direction) => {

/*

Side move: 

		[A2, A8, A6, A4], 
		[A3, A9, A7, A5], 
		[B9, C5, D3, E7], 
		[B2, C6, D4, E8], 
		[B3, C7, D5, E9], 

Middle move

		[A1, B1, C1, D1], 
		[A2, B6, C8, D4], 
		[A6, B2, C4, D8]

*/

	const face_turn = [
		[8, 6, 4, 2], 
		[9, 7, 5, 3], 
		[9, 5, 3, 7], 
		[2, 6, 4, 8], 
		[3, 7, 5, 9]
	];
	const slice_turn = [
		[1, 1, 1, 1], 
		[2, 6, 8, 4], 
		[6, 2, 4, 8]
	];
	const innerLayer = [
		[0, 4, 3, 1], // M
		[1, 5, 4, 2], // E
		[2, 3, 5, 0], // S_prime
	];
	const outerLayer = [
		[0, 2, 4, 5, 1], // U
		[1, 0, 5, 3, 2], // F
		[2, 1, 3, 4, 0], // R
	];

	for (let i = 0; i < 3; i++) {
		let arr = [];
		arr.push(outerLayer[i][0] + 3);
		for (let j = 1; j < outerLayer[i].length; j++) {
			let sign = (j % 2 == 0) ? -1 : 1;
			arr.push( outerLayer[i][ j + sign ] );
		}
		outerLayer.push(arr);
	}

	let moves = [];

	for (let i = 0; i < outerLayer.length; i++) {
		let layerMove = [];
		for (let j = 0; j < 2; j++) {
			layerMove.push(
				face_turn[j].map(
					x => x + 10 * outerLayer[i][0]
				)
			);
		}
		for (let j = 2; j < 5; j++) {
			layerMove.push(
				face_turn[j].map(
					(x, k) => x + 10 * outerLayer[i][k + 1]
				)
			);
		}
		moves.push(layerMove);
	}

	for (let i = 0; i < innerLayer.length; i++) {
		let sliceMove = [];
		for (let j = 0; j < slice_turn.length; j++) {
			sliceMove.push(
				slice_turn[j].map(
					(x, k) => x + 10 * innerLayer[i][k]
				)
			);
		}
		moves.push(sliceMove);
	}

	let prime_moves = [];

	for (let i = 0; i < moves.length; i++) {
		prime_moves.push(
			moves[i].map( arr => JSON.parse( JSON.stringify(arr) ).reverse() )
		);
	};

	console.log(prime);

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
export function bellCurve(arr) {
	if(arr.length === 3) {
		arr[0] = arr[0] * .95
		arr[1] = arr[1] * 1.1
        arr[2] = arr[2] * .95
	}else if(arr.length === 4) {
		arr[0] = arr[0] * .9
		arr[1] = arr[1] * 1.1
		arr[2] = arr[2] * 1.1
		arr[3] = arr[3] * .9
	}else if(arr.length === 5) {
		arr[0] = arr[0] * .9
		arr[1] = arr[1] * 1
		arr[2] = arr[2] * 1.2
		arr[3] = arr[3] * 1
		arr[4] = arr[4] * .9
	}else if(arr.length === 6) {
		arr[0] = arr[0] * .9
		arr[1] = arr[1] * 1
		arr[2] = arr[2] * 1.1
		arr[3] = arr[3] * 1.1
		arr[4] = arr[4] * 1
		arr[5] = arr[5] * .9
	}else if(arr.length === 7) {
		arr[0] = arr[0] * .9
		arr[1] = arr[1] * .95
		arr[2] = arr[2] * 1
		arr[3] = arr[3] * 1.15
		arr[4] = arr[4] * 1
		arr[5] = arr[5] * .95
		arr[6] = arr[6] * .9
	}else if(arr.length === 8) {
		arr[0] = arr[0] * .85
		arr[1] = arr[1] * .95
		arr[2] = arr[2] * 1
		arr[3] = arr[3] * 1.1
		arr[4] = arr[4] * 1.1
		arr[5] = arr[5] * 1
		arr[6] = arr[6] * .95
		arr[7] = arr[7] * .85
	}else if(arr.length === 9) {
		arr[0] = arr[0] * .85
		arr[1] = arr[1] * .95
		arr[2] = arr[2] * 1
		arr[3] = arr[3] * 1.1
		arr[4] = arr[4] * 1.2
		arr[5] = arr[5] * 1.1
		arr[6] = arr[6] * 1
		arr[7] = arr[7] * .95
		arr[8] = arr[8] * .85
	}else if(arr.length === 10) {
		arr[0] = arr[0] * .8
		arr[1] = arr[1] * .85
		arr[2] = arr[2] * 1
		arr[3] = arr[3] * 1.05
		arr[4] = arr[4] * 1.15
		arr[5] = arr[5] * 1.15
		arr[6] = arr[6] * 1.05
		arr[7] = arr[7] * 1
		arr[8] = arr[8] * .85
		arr[9] = arr[9] * .8
	}else if(arr.length === 11) {
		arr[0] = arr[0] * .85
		arr[1] = arr[1] * .9
		arr[2] = arr[2] * 1
		arr[3] = arr[3] * 1.05
		arr[4] = arr[4] * 1.1
		arr[5] = arr[5] * 1.2
		arr[6] = arr[6] * 1.1
		arr[7] = arr[7] * 1.05
		arr[8] = arr[8] * 1
		arr[9] = arr[9] * .9
		arr[10] = arr[10] * .85
	}else if(arr.length === 12) {
		arr[0] = arr[0] * .85
		arr[1] = arr[1] * .9
		arr[2] = arr[2] * .95
		arr[3] = arr[3] * 1
		arr[4] = arr[4] * 1.1
		arr[5] = arr[5] * 1.2
		arr[6] = arr[6] * 1.2
		arr[7] = arr[7] * 1.1
		arr[8] = arr[8] * 1
		arr[9] = arr[9] * .95
		arr[10] = arr[10] * .9
		arr[11] = arr[11] * .85
	}else {return arr}
	return arr
}
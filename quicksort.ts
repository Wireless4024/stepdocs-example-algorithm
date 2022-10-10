function quicksort(arr: number[]) {
	_quicksort(arr, 0, arr.length - 1)
}

function _quicksort(arr: number[], low: number, high: number) {
	if (low < high) {
		const pi = partition(arr, low, high)
		_quicksort(arr, low, pi - 1)
		_quicksort(arr, pi + 1, high)
	}
}

function swap(arr: number[], i: number, j: number) {
	let temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

function partition(arr: number[], low: number, high: number) {
	let pivot = arr[high]
	let i = (low - 1)
	for (let j = low; j <= high - 1; j++) {
		if (arr[j] < pivot) {
			swap(arr, ++i, j)
		}
	}
	swap(arr, i + 1, high)
	return (i + 1)
}
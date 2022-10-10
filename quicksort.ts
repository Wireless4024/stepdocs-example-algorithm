function quicksort(arr: number[]) {
	// TODO: Implement quicksort here
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
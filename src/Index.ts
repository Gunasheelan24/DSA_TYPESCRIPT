const bubbleSort = (getArray: number[]): number[] => {
  for (let i = 0; i < getArray.length; i++) {
    for (let j = 0; j < getArray.length; j++) {
      if (getArray[j] > getArray[j + 1]) {
        const temp = getArray[j];
        getArray[j] = getArray[j + 1];
        getArray[j + 1] = temp;
      }
    }
  }
  return getArray;
};

const Result = bubbleSort([9, 6, 5, 3, 2]);
// console.log(Result);

const selectionSort = (getArray: number[]): number[] => {
  for (let i = 0; i < getArray.length; i++) {
    let minimum = i;
    for (let j = 0; j < getArray.length; j++) {
      if (getArray[j] < getArray[j + 1]) {
        minimum = getArray[j];
      }
    }
    getArray[minimum] = getArray[i];
    getArray[i] = getArray[minimum];
  }
  return getArray;
};

const selectResult = selectionSort([9, 6, 5, 3, 2, 1]);
// console.log(selectResult);

const linearSeact = (searchArray: number[], target: number) => {
  const isThere = searchArray.findIndex((res) => res === target);
  return isThere === -1
    ? `There Is No Element Found In ${target}`
    : `Hooray We Got The Element It's In The Index Of ${isThere} ${searchArray[isThere]}`;
};

const linear = linearSeact([4, 6, 7, 8, 91, 2, 4, 45], 45);
console.log(linear);

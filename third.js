// make a function
// input: N of arrays
// number of common elements

function findCommonElementsCount(
  numarrays,
  isInt = true,
  floatThreshold = 0.001
) {
  // set for common elements
  const commonElements = new Set()

  // iterating through first aray
  for (let i = 0; i < numarrays[0].length; i++) {
    // getting an element from first array
    const currentElement = numarrays[0][i]

    // flag  for common
    let isCommon = true

    // iterating through rest of arrays
    for (let others = 1; others < numarrays.length; others++) {
      // getting next array
      const currentArray = numarrays[others]

      if (isInt) {
        // checking if other array contains the element
        if (!currentArray.includes(currentElement)) {
          isCommon = false
          break
        }
      } else {
        // initial flag for second element
        let secondElementIsCommon = false

        // iterating through next arrays
        for (
          let secondArrIndex = 0;
          secondArrIndex < currentArray.length;
          secondArrIndex++
        ) {
          // checking for equivalence
          if (
            Math.abs(currentElement - currentArray[secondArrIndex]) <=
            floatThreshold
          ) {
            secondElementIsCommon = true
            break
          }
        }

        // if second element is not common in all next arrays, then its not common
        if (!secondElementIsCommon) {
          isCommon = false
          break
        }
      }
    }

    if (isCommon) {
      commonElements.add(currentElement)
    }
  }

  //   returning common elements count
  return commonElements.size
}

function testFindCommonElementsCount(arrays, expected, isInt = true) {
  const result = findCommonElementsCount((numarrays = arrays), (isInt = isInt))
  if (result === expected) {
    return `Test Case Passed: [${numarrays}]: Expected ${expected}, Got: ${result}`
  } else {
    return `Test Case Failed: [${numarrays}]: Expected ${expected}, Got: ${result}`
  }
}

// test 1
let arrays = [
  [1, 2, 3],
  [3, 4, 5],
  [3, 6, 5],
]
console.log(testFindCommonElementsCount(arrays, 1))

// test 2
arrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
console.log(testFindCommonElementsCount(arrays, 0))

// test 3
arrays = [
  [1, 2, 3],
  [3, 1, 5],
  [3, 6, 1],
]
console.log(testFindCommonElementsCount(arrays, 2))

// test 4
arrays = [[1, 2, 3], [8], [3, 6, 1]]
console.log(testFindCommonElementsCount(arrays, 0))

console.log("===============floats================")
// test test
arrays = [
  [1.0, 2.0, 3.0],
  [1.001, 2.0, 3.002],
]
console.log(testFindCommonElementsCount(arrays, 2, (isInt = false)))

// test 2
arrays = [
  [1.0, 2.0, 3.0],
  [1.001, 2.0, 3.0001],
  [1.001, 4, 3.0001],
]
console.log(testFindCommonElementsCount(arrays, 2, (isInt = false)))

// test 3
arrays = [
  [1.0, 2.0, 3.0],
  [1.001, 2.0, 3.0001],
  [2.001, 3.0001],
]
console.log(testFindCommonElementsCount(arrays, 2, (isInt = false)))

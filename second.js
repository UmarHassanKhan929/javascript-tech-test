// make a function
// input: 2 arrays
// number of common elements

function findCommonElementsCount(
  arr1,
  arr2,
  isInt = true,
  floatThreshold = 0.001
) {
  // set for common elements
  const commonElements = new Set()

  // iterating through first aray
  for (let i = 0; i < arr1.length; i++) {
    // checking if element 1 exists in second array, and adding it
    for (let j = 0; j < arr2.length; j++) {
      if (isInt) {
        // in case of Ints
        if (arr1[i] === arr2[j]) {
          commonElements.add(arr1[i])
        }
      } else {
        // in case of Floats
        if (Math.abs(arr1[i] - arr2[j]) <= floatThreshold) {
          commonElements.add(arr1[i])
        }
      }
    }
  }

  // returning common elements count
  return commonElements.size
}

function testFindCommonElementsCount(arr1, arr2, expected, isInt = true) {
  const result = findCommonElementsCount(arr1, arr2, (isInt = isInt))
  if (result === expected) {
    return `Test Case Passed: [${arr1}],[${arr2}]: Expected ${expected}, Got: ${result}`
  } else {
    return `Test Case Failed: [${arr1}],[${arr2}]: Expected ${expected}, Got: ${result}`
  }
}

// Test Case 1:
let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5]
console.log(testFindCommonElementsCount(arr1, arr2, 1))

// Test Case 2:
arr1 = [1, 2, 3]
arr2 = [1, 2, 3]
console.log(testFindCommonElementsCount(arr1, arr2, 3))

// Test Case 3:
arr1 = []
arr2 = [3, 4, 5]
console.log(testFindCommonElementsCount(arr1, arr2, 0))

// Test Case 4:
arr1 = [1, 2, 3]
arr2 = []
console.log(testFindCommonElementsCount(arr1, arr2, 0))

// Test Case 5:
arr1 = [2, 3, 4, 6]
arr2 = [3, 4, 5, 6]
console.log(testFindCommonElementsCount(arr1, arr2, 3))

// Test Case 6:
// ([1.000, 2.000, 3.000, 4.000], [1.001, 2.000, 3.002, 3.999], 3)
arr1 = [1.0, 2.0, 3.0, 4.0]
arr2 = [1.001, 2.0, 3.002, 3.999]
console.log(testFindCommonElementsCount(arr1, arr2, 3, false))

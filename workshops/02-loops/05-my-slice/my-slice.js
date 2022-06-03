// YOUR CODE BELOW
function mySlice(originalString, startIdx = 0, endIdx = originalString.length) {
  let stri = "";
  for (let i = startIdx; i < endIdx; i++) {
    stri += originalString[i];
  }
  return stri;

  //   if (originalString && startIdx && endIdx) {
  //     for (let i = startIdx; i < endIdx; i++) {
  //       stri += originalString[i];
  //     }
  //     return stri;
  //   } else if (originalString && startIdx) {
  //     for (let i = startIdx; i < originalString.length; i++) {
  //       stri += originalString[i];
  //     }
  //     return stri;
  //   } else {
  //     return originalString;
  //   }
}

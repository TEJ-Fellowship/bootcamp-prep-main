// YOUR CODE BELOW
function frequencyAnalysis(word) {
  let freq = {};

  for (let i = 0; i < word.length; i++) {
    if ([word[i]] in freq) freq[word[i]]++;
    else freq[word[i]] = 1;
  }

  return freq;
}

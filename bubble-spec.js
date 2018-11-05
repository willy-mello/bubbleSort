describe('Bubble Sort', function() {
  let array = [5, 6, 2, 9, 8, 1, 3, 4, 7];


  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('sorts from smallest to largest', function() {
    bubbleSort(array);
    expect(bubbleSort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
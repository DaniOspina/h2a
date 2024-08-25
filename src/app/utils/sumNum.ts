const sumEvenNumbers = (numbers: number[]): number => {
    return numbers.reduce((sum, num) => {
      return num % 2 === 0 ? sum + num : sum;
    }, 0);
  };
  
  export default sumEvenNumbers;
  
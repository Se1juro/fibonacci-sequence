let count = 0;
function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  console.log(n1)
  console.log(n2)
  while (count < n) {
    let result = n1 + n2;
    console.log(result)
    n1 = n2;
    n2 = result;
    count++;
  }
}

fibonacci(0);

let result = 0;
for (let i = 2; i < process.argv.length; i += 1) {
  result += Number(process.argv[i]);
}
console.log(result);

/* input.forEach((numb, i) => {
  let result=0;
  result+= numb;
  i++;
  return result
}); */

// console.log(Number(process.argv[2]));

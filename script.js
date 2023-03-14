function calculateMinCost() {
  //your code here
  let input = document.getElementById("rope-lengths").value;
	let arr = input.split(',');
	let ans = [];
	arr.forEach(element => {
		if(element!=','){
			ans.push(Number(element));
		}
	})
	let sum = 0;
	ans.forEach( x => {
		sum += x;
	})
  document.getElementById("result").innerHTML = sum;
  
}  

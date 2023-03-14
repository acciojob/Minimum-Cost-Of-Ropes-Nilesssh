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
  document.getElementById("result").innerHTML = typeof  ans;
  
}  

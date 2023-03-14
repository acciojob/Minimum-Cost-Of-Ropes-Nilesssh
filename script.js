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
	let result = [];
	let sum = 0;
	
	ans.sort();
	let check = ans[0];
	for(let i=0; i<ans.length-1; i++){
		if(ans[i]!=','){
			 result.push(check+=ans[i+1]);
		}
	}
	result.forEach(res =>{
		 sum += res;
	})
	
  document.getElementById("result").innerHTML = sum;
  
}  

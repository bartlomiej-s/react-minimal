import React from 'react'
import text from './example.json'



const generateArray = (n) => { return Array.from({length: n}, (v, k) => k+1); }

const generateRandomArray = (n) => { return Array.from({length: n}, () => Math.floor((Math.random() * 25) + 1)); }

const Array1 = [2, 56, 23, 88, 17, 4]

function BiggerElements(val) {
     return function(evalue)
     {
     	return (evalue >= val);
     }
}

const Result1 = Array1.filter(BiggerElements(15));

const Array2 = [2, 5, 8, 10]

const Result2 = Array2.map(Math.sqrt)

function makeTmpArray(array) {
  return array.map((number) => <li>{number}</li>);
}

const TmpArray1 = makeTmpArray(generateArray(10))

const TmpArray2 = makeTmpArray(generateRandomArray(5))

const TmpArray3 = makeTmpArray(Result1)

const TmpArray4 = makeTmpArray(Result2)



var data = JSON.parse(JSON.stringify(text))

function first(data) {
	var result = new Array();
	var i, j;
	for (i = 0; i < data.length; i++) {
		for (j = 0; j < data[i].students.length; j++) {
			result.push(data[i].students[j].name);
		}
	}
	return result;
  }

const TmpArray5 = makeTmpArray(first(data))

const TmpArray6 = makeTmpArray(first(data).sort())

function second(data) {
	var result = new Array();
	var i, j;
	for (i = 0; i < data.length; i++) {
		if (data[i].active == true) 
			for (j = 0; j < data[i].students.length; j++) {
				if (data[i].students[j].age > 20) 
					result.push(data[i].students[j].name);
			}
	}
	return result;
  }

  const TmpArray7 = makeTmpArray(second(data));

  function event1(e) {
		var x = document.getElementById("list1");
		if (x.style.display === "none") {
	 	 x.style.display = "block";
		} else {
	 	 x.style.display = "none";
		}
	}
  function event2(e) {
   		var x = document.getElementById("list2");
		if (x.style.display === "none") {
	 	 x.style.display = "block";
		} else {
	 	 x.style.display = "none";
		}
	}
  function event3(e) {
		var x = document.getElementById("list3");
		if (x.style.display === "none") {
	 	 x.style.display = "block";
		} else {
	 	 x.style.display = "none";
		}
	}

	var a = 0;

	var b = 0;

	function funca(e) {
		a = e.target.value;
		console.log("Value changed a:" + e.target.value);
	}

	function funcb(e) {
		b = e.target.value;
		console.log("Value changed b:" + e.target.value);
	}
	
	function genArr(a, b)
	{
		const ABArr =  () => { return Array.from({length: Number(b)-Number(a)-1}, (v, k) => k+1+Number(a)); }
		var TmpArr = [];
		if (a<b && a>0) TmpArr = ABArr();
		return TmpArr;
	}

	class AB extends React.Component {
		
		
		constructor() {
		  super();
		  this.state = {
			a: 0,
			b: 0,
			array: []
		  };
		  this.funca = this.funca.bind(this);
    	  this.funcb = this.funcb.bind(this)
		}

		funca(e) {
			console.log("Value changed a:" + e.target.value);
			let arr = genArr(e.target.value, this.state.b);
			this.setState({
			  a: Number(e.target.value),
			  array: arr
			});
		}

		funcb(e) {
			console.log("Value changed b:" + e.target.value);
			let arr = genArr(this.state.a, e.target.value);
			this.setState({
			  b: Number(e.target.value),
			  array: arr
			});
		}
			
		render() {
			return (
				<div><h1>Minimal React bartlomiej-s</h1>
				<p>Bundle size: 128.91 KB, Load time of the bundle: 75 ms, Last commit SHA1: 8e42c77a5535786cd5abd6304e194e842457e2b3</p>
				  
				<h2><b>Lab 1</b></h2>
				<h3>Podpunkt 2</h3>
				<p>{TmpArray1}</p>
				<h3>Podpunkt 3</h3>
				<p>{TmpArray2}</p>
				<h3>Podpunkt 4</h3>
				<p>{TmpArray3}</p>
				<h3>Podpunkt 5</h3>
				<p>{TmpArray4}</p>
				<h3>Podpunkt 7</h3>
				<button onClick={event1}>All students</button>
				<button onClick={event2}>Sort students</button>
				<button onClick={event3}>Old students</button>
				<p id="list1" style={{display: 'none' }}>{TmpArray5}</p>
				<p id="list2" style={{display: 'none' }}>{TmpArray6}</p>
				<p id="list3" style={{display: 'none' }}>{TmpArray7}</p>
			
				<h2><b>Lab 2</b></h2>
				<h3>Exercise 1</h3>
				<input type="number" name="a" onChange={this.funca}></input>
				<input type="number" name="b" onChange={this.funcb}></input>
				<h3>Exercise 2</h3>
				<p>{this.state.array.map((number) => <li>{number}</li>)}</p>
			  </div>
			);
		}
	}

export default AB
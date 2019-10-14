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
		for (j = 0; j < data[i].length; j++) {
			result.push(data[i].students[j].name);
		}
	}
	return result;
  }

const TmpArray5 = makeTmpArray(first(data))

const MyApp = () => (
  <div><h1>Minimal React bartlomiej-s</h1>
	<p>Bundle size: 128.91 KB, Load time of the bundle: 75 ms, Last commit SHA1: 8e42c77a5535786cd5abd6304e194e842457e2b3</p>
  	<h2>Podpunkt 2</h2>
	<p>{TmpArray1}</p>
	<h2>Podpunkt 3</h2>
	<p>{TmpArray2}</p>
	<h2>Podpunkt 4</h2>
	<p>{TmpArray3}</p>
	<h2>Podpunkt 5</h2>
	<p>{TmpArray4}</p>
	<h2>Podpunkt 7</h2>
	<p>{TmpArray5}</p>
  </div>
)

export default MyApp
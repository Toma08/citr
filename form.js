console.log('betoltodik a script:',localStorage.getItem('nev'))
	document.getElementById('gomb').addEventListener('click',kiir);
	document.getElementById('torol').addEventListener('click',torol);




function kiir(){
	let sz=document.getElementById('szoveg').value;
	document.getElementById('masolat').innerHTML=sz;
	localStorage.setItem('nev', 'KAM');
}
function torol(){
	document.getElementById("masolat").innerHTML=""
}
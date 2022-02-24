function shyam(){
// var x=parseInt(prompt("enter your binary number"));
var x=document.getElementById("go").value;
var g=x.toString().split("").reverse().join("");
var ho=document.getElementById("box").innerHTML=g;


// var g=document.getElementById("box").innerHTML=x;
// var len=g.toString().split("").reverse().join("");toString().split("").reverse().join("");
for(i=0;i<=10;i++)
{
	var ko=document.getElementById("wo")
	var stor=ko.innerHTML=1*1+","+2*1+","+2*2+","+4*2+","+8*2+","+16*2+","+32*2+","+64*2+","+128*2;
}

	// var gos=stor.toString().split("").reverse().join("");
	// console.log(gos)

}
function jo(){
	alert("value Null=0/write on it")
	var len=parseInt(prompt("enter your number which you see in form"))
	var lens=parseInt(prompt("enter your number which you see in form"))
	var yo=parseInt(prompt("enter your number which you see in form"))
	var so=parseInt(prompt("enter your number which you see in form"))
	var wp=parseInt(prompt("enter your number which you see in form"))
	sum=len+lens+yo+so+wp;
	document.getElementById("final").innerHTML=sum+" "+"decimal";


}
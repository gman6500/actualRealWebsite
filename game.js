$(document).ready(function(){
	//Click to get a code//
	document.getElementById("build1P").innerHTML = numbuild1;
	document.getElementById('cost1').innerHTML=numbuild1Cst
	document.getElementById("build2P").innerHTML = numbuild2;
	document.getElementById('cost2').innerHTML=numbuild2Cst
	document.getElementById("build3P").innerHTML = numbuild3;
	document.getElementById('cost3').innerHTML=numbuild3Cst
	document.getElementById("build4P").innerHTML = numbuild4;
	document.getElementById('cost4').innerHTML=numbuild4Cst
	document.getElementById("build5P").innerHTML = numbuild5;
	document.getElementById('cost5').innerHTML=numbuild5Cst
	document.getElementById("build6P").innerHTML = numbuild6;
	document.getElementById('cost6').innerHTML=numbuild6Cst	
	document.getElementById("build7P").innerHTML = numbuild7;
	document.getElementById('cost7').innerHTML=numbuild7Cst
	document.getElementById("build8P").innerHTML = numbuild8;
	document.getElementById('cost8').innerHTML=numbuild8Cst
	document.getElementById("build9P").innerHTML = numbuild9;
	document.getElementById('cost9').innerHTML=numbuild9Cst
	document.getElementById("build10P").innerHTML = numbuild10;
	document.getElementById('cost10').innerHTML=numbuild10Cst
	document.getElementById("build11P").innerHTML = numbuild11;
	document.getElementById('cost11').innerHTML=numbuild11Cst
	document.getElementById("scoreboxcps").innerHTML = Cps;
$('#clickbox').click(function(){
	console.log(AvCode+CpC)
	AvCode=AvCode+CpC
	TotCode=TotCode+CpC
	TotClicks= TotClicks++
	roundToTenth(Cps)
	document.getElementById("scoreboxAvcode").innerHTML = AvCode;

})
//building code//
$('#build1').click(function(){
	if (AvCode >= numbuild1Cst) {
		if (numbuild1===0) {
			numbuild1++
			Cps= Cps+Num1Cps
			AvCode= AvCode-numbuild1Cst
			numbuild1Cst=numbuild1Cst*1.1
			roundToTenth(numbuild1Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build1P").innerHTML = numbuild1;
			document.getElementById('cost1').innerHTML=numbuild1Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		}else{
		if (AvCode >=numbuild1Cst) {
			numbuild1++
			Cps=Cps+Num1Cps
			AvCode= AvCode-numbuild1Cst
			numbuild1Cst=numbuild1Cst*1.1
			roundToTenth(numbuild1Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build1P").innerHTML = numbuild1;
			document.getElementById('cost1').innerHTML=numbuild1Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		};
	};
}
})
$('#build2').click(function(){
	if (AvCode>=numbuild2Cst) {
		if (numbuild2===0) {
			numbuild2++
			Cps= Cps+Num2Cps
			AvCode= AvCode-numbuild2Cst
			numbuild2Cst=numbuild2Cst*1.1
			roundToTenth(numbuild2Cst)
			console.log(Cps)
			roundToTenth(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build2P").innerHTML = numbuild2;
			document.getElementById('cost2').innerHTML=numbuild2Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		}else{
		if (AvCode>=numbuild2Cst) {
			numbuild2++
			Cps=Cps+Num2Cps
			AvCode=AvCode-numbuild2Cst
			numbuild2Cst=numbuild2Cst*1.1
			roundToTenth(numbuild2Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build2P").innerHTML = numbuild2;
			document.getElementById('cost2').innerHTML=numbuild2Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		};
	};
	}
})
$('#build3').click(function(){
	if (AvCode>=numbuild3Cst) {
		if (numbuild3===0) {
			numbuild3++
			Cps= Cps+Num3Cps
			AvCode= AvCode-numbuild3Cst
			numbuild2Cst=numbuild3Cst*1.1
			roundToTenth(numbuild3Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build3P").innerHTML = numbuild3;
			document.getElementById('cost3').innerHTML=numbuild3Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		}else{
		if (AvCode>=numbuild3Cst) {
			numbuild3++
			Cps=Cps+Num3Cps
			AvCode=AvCode-numbuild3Cst
			numbuild3Cst=numbuild3Cst*1.1
			roundToTenth(numbuild3Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build3P").innerHTML = numbuild3;
			document.getElementById('cost3').innerHTML=numbuild3Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		};
	};
	}
})
$('#build4').click(function(){
	if (AvCode>=numbuild4Cst) {
		if (numbuild4==0) {
			numbuild4++
			Cps= Cps+Num4Cps
			AvCode= AvCode-numbuild4Cst
			numbuild4Cst=numbuild4Cst*1.1
			roundToTenth(numbuild4Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build4P").innerHTML = numbuild4;
			document.getElementById('cost4').innerHTML=numbuild4Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		}else{
		if (AvCode>=numbuild4Cst) {
			numbuild4++
			Cps=Cps+Num4Cps
			AvCode=AvCode-numbuild4Cst
			numbuild4Cst=numbuild4Cst*1.1
			roundToTenth(numbuild4Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build4P").innerHTML = numbuild4;
			document.getElementById('cost4').innerHTML=numbuild4Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		};
	};
	}
})
$('#build5').click(function(){
	if (AvCode>=numbuild5Cst) {
		if (numbuild5===0) {
			numbuild5++
			Cps= Cps+Num5Cps
			AvCode= AvCode-numbuild5Cst
			numbuild5Cst=numbuild5Cst*1.1
			roundToTenth(numbuild5Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build5P").innerHTML = numbuild5;
			document.getElementById('cost5').innerHTML=numbuild5Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		}else{
		if (AvCode>=numbuild5Cst) {
			numbuild5++
			Cps=Cps+Num5Cps
			AvCode=AvCode-numbuild5Cst
			numbuild5Cst=numbuild5Cst*1.1
			roundToTenth(numbuild5Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build5P").innerHTML = numbuild5;
			document.getElementById('cost5').innerHTML=numbuild5Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		};
	};
	}
})
$('#build6').click(function(){
	if (AvCode>=numbuild6Cst) {
		if (numbuild6===0) {
			numbuild6++
			Cps= Cps+Num6Cps
			AvCode= AvCode-numbuild6Cst
			numbuild6Cst=numbuild6Cst*1.1
			roundToTenth(numbuild6Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build6P").innerHTML = numbuild6;
			document.getElementById('cost6').innerHTML=numbuild6Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		}else{
		if (AvCode>=numbuild6Cst) {
			numbuild6++
			Cps=Cps+Num6Cps
			AvCode=AvCode-numbuild6Cst
			numbuild6Cst=numbuild6Cst*1.1
			roundToTenth(numbuild6Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build6P").innerHTML = numbuild6;
			document.getElementById('cost6').innerHTML=numbuild6Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		};
	};
	}
})
$('#build7').click(function(){
	if (AvCode>=numbuild7Cst) {
		if (numbuild7===0) {
			numbuild7++
			Cps= Cps+Num7Cps
			AvCode= AvCode-numbuild7Cst
			numbuild7Cst=numbuild7Cst*1.1
			roundToTenth(numbuild7Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build7P").innerHTML = numbuild7;
			document.getElementById('cost7').innerHTML=numbuild7Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		}else{
		if (AvCode>=numbuild7Cst) {
			numbuild7++
			Cps=Cps+Num7Cps
			AvCode=AvCode-numbuild7Cst
			numbuild7Cst=numbuild7Cst*1.1
			console.log(Cps)
			roundToTenth(Cps)
			roundToTenth(numbuild7Cst)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build7P").innerHTML = numbuild7;
			document.getElementById('cost7').innerHTML=numbuild7Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		};
	};
	}
})
$('#build8').click(function(){
	if (AvCode>=numbuild8Cst) {
		if (numbuild8===0) {
			numbuild8++
			Cps= Cps+Num8Cps
			AvCode= AvCode-numbuild8Cst
			numbuild8Cst=numbuild8Cst*1.1
			roundToTenth(numbuild8Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build8P").innerHTML = numbuild8;
			document.getElementById('cost8').innerHTML=numbuild8Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		}else{
		if (AvCode>=numbuild8Cst) {
			numbuild8++
			Cps=Cps+Num8Cps
			AvCode=AvCode-numbuild8Cst
			numbuild8Cst=numbuild8Cst*1.1
			roundToTenth(numbuild8Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build8P").innerHTML = numbuild8;
			document.getElementById('cost8').innerHTML=numbuild8Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		};
	};
	}
})
$('#build9').click(function(){
	if (AvCode>=numbuild9Cst) {
		if (numbuild9===0) {
			numbuild9++
			Cps= Cps+Num9Cps
			AvCode= AvCode-numbuild9Cst
			numbuild9Cst=numbuild9Cst*1.1
			roundToTenth(numbuild9Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build9P").innerHTML = numbuild9;
			document.getElementById('cost9').innerHTML=numbuild9Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		}else{
		if (AvCode>=numbuild9Cst) {
			numbuild9++
			Cps=Cps+Num9Cps
			AvCode=AvCode-numbuild9Cst
			numbuild9Cst=numbuild9Cst*1.1
			roundToTenth(numbuild9Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build9P").innerHTML = numbuild9;
			document.getElementById('cost9').innerHTML=numbuild9Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		};
	};
	}
})
$('#build10').click(function(){
	if (AvCode>=numbuild10Cst) {
		if (numbuild10===0) {
			numbuild10++
			Cps= Cps+Num10Cps
			AvCode= AvCode-numbuild10Cst
			numbuild10Cst=numbuild10Cst*1.1
			roundToTenth(numbuild10Cst)
			console.log(Cps)
			roundToTenth(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build10P").innerHTML = numbuild10;
			document.getElementById('cost10').innerHTML=numbuild10Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		}else{
		if (AvCode>=numbuild10Cst) {
			numbuild10++
			Cps=Cps+Num10Cps
			AvCode=AvCode-numbuild10Cst
			numbuild10Cst=numbuild10Cst*1.1
			roundToTenth(numbuild10Cst)
			roundToTenth(Cps)
			console.log(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build10P").innerHTML = numbuild10;
			document.getElementById('cost10').innerHTML=numbuild10Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		};
	};
	}
})
$('#build11').click(function(){
	if (AvCode>=numbuild11Cst) {
		if (numbuild11===0) {
			numbuild11++
			Cps= Cps+Num11Cps
			AvCode= AvCode-numbuild11Cst
			numbuild11Cst=numbuild11Cst*1.1
			roundToTenth(numbuild11Cst)
			console.log(Cps)
			roundToTenth(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build11P").innerHTML = numbuild11;
			document.getElementById('cost11').innerHTML=numbuild11Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		}else{
		if (AvCode>=numbuild11Cst) {
			numbuild11++
			Cps=Cps+Num11Cps
			AvCode=AvCode-numbuild11Cst
			numbuild11Cst=numbuild11Cst*1.1
			roundToTenth(numbuild11Cst)
			console.log(Cps)
			roundToTenth(Cps)
			document.getElementById("scoreboxAvcode").innerHTML = AvCode;
			document.getElementById("build11P").innerHTML = numbuild11;
			document.getElementById('cost11').innerHTML=numbuild11Cst
			document.getElementById("scoreboxcps").innerHTML = Cps;
		};
	};
	}
})
$('#Win').click(function(){
if (AvCode>=1000000000000000000000000) {
	Cps=0
	AvCode=0
	roundToTenth(Cps)
};
})
$('#up1').click(function(){
	if(AvCode>=1000){
		Num1Cps =0.4
		AvCode-1000
		console.log("is work")
		roundToTenth(Cps)
		document.getElementById("scoreboxcps").innerHTML = Cps;
	}
})
$('#up2').click(function(){
	if(TotClicks>=100){
		if (AvCode>=10000) {
			AvCode-10000
			CpC++
			console.log("is work")
			roundToTenth(Cps)
			document.getElementById("scoreboxcps").innerHTML = Cps;
		};
	}

})
$('#up3').click(function(){
	if (AvCode>=100000) {
		Num2Cps+20
		AvCode-100000
		console.log("is work")
		roundToTenth(Cps)
		document.getElementById("scoreboxcps").innerHTML = Cps;
	};
})
$('#up4').click(function(){
	if (AvCode>=10000000) {
		CpC*2
		AvCode-10000000
		console.log("is work")
		roundToTenth(Cps)
		document.getElementById("scoreboxcps").innerHTML = Cps;
	};
})
$('#up5').click(function(){
	if (AvCode>=50000000) {
		AvCode-50000000
		Num7Cps*2
		console.log("is work")
		roundToTenth(Cps)
		document.getElementById("scoreboxcps").innerHTML = Cps;
	};
})
$('#up6').click(function(){
	if (AvCode>=10000000000) {
		AvCode-10000000000
		Num8Cps*3
		console.log("is work")
		roundToTenth(Cps)
		document.getElementById("scoreboxcps").innerHTML = Cps;
	};
})
$('#up7').click(function(){
	if (AvCode>=50000000000) {
		AvCode-50000000000
		Num9Cps*4
		console.log("is work")
		roundToTenth(Cps)
		document.getElementById("scoreboxcps").innerHTML = Cps;
	};
})
$('#up8').click(function(){
	if (AvCode>=1000000000000) {
		AvCode-1000000000000
		console.log("is work")
		CpC= numbuild7+numbuild8+Num9Cps+numbuild10+numbuild11+CpC
		roundToTenth(Cps)
		document.getElementById("scoreboxcps").innerHTML = Cps;
	};
})
$('#up9').click(function(){
	if (AvCode>=2500000000000) {
		AvCode-2500000000000
		Num10Cps*10
		console.log("is work")
		roundToTenth(Cps)
		document.getElementById("scoreboxcps").innerHTML = Cps;
	};
})
$('#up10').click(function(){
	if (AvCode>=5000000000000) {
		if (lifeSolved=true) {}
			else{
			AvCode-5000000000000
			lifeSolved=true
			console.log("is work")
			roundToTenth(Cps)
			document.getElementById("scoreboxcps").innerHTML = Cps;
		};
		
	};
})
$('#up11').click(function(){
	if (AvCode>=10000000000000) {
		AvCode-10000000000000
		console.log("is work")
		roundToTenth(Cps)
		document.getElementById("scoreboxcps").innerHTML = Cps;

	};
})
$('#up12').click(function(){
	if (AvCode>=50000000000000) {
		if (lifeSolved=true) {
			AvCode-50000000000000
	numbuild1*2
	numbuild1Cst*2
	numbuild2 *2
	numbuild2Cst*2
	numbuild3*2
	numbuild3Cst*2
	numbuild4*2
	numbuild4Cst*2
	numbuild5*2
	numbuild5Cst*2
	numbuild6 *2
	numbuild6Cst*2
	numbuild7*2
	numbuild7Cst*2
	numbuild8*2
	numbuild8Cst*2
	numbuild9 *2
	numbuild9Cst*2
	numbuild10*2
	numbuild10Cst*2
	numbuild11*2
	numbuild11Cst*2
	AvCode*2
	TotCode*2
	CpC*2
	Cps*2
	TotClicks*2
	Num1Cps*2
	Num2Cps*2
	Num3Cps*2
	Num4Cps*2
	Num5Cps*2
	Num6Cps*2
	Num7Cps*2
	Num8Cps*2
	Num9Cps*2
	Num10Cps*2
	Num11Cps*2
	roundToTenth(Cps)
	console.log("is work")
	document.getElementById("scoreboxcps").innerHTML = Cps;
		};
		
	};
})
$('#up13').click(function(){
	if (AvCode>=100000000000000) {
		AvCode-100000000000000
		CpC+100000
		console.log("is work")
		document.getElementById("scoreboxcps").innerHTML = Cps;
	};
})
$('#up14').click(function(){
	if (AvCode>=5000000000000000000000000000000) {
		AvCode-5000000000000000000000000000000
		numbuild7=0
		numbuild8=0
		Num9Cps=0
		numbuild10=0
		numbuild11=0
		Num7Cps =5000
		Num8Cps =10000
		Num9Cps =50000
		Num10Cps =100000
		Num11Cps =10000000
		roundToTenth(Cps)
		console.log("is work")
		document.getElementById("scoreboxcps").innerHTML = Cps;
	};
})
function roundToTenth(num){
	// RoundedCps= Cps*10
	// RoundedCps= Math.floor(RoundedCps)
	// RoundedCps= RoundedCps/10
	return Math.floor(num*10)/10;
}
//Function to increase the amount gained every second//
function autoIncrease(){
	//Increase the total amount by your Cps//
	
	AvCode= roundToTenth(Cps)+roundToTenth(AvCode);
	AvCode = roundToTenth(AvCode);
	TotCode=TotCode+roundToTenth(Cps);
	console.log("the CPS: "+ Cps +", the AvCode: "+ AvCode);
	document.getElementById("scoreboxAvcode").innerHTML = AvCode;
	document.getElementById("scoreboxcps").innerHTML = Cps;
}
function Timer(){ window.setInterval(function(){autoIncrease()}, 1000);}
Timer()


//end of building code//
})
// vars for # of building and cost of said building
	var numbuild1 =0
	var numbuild1Cst=10
	var numbuild2 =0
	var numbuild2Cst=50
	var numbuild3 =0
	var numbuild3Cst=500
	var numbuild4 =0
	var numbuild4Cst =10000
	var numbuild5 =0
	var numbuild5Cst=100000
	var numbuild6 =0
	var numbuild6Cst =500000
	var numbuild7 =0
	var numbuild7Cst=1000000
	var numbuild8 =0
	var numbuild8Cst=10000000
	var numbuild9 =0
	var numbuild9Cst=1000000000
	var numbuild10 =0
	var numbuild10Cst=100000000000
	var numbuild11 =0
	var numbuild11Cst=100000000000000
	var AvCode=0
	var TotCode=0
	var CpC=1
	var Cps=0
	var TotClicks=0
	var Num1Cps =0.2
	var Num2Cps =1
	var Num3Cps =5
	var Num4Cps =10
	var Num5Cps =50
	var Num6Cps =200
	var Num7Cps =5000
	var Num8Cps =10000
	var Num9Cps =50000
	var Num10Cps =100000
	var Num11Cps =1000000
	var GOOUTSIDE = "YOU DID IT!!! NOW... GO OUTSIDE AND GET A LIFE!!!!!"
	var lifeSolved=false
// To do list:
// 

// Achievements???
// Check for bugs with testers
// make changelog
// make a lot of upgrades
// add achievements
// vvvvinsert morevvvv
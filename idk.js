var starting_bid = 400;

document.getElementById("submit").onclick = function () {

    var degree = document.getElementById("education").value;
	var networth = document.getElementById("networth").value;

	var skills = {
		dombra: document.getElementById("dombra"),
		cook: document.getElementById("chief"),
		easychar: document.getElementById("char"),
		singing: document.getElementById("singer")
	};

	var age = {
		young: document.getElementById("girl"),  
	    middle: document.getElementById("middle"),
	    old: document.getElementById("women")
	};

	var reputation = {
		gossip_parent: document.getElementById("first"),
	    gossip_char: document.getElementById("second"),  
		gossip_person: document.getElementById("third")
	};  

	var form = document.getElementById("form");

	if(degree!="blank"){
		if(degree=="bachelor"){
			starting_bid*=1.5;
		} 
		else if(degree=="college"){
			starting_bid*=1.2;
		} 
		else if(degree=="high_school"){
			starting_bid*=1.05;
		} 
		else if(degree=="middle_school"){
			starting_bid*=0.9;
		}
	}
	if(networth!="blank"){
		if(networth=="upper_class"){
			starting_bid*=2;
		} 
		else if(networth=="middle_class"){
			starting_bid*=1.5;
		} 
		else if(networth=="lower_class"){
			starting_bid*=1.2;
		}
	}
	if(skills.dombra) starting_bid+=100;

	if(skills.cook) starting_bid+=200;

	if(skills.char) starting_bid+=150;

	if(skills.singer) starting_bid+=100;

	if(age.girl) starting_bid*=1.5;

	if(age.middle)starting_bid*=1.2;

	if(age.women) starting_bid*=0.95;

	if(reputation.gossip_parent) starting_bid*=0.85;

	if(reputation.gossip_char) starting_bid*=0.9;

	if(reputation.gossip_person) starting_bid-=200;

	form.style.display = "none";
	
	var h2 = document.createElement("h2");
		h2.style.width = "100%";
		h2.style.height = "160px";
		h2.style.fontSize = "35px";
		h2.style.textAlign = "center";
		h2.style.color = "black";
		h2.innerHTML = "Price is "+Math.round(starting_bid);

	document.getElementById("body").appendChild(h2);
}

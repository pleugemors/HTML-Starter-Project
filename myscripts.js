	const url = new URL(window.location.href);
	var name = url.searchParams.get('character_name');
	var race = url.searchParams.get('Race');
	var sex = url.searchParams.get('sex');
	var realm = url.searchParams.get('realm');
	document.getElementById("name").innerHTML = "The Name of your character is: " + name;
	document.getElementById("race").innerHTML = "The Race of your character is: " + race;
	document.getElementById("realm").innerHTML = "The Realm you will start in is: " + realm;

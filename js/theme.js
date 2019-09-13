function getTheme() {

    // There should only be theme=$theme in here
    
    var decodedCookie = decodeURIComponent(document.cookie);
    var c = decodedCookie.split(';')[0];
    while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
    if (c.indexOf('theme=') == 0) {
        return c.substring(6, c.length);
    }
	// default to light
    return "dark";
}



function changeTheme(theme="") {
    var html = document.getElementsByTagName('html')[0];
	var style = getComputedStyle(document.body);

	// If theme is null, figure it out
	if (theme == "") {
		if (localStorage.getItem('theme') === 'dark') {
			theme = "light";
		} else {
			theme = "dark";
		}
	}

	// Set localstorage
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
	
    // Change button
	if (theme == "dark") {
		document.getElementById("colour-button").innerHTML = "light mode";
	} else if (theme == "light") {
		document.getElementById("colour-button").innerHTML = "dark mode";
	}
}


function check_fast () {

	document.addEventListener('DOMContentLoaded', (event) => {
		((localStorage.getItem('theme') || 'dark') === 'dark') ? changeTheme('dark') : null;
	})

	const currentTheme = localStorage.getElement('theme') ? localStorage.getItem('theme') : null;
	if (currentTheme == "dark") {
		changeTheme("dark");
	} else if (localStorage.getItem('theme') == 'dark') {
		changeTheme("dark");
	}
}

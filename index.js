"use strict";

const root = document.documentElement;
const themeBtn = document.querySelector(".theme-check");

const keepPreferences = function () {
  const themeMode = window.localStorage.getItem("themeMode");

	if (themeMode === "dark") {
		themeBtn.checked = true;
		root.classList.remove("light");
		root.classList.add("dark");
	}

	if (themeMode === "light") {
		themeBtn.checked = false;
		root.classList.remove("dark");
		root.classList.add("light");
	}
}

const switchTheme = function () {
	if (themeBtn.checked === true) {
		root.classList.remove("light");
		root.classList.add("dark");
		window.localStorage.setItem("themeMode", "dark");
	} else {
		root.classList.remove("dark");
		root.classList.add("light");
		window.localStorage.setItem("themeMode", "light");
	}
};

themeBtn.addEventListener("click", switchTheme);
keepPreferences();
'use strict'

const TRUE_STR = 'true'
const FALSE_STR = 'false'

const THEME_STR = 'theme'
const DARK_MODE_STR = 'dark-mode'
const LIGHT_MODE_STR = 'light-mode'

const DISPLAY_NONE_STR = 'none'
const DISPLAY_BLOCK_STR = 'block'

const styleswitcher = document.getElementById('style-switcher')

if (!localStorage.getItem(THEME_STR)) {
	// no theme defined => will set theme as LIGHT (default)
	populateStorage()
}
applyStylesAccordingToTheme()

// populate local storage with values, then apply/set those values
function populateStorage() {
	const body = document.body
	const isDarkModeToggled = body.classList.contains(DARK_MODE_STR)

	if (isDarkModeToggled) {
		localStorage.setItem(THEME_STR, DARK_MODE_STR)
	} else {
		localStorage.setItem(THEME_STR, LIGHT_MODE_STR)
	}
}

function applyStylesAccordingToTheme() {
	const theme = localStorage.getItem(THEME_STR)

	const body = document.body

	const moonSvg = document.getElementById('moon-svg')
	const sunSvg = document.getElementById('sun-svg')

	// const moonSvgDisplay = window.getComputedStyle(moonSvg).getPropertyValue('display')
	// const sunSvgDisplay = window.getComputedStyle(sunSvg).getPropertyValue('display')

	if (theme === LIGHT_MODE_STR) {
		// change icon to MOON
		sunSvg.style.display = DISPLAY_NONE_STR
		moonSvg.style.display = DISPLAY_BLOCK_STR

		// apply light mode styling
		body.classList.remove(DARK_MODE_STR)
	} else {
		// change icon to SUN
		sunSvg.style.display = DISPLAY_BLOCK_STR
		moonSvg.style.display = DISPLAY_NONE_STR

		// apply dark mode styling
		body.classList.add(DARK_MODE_STR)
	}
}

function switchBetweenDarkAndLightThemes() {
	let body = document.body
	body.classList.toggle(DARK_MODE_STR)
	populateStorage()
	applyStylesAccordingToTheme()
}

styleswitcher.onclick = switchBetweenDarkAndLightThemes

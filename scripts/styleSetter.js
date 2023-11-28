'use strict'

const TRUE_STR = 'true'
const FALSE_STR = 'false'

const THEME_STR = 'theme'
const DARK_MODE_STR = 'dark-mode'
const LIGHT_MODE_STR = 'light-mode'

const DISPLAY_NONE_STR = 'none'
const DISPLAY_BLOCK_STR = 'block'

const styleswitcher = document.getElementById('styleswitcher')

if (!localStorage.getItem(THEME_STR)) {
	console.log('no theme defined => populating theme as LIGHT (default)')

	populateStorage()
} else {
	console.log('theme already defined => setting style according to theme')
	setStyles()
}

function switchDarkLightTheme() {
	console.log('switching between light/dark...')

	let body = document.body
	body.classList.toggle(DARK_MODE_STR)
	populateStorage()
}

// populate local storage with values, then apply those values
// default mode is LIGHT MODE
function populateStorage() {
	const body = document.body
	const isDarkModeToggled = body.classList.contains(DARK_MODE_STR)

	if (isDarkModeToggled) {
		console.log('dark mode is toggled => setting style as DARK')
		localStorage.setItem(THEME_STR, DARK_MODE_STR)
	} else {
		console.log('light mode is toggled => setting style as LIGHT')
		localStorage.setItem(THEME_STR, LIGHT_MODE_STR)
	}

	setStyles()
}

// apply style that is set in local storage
function setStyles() {
	const theme = localStorage.getItem(THEME_STR)

	const body = document.body

	const moonSvg = document.getElementById('moon-svg')
	const sunSvg = document.getElementById('sun-svg')

	// const moonSvgDisplay = window.getComputedStyle(moonSvg).getPropertyValue('display')
	// const sunSvgDisplay = window.getComputedStyle(sunSvg).getPropertyValue('display')

	if (theme === LIGHT_MODE_STR) {
		// light mode
		console.log('theme is LIGHT -> hiding sun icon, displaying moon icon')

		sunSvg.style.display = DISPLAY_NONE_STR
		moonSvg.style.display = DISPLAY_BLOCK_STR

		body.classList.remove(DARK_MODE_STR)
	} else {
		// dark mode
		console.log('theme is DARK -> hiding moon icon, displaying sun icon')

		sunSvg.style.display = DISPLAY_BLOCK_STR
		moonSvg.style.display = DISPLAY_NONE_STR

		body.classList.add(DARK_MODE_STR)
	}
}

styleswitcher.onclick = switchDarkLightTheme

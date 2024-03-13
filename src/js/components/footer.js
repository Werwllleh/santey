document.addEventListener("DOMContentLoaded", (e) => {
	let currentDate = new Date();
	const currentYear = document.querySelector('.footer-bottom__left-copyright-year');

	currentYear.innerHTML = `© ${currentDate.getFullYear()}`;
});

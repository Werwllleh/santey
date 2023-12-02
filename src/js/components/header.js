
document.addEventListener("DOMContentLoaded", (e) => {
	const header = document.querySelector('.header');
	const headerLinks = document.querySelectorAll('.header__nav-link');

	if (window.pageYOffset !== 0) {
		header.classList.add('fixed');
	}

	document.addEventListener('scroll', () => {

		let scrollTop = window.scrollY;

		if (scrollTop >= 100) {
			header.classList.add('fixed');
		} else {
			header.classList.remove('fixed');
		}
	});

	headerLinks.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();

			const targetId = this.getAttribute('href');
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop,
					behavior: 'smooth'
				});
			}
		});
	})

});

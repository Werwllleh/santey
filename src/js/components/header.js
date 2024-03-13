
document.addEventListener("DOMContentLoaded", (e) => {
	const header = document.querySelector('.header');
	const headerLinks = document.querySelectorAll('.header__nav-link');

	const mobileMenuBurger = document.querySelector('.header__right-button-burger');
	const mobileMenu = document.querySelector('.header__nav');

	if (window.pageYOffset !== 0) {
		header.classList.add('fixed');
	}

	const primarySection = document.querySelector('.main-section-primary');

	document.addEventListener('scroll', () => {

		let scrollTop = window.scrollY;

		if (scrollTop >= primarySection.clientHeight && window.outerWidth >= 1201) {
			header.classList.add('fixed');
		} else {
			header.classList.remove('fixed');
		}
	});

	headerLinks.forEach((link) => {
		window.addEventListener('resize', () => {
			if (link.closest('.header__nav').classList.contains('active')) {
				mobileMenuBurger.classList.remove('active');
				link.closest('.header__nav').classList.remove('active');
				mobileMenuBurger.children[0].classList.remove('hide');
				mobileMenuBurger.children[1].classList.add('hide');
				document.body.style.overflow = '';
			}
		});

		link.addEventListener('click', function (e) {
			e.preventDefault();

			const targetId = this.getAttribute('href');
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				if (link.closest('.header__nav').classList.contains('active')) {
					mobileMenuBurger.classList.remove('active');
					link.closest('.header__nav').classList.remove('active');
					mobileMenuBurger.children[0].classList.remove('hide');
					mobileMenuBurger.children[1].classList.add('hide');
					document.body.style.overflow = '';
				}
				window.scrollTo({
					top: targetElement.offsetTop,
					behavior: 'smooth'
				});
			}
		});
	})

	if (window.outerWidth <= 1200) {
		mobileMenu.classList.remove('active');
		document.body.style.overflow = '';
	}


	mobileMenuBurger.addEventListener('click', () => {

		mobileMenuBurger.classList.toggle('active');

		if (mobileMenuBurger.classList.contains('active')) {
			mobileMenuBurger.children[0].classList.add('hide');
			mobileMenuBurger.children[1].classList.remove('hide');

			mobileMenu.classList.add('active');
			document.body.style.overflow = 'hidden';

		} else {
			mobileMenuBurger.children[0].classList.remove('hide');
			mobileMenuBurger.children[1].classList.add('hide');

			mobileMenu.classList.remove('active');
			document.body.style.overflow = '';

		}

	})

});

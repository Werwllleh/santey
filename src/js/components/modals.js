// Open modal
const modalLinks = document.querySelectorAll('[data-modal]')
if (modalLinks.length) {
	modalLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			const modalId = `#modal-${link.dataset.modal}`

			e.preventDefault()

			if (link.dataset.modal === 'phone' && window.innerWidth < 564) {
				openModal(modalId)
			} else if (link.dataset.modal !== 'phone') {
				openModal(modalId)
			} else {
				return false;
			}


			const isModalMobileOnly = link.dataset.modalMobile

			if (isModalMobileOnly && window.innerWidth > 1024) {
				return;
			}





			openModal(modalId)

		})
	})
}

// Open modal
export const openModal = (modalId) => {
	const modal = document.querySelector(modalId)
	const otherShownModal = document.querySelector('.modal--shown')

	if (!modal) {
		console.warn(`Modal ${modalId} does not exist!`)
		return
	}

	if (otherShownModal) {
		closeModal(otherShownModal)
	} else {
		document.body.style.overflow = 'hidden'
		showBackdrop()
	}

	modal.classList.add('modal--show')
	setTimeout(() => {
		modal.classList.add('modal--shown')
	})
}

// Close modal
function closeModal(isModalFromModal = false) {
	const modal = document.querySelector('.modal--shown')
	const mobileMenu = document.querySelector('.header__nav')
	if (!modal) return

	modal.classList.remove('modal--shown')
	if (!isModalFromModal) hideBackdrop()
	setTimeout(() => {
		modal.classList.remove('modal--show')
		if (!isModalFromModal && !mobileMenu.classList.contains('active')) {
			document.body.style.overflow = 'auto'
		}
	}, 350, modal)
}

// Close on Close btn click
const closeButtons = document.querySelectorAll('.js-modal-close')
if (closeButtons.length) {
	closeButtons.forEach((button) => {
		button.addEventListener('click', () => closeModal())
	})
}


// Close on Escape
document.body.addEventListener('keyup', (e) => {
	if (e.key === 'Escape') {
		closeModal()
	}
}, false)

// Show backdrop
const showBackdrop = () => {
	let backdrop = document.querySelector('.modal-backdrop')
	if (!backdrop) {
		backdrop = document.createElement('div')
		document.body.appendChild(backdrop)
		backdrop.addEventListener('click', () => closeModal())
		backdrop.classList.add('modal-backdrop')
		setTimeout(() => {
			backdrop.classList.add('modal-backdrop--show')
		})
	}
}

// Hide backdrop
const hideBackdrop = () => {
	const backdrop = document.querySelector('.modal-backdrop')
	if (backdrop) {
		backdrop.classList.remove('modal-backdrop--show')
		setTimeout(() => {
			backdrop.remove()
		}, 350)
	}
}

// Modal Filter
// const filterFormList = document.querySelectorAll('.modal-filter__form')
// if (filterFormList.length) {
// 	filterFormList.forEach((form) => {
// 		const selectList = form.querySelectorAll('select')
// 		form.addEventListener('reset', function () {
// 			form.classList.add('reset')
// 			selectList.forEach((select) => {
// 				const defaultValue = select.querySelector('option').value
// 				select.slim.setSelected(defaultValue)
// 			})
// 			form.classList.remove('modal-filter__form--touched')
// 			setTimeout(() => {
// 				form.classList.remove('reset')
// 			}, 100)
// 		})
//
// 		form.addEventListener('change', () => form.classList.add('modal-filter__form--touched'))
// 	})
// }




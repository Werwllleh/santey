import IMask from "imask";


const formList = document.querySelectorAll('form')

if (formList.length) {
	formList.forEach((form) => {
		const groupList = form.querySelectorAll('.form-group')
		groupList.forEach((group) => {
			const input = group.querySelector('.form-group__field')

			if (input.name === 'name') {
				input.addEventListener('keyup', () => {
					// const isValid = validator.isLength(input.value, {min: 3})
					// validateGroup(group, isValid)
				})
			} else if (input.name === 'phone') {
				input.addEventListener('keyup', () => {
					// const isValid = validator.isMobilePhone('+' + input.value.replace(/\D+/g, ''), 'ru-RU')
					// validateGroup(group, isValid)
				})
			} else if (input.name === 'email') {
				input.addEventListener('keyup', () => {
					// const isValid = validator.isEmail(input.value)
					// validateGroup(group, isValid)
				})
			}
		})
	})
}

const submittedForms = document.querySelectorAll('.form__field-submit')
if(submittedForms.length) {
	submittedForms.forEach((form)=>{
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			// Отправляем форму
			// ...
			// openModal('#modal-success')
		})
	})
}

// Phone mask
const phoneInputsList = document.querySelectorAll('input[type="tel"]')
if (phoneInputsList.length) {
	phoneInputsList.forEach((phoneInput) => {
		IMask(phoneInput, {
			mask: '+{7} (000) 000-00-00'
		})
	})
}

const formInputs = document.querySelectorAll('.form__field-input');

formInputs.forEach((input) => {
	input.addEventListener('input', function () {
		// Проверяем, не пустой ли input
		if (input.value.trim() !== '') {
			// Если не пустой, добавляем класс
			input.classList.add('notEmpty');
		} else {
			// Если пустой, удаляем класс
			input.classList.remove('notEmpty');
		}
	});
})

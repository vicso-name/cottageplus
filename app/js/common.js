$(function() {

	kievDecor();
	headerScrolll();
	menuOpen();
	projectCounter();
	mainContact();

	function headerScrolll(){
		window.addEventListener('scroll', function() {
			var header = document.querySelector('.header');
			if (window.scrollY > 0) {
				header.classList.add('active');
			} else {
				header.classList.remove('active');
			}
		});
	}

	function kievDecor(){

		const kievDecorElement = document.querySelector('.kiev-decor');
		const parnuDecorElement = document.querySelector('.parnu-decor');
		const augustinDecorElement = document.querySelector('.augustin-decor');

		function addActiveClass(element) {
			element.classList.add('active');
		}

		function removeActiveClass(element) {
			element.classList.remove('active');
		}

		function handleScroll() {
			const kievDecorPosition = kievDecorElement.getBoundingClientRect().top;
			const parnuDecorPosition = parnuDecorElement.getBoundingClientRect().top;
			const augustinDecorPosition = augustinDecorElement.getBoundingClientRect().top;

			if (kievDecorPosition < window.innerHeight && kievDecorPosition > 0) {
			addActiveClass(kievDecorElement);
			} else {
			removeActiveClass(kievDecorElement);
			}

			if (parnuDecorPosition < window.innerHeight && parnuDecorPosition > 0) {
			addActiveClass(parnuDecorElement);
			} else {
			removeActiveClass(parnuDecorElement);
			}

			if (augustinDecorPosition < window.innerHeight && augustinDecorPosition > 0) {
			addActiveClass(augustinDecorElement);
			} else {
			removeActiveClass(augustinDecorElement);
			}
		}

 		window.addEventListener('scroll', handleScroll);
	}

	function menuOpen(){
		const mobileMenuBtn = document.getElementById('mobile-menu');
		const siderMenu = document.querySelector('.sider-menu');
		const closeMenuBtn = document.getElementById('close-menu');

		function openMenu(event) {
			event.preventDefault();
			siderMenu.classList.add('active');
		}

		function closeMenu() {
			siderMenu.classList.remove('active');
		}

		mobileMenuBtn.addEventListener('click', openMenu);
		closeMenuBtn.addEventListener('click', closeMenu);
	}

	function projectCounter(){

			// Function to start the counter animation
			function startCounterAnimation(targetElement, targetNumber) {
				let currentNumber = 0;
				const interval = setInterval(() => {
					if (currentNumber >= targetNumber) {
						clearInterval(interval);
					} else {
						currentNumber++;
						targetElement.textContent = currentNumber;
					}
				}, 10); // Adjust the interval duration as per your preference
			}

			// Function to handle the intersection observer callback
			function handleIntersection(entries, observer) {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const targetElement = entry.target.querySelector('h3 span');
						const targetNumber = parseInt(targetElement.dataset.targetNumber);
						startCounterAnimation(targetElement, targetNumber);
						observer.unobserve(entry.target);
					}
				});
			}

			// Create an intersection observer instance
			const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

			// Select the elements to observe
			const counterElements = document.querySelectorAll('.cottage-finished__content-items li');

			// Set the target numbers for each element
			const targetNumbers = [80, 250, 120];

			// Observe each element and set the target number
			counterElements.forEach((element, index) => {
				const targetElement = element.querySelector('h3 span');
				targetElement.dataset.targetNumber = targetNumbers[index];
				observer.observe(element);
			});

	}

	function mainContact(){
		const mainForm = document.getElementById('main-form');
		let isFormVisible = false;

		function handleScroll() {
		const formPosition = mainForm.getBoundingClientRect().top;
		if (formPosition < window.innerHeight && formPosition > 0 && !isFormVisible) {
			mainForm.classList.add('active');
			isFormVisible = true;
		}
		}

		window.addEventListener('scroll', handleScroll);
	}

});

$(document).ready(function () {
	// Get project ID from URL
	const urlParams = new URLSearchParams(window.location.search);
	const projectId = parseInt(urlParams.get('id'));

	// Portfolio data (same as in works.js)
	const portfolioData = [
		{
			id: 1,
			title: 'Rese Corner Website',
			category: 'Website',
			image: 'sources/img/work/1.png',
			description: [
				'A PHP-based corporate website for a various snack company, delivering a professional online presence with dynamic content management capabilities.',
				'My Contribution :',
				'- Served as the Project Manager, facilitating communication between backend and frontend teams.',
				'- Developed backend systems to ensure smooth website functionality.',
				'- Assisted as a supporting frontend developer to enhance user experience and design.',
			]
		},
		{
			id: 2,
			title: 'Saga Sips',
			category: 'Innovation',
			image: 'sources/img/work/2.png',
			description: [
				'A student entrepreneurship venture specializing in coffee and Sonkit orange juice, implementing comprehensive business strategies from marketing to financial management.',
				'My Contribution :',
				'- Co-founded Saga Sips, responsible for creating and developing product recipes.',
				'- Managed financial transactions, ensuring efficient cash flow management.',
				'- Provided innovative ideas for product development and sales strategies.',
				'- Acted as the primary problem solver to maintain high customer satisfaction.',
			]
		},
		{
			id: 3,
			title: 'Rese Corner Apps',
			category: 'Mobile Application',
			image: 'sources/img/work/3.png',
			description: [
				'A Flutter-based Android application for a rese corner business, offering a user-friendly platform for browsing and ordering various snacks.',
			]
		},
		{
			id: 4,
			title: 'SMEs Odoo ERP',
			category: 'Innovation',
			image: 'sources/img/work/4.png',
			description: [
				'An integrated Odoo ERP system implementation for Rendy Audio Shop, featuring customized modules for inventory, purchasing, and website management to streamline business operations.',
			]
		},
		{
			id: 5,
			title: 'Catering Timeh Website',
			category: 'Website',
			image: 'sources/img/work/5.png',
			description: [
				'A PHP-based furniture e-commerce platform for food catering, designed to enhance brand awareness and facilitate seamless transactions.',
			]
		},
		{
			id: 6,
			title: 'Catering Timeh Dashboard',
			category: 'Website',
			image: 'sources/img/work/6.png',
			description: [
				"A comprehensive PHP admin dashboard for managing Catering Timeh's e-commerce platform, enabling complete control over content, products, and transactions.",
			]
		},
		{
			id: 7,
			title: 'Manufacturing Warehouse',
			category: 'Warehouse',
			image: 'sources/img/work/7.png',
			description: [
				'A detailed warehouse optimization project focusing on layout design, location strategy, and efficient product flow management for a manufacturing goods facility.',
			]
		},
	];

	// Function to load project details
	function loadProjectDetails(projectId) {
		const project = portfolioData.find((p) => p.id === projectId);
	
		if (project) {
			// Update carousel content
			$('.carousel-item').removeClass('active');
			const carouselItem = $(`.carousel-item--${projectId}`);
			carouselItem.addClass('active');
	
			// Update project details
			carouselItem.find('.carousel-item__title').text(project.title);
			carouselItem.find('.carousel-item__subtitle').text(project.category);
			
			// Update description as a list without bullets
			const descriptionList = project.description.map(item => `<li>${item}</li>`).join('');
			carouselItem.find('.carousel-item__description').html(`<ul style="list-style-type: none; padding: 0;">${descriptionList}</ul>`);
			
			carouselItem
				.find('.carousel-item__image')
				.css('background-image', `url(${project.image})`);
	
			// Add class to body to prevent scrolling
			$('body').addClass('carousel-active');
		}
	}	

	// Load project details if ID is present
	if (projectId) {
		loadProjectDetails(projectId);
	}

	// Navigation arrows functionality
	$('#moveRight').on('click', function () {
		let currentId = parseInt(
			$('.carousel-item.active')
				.attr('class')
				.match(/carousel-item--(\d+)/)[1]
		);
		let nextId = (currentId % portfolioData.length) + 1;
		loadProjectDetails(nextId);
	});

	$('#moveLeft').on('click', function () {
		let currentId = parseInt(
			$('.carousel-item.active')
				.attr('class')
				.match(/carousel-item--(\d+)/)[1]
		);
		let prevId = currentId === 1 ? portfolioData.length : currentId - 1;
		loadProjectDetails(prevId);
	});

	// Function to close carousel and return to portfolio
	function closeCarousel() {
		$('body').removeClass('carousel-active');
		window.location.href = 'index.html#works';
	}

	// Close button click handler
	$('.carousel__close').click(function () {
		closeCarousel();
	});

	// Close when clicking outside carousel
	$(document).click(function (event) {
		if (
			!$(event.target).closest(
				'.carousel-item, .carousel__nav, .carousel__close'
			).length
		) {
			closeCarousel();
		}
	});

	// Prevent closing when clicking inside carousel
	$('.carousel').click(function (event) {
		event.stopPropagation();
	});

	// Add keyboard support for closing (Esc key)
	$(document).keydown(function (e) {
		if (e.key === 'Escape') {
			closeCarousel();
		}
	});
});
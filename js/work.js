$(document).ready(function () {
	// Portfolio data with detailed information
	const portfolioData = [
		{
			id: 1,
			title: 'Rese Corner Website',
			category: 'Website',
			image: 'sources/img/work/1.png',
			link: 'https://resecorner.com/',
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
			link: 'https://www.instagram.com/saga.sips/',
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
			link: 'https://drive.google.com/drive/folders/1B1xbeE_TjF0xbPIbCj9IEWromIYNABJR',
			description:
				'A Flutter-based Android application for a rese corner business, offering a user-friendly platform for browsing and ordering various snacks.',
		},
		{
			id: 4,
			title: 'SMEs Odoo ERP',
			category: 'Innovation',
			image: 'sources/img/work/4.png',
			description:
				'An integrated Odoo ERP system implementation for Rendy Audio Shop, featuring customized modules for inventory, purchasing, and website management to streamline business operations.',
		},
		{
			id: 5,
			title: 'Catering Timeh Website',
			category: 'Website',
			image: 'sources/img/work/5.png',
			description:
				'A PHP-based furniture e-commerce platform for food catering, designed to enhance brand awareness and facilitate seamless transactions.',
		},
		{
			id: 6,
			title: 'Catering Timeh Dashboard',
			category: 'Website',
			image: 'sources/img/work/6.png',
			description:
				"A comprehensive PHP admin dashboard for managing Catering Timeh's e-commerce platform, enabling complete control over content, products, and transactions.",
		},
		{
			id: 7,
			title: 'Manufacturing Warehouse',
			category: 'Warehouse',
			image: 'sources/img/work/7.png',
			description:
				'A detailed warehouse optimization project focusing on layout design, location strategy, and efficient product flow management for a manufacturing goods facility.',
		},
	];

	// Function to create portfolio items
	function createPortfolioItem(item) {
		const linkSection = item.link ? `
			<a href="${item.link}" target="_blank" class="portofolio-title-link">
				<i class="fa-solid fa-up-right-from-square"></i>
			</a>` : '';
	
		return `
			<div class="portofolio-item" data-category="${item.category}" data-id="${item.id}">
				<img src="${item.image}" alt="${item.title}">
				<div class="portofolio-overlay">
					<div class="portofolio-title-container">
						<h3 class="portofolio-title">${item.title}</h3>
						${linkSection}
					</div>
					<p class="portofolio-category">${item.category}</p>
					<div class="portofolio-links">
						<a href="work-detail.html?id=${item.id}" class="portofolio-link">
							<i class="fas fa-eye"></i> Preview
						</a>
					</div>
				</div>
			</div>
		`;
	}	

	// Initialize portfolio
	function initPortfolio() {
		const portfolioGrid = $('.portofolio-grid');
		portfolioData.forEach((item) => {
			portfolioGrid.append(createPortfolioItem(item));
		});
	}

	// Initialize
	initPortfolio();
});
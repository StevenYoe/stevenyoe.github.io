$(document).ready(function () {
	// Portfolio data with detailed information
	const portfolioData = [
		{
			id: 1,
			title: 'Catering Timeh Website',
			category: 'Website',
			image: 'sources/img/work/1.png',
			description:
				'A PHP-based furniture e-commerce platform for food catering, designed to enhance brand awareness and facilitate seamless transactions.',
		},
		{
			id: 2,
			title: 'Catering Timeh Dashboard',
			category: 'Website',
			image: 'sources/img/work/2.png',
			description:
				"A comprehensive PHP admin dashboard for managing Catering Timeh's e-commerce platform, enabling complete control over content, products, and transactions.",
		},
		{
			id: 3,
			title: 'SMEs Odoo ERP',
			category: 'Innovation',
			image: 'sources/img/work/3.png',
			description:
				'An integrated Odoo ERP system implementation for Rendy Audio Shop, featuring customized modules for inventory, purchasing, and website management to streamline business operations.',
		},
		{
			id: 4,
			title: 'Rese Corner Website',
			category: 'Website',
			image: 'sources/img/work/5.png',
			description:
				'A PHP-based corporate website for a various snack company, delivering a professional online presence with dynamic content management capabilities.',
		},
		{
			id: 5,
			title: 'Rese Corner Apps',
			category: 'Mobile Application',
			image: 'sources/img/work/6.png',
			description:
				'A Flutter-based Android application for a rese corner business, offering a user-friendly platform for browsing and ordering various snacks.',
		},
		{
			id: 6,
			title: 'Saga Sips',
			category: 'Innovation',
			image: 'sources/img/work/7.png',
			description:
				'A student entrepreneurship venture specializing in coffee and Sonkit orange juice, implementing comprehensive business strategies from marketing to financial management.',
		},
		{
			id: 7,
			title: 'Manufacturing Warehouse',
			category: 'Warehouse',
			image: 'sources/img/work/4.png',
			description:
				'A detailed warehouse optimization project focusing on layout design, location strategy, and efficient product flow management for a manufacturing goods facility.',
		},
	];

	// Function to create portfolio items
	function createPortfolioItem(item) {
		return `
            <div class="portofolio-item" data-category="${item.category}" data-id="${item.id}">
                <img src="${item.image}" alt="${item.title}">
                <div class="portofolio-overlay">
                    <h3 class="portofolio-title">${item.title}</h3>
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
$(document).ready(function() {
    // Work Experience data
    const workexperienceData = [
        {
            year: "June - July 2024",
            title: "Web Development Internship",
            company: "PT Samanasoft Inovasi Persada – Tangerang Regency, Indonesia",
            description: [
                "Developing features and information to existing website and programs", 
                "Contributing to make a tutorial video.",
            ]
        },        
    ];

    // Education data
    const educationData = [
        {
            year: "2018 - 2021",
            title: "Computer Network Engineering Major",
            institution: "Bonavita Senior High School",
            description: [
                "Member of the Religious Division of the Student Organization (OSIS-2018/2019)",
                "Member of the State Defense Division of the Student Organization (OSIS-2019/2020)",
            ]
        },
        {
            year: "2022 - Present",
            title: "E-Commerce",
            institution: "Multimedia Nusantara Polytechnic",
            description: [
                "Entered the polytechnic with a scholarship",
                "E-Commerce Logistics Major",
                "Current GPA: 3.91 out of 4.0",
            ]
        }
    ];

    // Organization Experience data
    const organizationexperienceData = [
        {
            year: " ",
            title: "Organization at Multimedia Nusantara Polytechnic",
            description: [
                "Treasurer/Finance of the E-Commerce Logistics Student Association (January 2023 - June 2024)",
                "Event Division in Anagata 2023 (new student orientation event)",
                "Head of Fresh Money Division in Ashandya 2023 (Cultural events)",
                "Treasurer/Finance of ECLIVAL 2024 (festival organized by the E-Commerce Logistics Student Association)",
                "Secretary and Treasurer in Anagata 2024 (new student orientation event)",
                "Treasurer/Finance and Head of Multimedia Division of Inaugurasi 2024 (senate session welcoming new students)",
                "Equipment & Logistics Division in Outbound WMK FB UMN 2024 (Digital entrepreneurship event)",
                "Participated in online and offline courses, seminars, and training sessions, including: DQ Lab, Disaster Preparedness and Post-Disaster Resilience, Samsung Innovation Campus Batch 5 (2023/2024)",
            ]
        },        
    ];

    // Function to create timeline items
    function createTimelineItem(data, type) {
        const descriptionList = data.description
            .map(item => `<li>${item}</li>`)
            .join('');

            let subtitle = '';
            if (type === 'workexperience') {
                subtitle = data.company;
            } else if (type === 'education') {
                subtitle = data.institution;
            } else if (type === 'organizationexperience') {
                subtitle = data.company;
            }
            
        return `
            <div class="timeline-item">
                <div class="timeline-header">    
                    <h3 class="timeline-title">${data.title}</h3>
                    <div class="timeline-date">${data.year}</div>
                </div>
                ${subtitle ? `<p class="timeline-subtitle">${subtitle}</p>` : ''}
                <div class="timeline-description">
                    <ul class="description-list">
                        ${descriptionList}
                    </ul>
                </div>
            </div>
        `;
    }

    // Populate experience section
    function initworkExperience() {
        const experienceContainer = $('#workexperience .timeline-container');
        workexperienceData.forEach(item => {
            experienceContainer.append(createTimelineItem(item, 'workexperience'));
        });
    }

    // Populate education section
    function initEducation() {
        const educationContainer = $('#education .timeline-container');
        educationData.forEach(item => {
            educationContainer.append(createTimelineItem(item, 'education'));
        });
    }

    // Populate experience section
    function initorganizationExperience() {
        const experienceContainer = $('#organizationexperience .timeline-container');
        organizationexperienceData.forEach(item => {
            experienceContainer.append(createTimelineItem(item, 'organizationexperience'));
        });
    }

    // Initialize both sections
    initworkExperience();
    initorganizationExperience();
    initEducation();

    // Enhanced scroll animation
    $('.timeline-item').each(function(i) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateX(20px)',
            'transition': 'all 0.8s ease'
        });
        
        const element = this;
        
        $(window).scroll(function() {
            const bottomOfWindow = $(window).scrollTop() + $(window).height();
            const bottomOfObject = $(element).offset().top + $(element).outerHeight() * 0.3;
            
            if (bottomOfWindow > bottomOfObject) {
                $(element).css({
                    'opacity': '1',
                    'transform': 'translateX(0)'
                });
            }
        });
    });
});
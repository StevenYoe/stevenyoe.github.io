$(document).ready(function() {
    // Skills data
    const skillsData = [
        {
            name: "Python",
            icon: "sources/img/logo/python.png",
            class: "python"
        },
        {
            name: "PHP",
            icon: "sources/img/logo/php.png",
            class: "php"
        },
        {
            name: "SQL",
            icon: "sources/img/logo/sql.png",
            class: "sql"
        },
        {
            name: "HTML",
            icon: "sources/img/logo/html.png",
            class: "html"
        },
        {
            name: "JavaScript",
            icon: "sources/img/logo/java-script.png",
            class: "javascript"
        },
        {
            name: "CSS",
            icon: "sources/img/logo/css.png",
            class: "css"
        },
        {
            name: "C++",
            icon: "sources/img/logo/c++.png",
            class: "c++"
        },
        {
            name: "C",
            icon: "sources/img/logo/c.png",
            class: "c"
        },
        {
            name: "C#",
            icon: "sources/img/logo/cs.png",
            class: "c#"
        },
        {
            name: "React JS",
            icon: "sources/img/logo/reactjs.png",
            class: "js"
        },   
        {
            name: "Visual Studio Code",
            icon: "sources/img/logo/visual-studio-code.png",
            class: "vscode"
        },
        {
            name: "Visual Studio",
            icon: "sources/img/logo/visual-studio.png",
            class: "vs"
        },
        {
            name: "MongoDB",
            icon: "sources/img/logo/mongodb.png",
            class: "mongodb"
        },
        {
            name: "RStudio",
            icon: "sources/img/logo/r.png",
            class: "rstudio"
        },
        {
            name: "Odoo",
            icon: "sources/img/logo/odoo.png",
            class: "odoo"
        },
        {
            name: "Microsoft Office Excel",
            icon: "sources/img/logo/excel.png",
            class: "excel"
        },  
        {
            name: "DBeaver",
            icon: "sources/img/logo/dbeaver.png",
            class: "dbeaver"
        },
        {
            name: "Laravel",
            icon: "sources/img/logo/laravel.png",
            class: "laravel"
        },   
        {
            name: "Vmix",
            icon: "sources/img/logo/vmix.png",
            class: "vmix"
        },
        {
            name: "OBS Studio",
            icon: "sources/img/logo/obs.png",
            class: "obs"
        },
        {
            name: "Flutter",
            icon: "sources/img/logo/flutter.png",
            class: "flutter"
        },
        {
            name: "DQLab",
            icon: "sources/img/logo/dqlab.png",
            class: "dqlab"
        },
        {
            name: "SketchUp",
            icon: "sources/img/logo/sketch-up.png",
            class: "sktechup"
        },  
        {
            name: "Flexsim",
            icon: "sources/img/logo/flexsim.png",
            class: "flexsim"
        },
    ];

    // Function to create skill items
    function createSkillItem(skill) {
        return `
            <div class="skill-item">
                <img src="${skill.icon}" alt="${skill.name}" class="skill-icon ${skill.class}">
                <div class="skill-name">${skill.name}</div>
            </div>
        `;
    }

    // Initialize skills
    function initSkills() {
        const skillsGrid = $('.skills-grid');
        skillsData.forEach(skill => {
            skillsGrid.append(createSkillItem(skill));
        });
    }

    // Initialize
    initSkills();
});
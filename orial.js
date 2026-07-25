const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

const counters = document.querySelectorAll("[data-target]");

counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");

    let count = 0;

    const updateCounter = () => {

        const increment = target / 50;

        if(count < target){

            count += increment;

            counter.innerText = Math.ceil(count);

            setTimeout(updateCounter, 30);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
        document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1200);

});



const filterBtns =
document.querySelectorAll(".filter-btn");

const projects =
document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        const filter =
        btn.dataset.filter;

        projects.forEach(project => {

            if(
                filter === "all" ||
                project.dataset.category === filter
            ){
                project.style.display = "block";
            }else{
                project.style.display = "none";
            }

        });

    });

});


const header =
document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


const menuBtn =
document.querySelector(".menu-btn");

const navMenu =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show-menu");

});

const navItems =
document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navMenu.classList.remove("show-menu");

    });

});


console.log(document.querySelector("#services"));


// إظهار الأقسام (about, services, portfolio, testimonials, contact) عند التمرير - خصوصًا للجوال
const revealElements = document.querySelectorAll(".hidden");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

        }

    });

}, { threshold: 0.15 });

revealElements.forEach(section => revealObserver.observe(section));


// ترجمة محتوى الموقع (عربي / إنجليزي / فرنسي)
const translations = {

    nav_home:        { ar: "الرئيسية",        en: "Home",              fr: "Accueil" },
    nav_about:        { ar: "من نحن",           en: "About Us",          fr: "À propos" },
    nav_services:     { ar: "الخدمات",          en: "Services",         fr: "Services" },
    nav_portfolio:    { ar: "الأعمال",          en: "Portfolio",        fr: "Portfolio" },
    nav_testimonials: { ar: "آراء العملاء",     en: "Testimonials",     fr: "Témoignages" },
    nav_contact:      { ar: "تواصل معنا",       en: "Contact Us",       fr: "Contactez-nous" },

    hero_title_1: { ar: "نصنع المستقبل", en: "We Build The",        fr: "Nous construisons" },
    hero_title_2: { ar: "الرقمي",        en: "Digital Future",      fr: "l'avenir numérique" },
    hero_desc: {
        ar: "حلول متكاملة للشركات والأفراد تجمع بين الإبداع والتقنية.",
        en: "Comprehensive solutions for companies and individuals that combine creativity and technology.",
        fr: "Des solutions complètes pour les entreprises et les particuliers, alliant créativité et technologie."
    },
    hero_btn_services: { ar: "خدماتنا", en: "Our Services", fr: "Nos services" },
    hero_btn_portfolio: { ar: "أعمالنا", en: "Our Work", fr: "Nos réalisations" },

    feature_title: { ar: "إبداع", en: "Creativity", fr: "Créativité" },
    feature_desc: {
        ar: "حلول مبتكرة لكل مشروع.",
        en: "Innovative solutions for every project.",
        fr: "Des solutions innovantes pour chaque projet."
    },

    stat_projects:    { ar: "مشروع مكتمل",  en: "Completed Projects",       fr: "Projets terminés" },
    stat_clients:     { ar: "عميل سعيد",    en: "Happy Clients",            fr: "Clients satisfaits" },
    stat_experience:  { ar: "سنوات خبرة",   en: "Years of Experience",      fr: "Années d'expérience" },
    stat_support:     { ar: "دعم مستمر",    en: "Continuous Support",       fr: "Support continu" },

    whyus_title: { ar: "لماذا نحن؟", en: "Why Us?", fr: "Pourquoi nous ?" },

    about_label: { ar: "من نحن", en: "About Us", fr: "À propos" },
    about_title: {
        ar: "نبني حلولاً رقمية تصنع الفرق",
        en: "We Build Digital Solutions That Make a Difference",
        fr: "Nous créons des solutions numériques qui font la différence"
    },
    about_p1: {
        ar: "الأسطورة شركة متخصصة في تقديم حلول رقمية متكاملة، تجمع بين الإبداع والتقنية لمساعدة الشركات والأفراد على تحقيق أهدافهم بكفاءة واحترافية.",
        en: "Al-Ustora is a company specialized in providing comprehensive digital solutions, combining creativity and technology to help companies and individuals achieve their goals efficiently and professionally.",
        fr: "Al-Ustora est une entreprise spécialisée dans la fourniture de solutions numériques complètes, alliant créativité et technologie pour aider les entreprises et les particuliers à atteindre leurs objectifs avec efficacité et professionnalisme."
    },
    about_p2: {
        ar: "نؤمن أن النجاح يبدأ بفكرة قوية وتنفيذ احترافي، لذلك نركز على الجودة والابتكار في كل مشروع.",
        en: "We believe that success starts with a strong idea and professional execution, so we focus on quality and innovation in every project.",
        fr: "Nous croyons que le succès commence par une idée forte et une exécution professionnelle, c'est pourquoi nous nous concentrons sur la qualité et l'innovation dans chaque projet."
    },
    about_btn: { ar: "اعرف المزيد", en: "Learn More", fr: "En savoir plus" },
    about_feat1: { ar: "✓ جودة عالية",  en: "✓ High Quality",        fr: "✓ Haute qualité" },
    about_feat2: { ar: "✓ فريق محترف", en: "✓ Professional Team",   fr: "✓ Équipe professionnelle" },
    about_feat3: { ar: "✓ دعم مستمر",  en: "✓ Continuous Support",  fr: "✓ Support continu" },

    services_title: { ar: "خدماتنا", en: "Services", fr: "Nos services" },
    services_desc: {
        ar: "نقدم حلولاً متكاملة تلبي احتياجات الأفراد والشركات.",
        en: "We provide comprehensive solutions that meet the needs of individuals and companies.",
        fr: "Nous proposons des solutions complètes répondant aux besoins des particuliers et des entreprises."
    },
    service_card_title: { ar: "تصميم المواقع", en: "Web Design", fr: "Conception de sites web" },
    service_card_desc: {
        ar: "مواقع احترافية سريعة ومتجاوبة مع جميع الأجهزة.",
        en: "Professional, fast websites responsive on all devices.",
        fr: "Des sites web professionnels, rapides et adaptés à tous les appareils."
    },

    portfolio_title: { ar: "أعمالنا", en: "Our Work", fr: "Nos réalisations" },
    portfolio_desc: {
        ar: "نماذج من المشاريع التي قمنا بتنفيذها.",
        en: "Samples of the projects we have completed.",
        fr: "Exemples de projets que nous avons réalisés."
    },
    filter_all:      { ar: "الكل",   en: "All",       fr: "Tous" },
    filter_website:  { ar: "مواقع",  en: "Websites",  fr: "Sites web" },
    filter_store:    { ar: "متاجر",  en: "Stores",    fr: "Boutiques" },
    filter_branding: { ar: "هويات",  en: "Branding",  fr: "Identités visuelles" },

    project_category: { ar: "تصميم مواقع", en: "Web Design", fr: "Conception de sites web" },
    project_title:    { ar: "موقع شركة",   en: "Company Website", fr: "Site d'entreprise" },
    project_desc: {
        ar: "تصميم وتطوير موقع احترافي.",
        en: "Design and development of a professional website.",
        fr: "Conception et développement d'un site web professionnel."
    },

    testimonials_title: { ar: "آراء العملاء", en: "Testimonials", fr: "Témoignages" },
    testimonials_desc: {
        ar: "ماذا يقول عملاؤنا عن خدماتنا.",
        en: "What our clients say about our services.",
        fr: "Ce que disent nos clients de nos services."
    },
    client_role: { ar: "رائد أعمال", en: "Entrepreneur", fr: "Entrepreneur" },
    testimonial_text: {
        ar: "تعامل احترافي وجودة ممتازة في تنفيذ المشروع.",
        en: "Professional dealing and excellent quality in project execution.",
        fr: "Un service professionnel et une excellente qualité dans la réalisation du projet."
    },

    contact_info_title: { ar: "معلومات التواصل", en: "Contact Information", fr: "Informations de contact" },
    contact_country: { ar: "المملكة العربية السعودية", en: "Saudi Arabia", fr: "Arabie Saoudite" },
    contact_form_title: { ar: "أرسل رسالتك", en: "Send Your Message", fr: "Envoyez votre message" },
    placeholder_name:    { ar: "الاسم",              en: "Name",     fr: "Nom" },
    placeholder_email:   { ar: "البريد الإلكتروني",  en: "Email",    fr: "E-mail" },
    placeholder_message: { ar: "رسالتك",             en: "Your Message", fr: "Votre message" },
    btn_send: { ar: "إرسال", en: "Send", fr: "Envoyer" },

    footer_desc: {
        ar: "حلول رقمية متكاملة للأفراد والشركات.",
        en: "Comprehensive digital solutions for individuals and companies.",
        fr: "Solutions numériques complètes pour les particuliers et les entreprises."
    },
    footer_links_title: { ar: "روابط سريعة", en: "Quick Links", fr: "Liens rapides" },
    footer_contact_title: { ar: "تواصل", en: "Contact", fr: "Contact" },
    footer_bottom: {
        ar: "© 2026 جميع الحقوق محفوظة لشركة الأسطورة",
        en: "© 2026 All rights reserved to Al-Ustora Company",
        fr: "© 2026 Tous droits réservés à la société Al-Ustora"
    }

};

function setLanguage(lang){

    // النصوص
    document.querySelectorAll("[data-i18n]").forEach(el => {

        const key = el.getAttribute("data-i18n");

        if(translations[key] && translations[key][lang]){
            el.textContent = translations[key][lang];
        }

    });

    // الحقول (placeholder)
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {

        const key = el.getAttribute("data-i18n-placeholder");

        if(translations[key] && translations[key][lang]){
            el.placeholder = translations[key][lang];
        }

    });

}

const langButtons = document.querySelectorAll(".languages button");

langButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        langButtons.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        setLanguage(btn.dataset.lang);

    });

});
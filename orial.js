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
  // Navbar
  nav_home: { ar: "الرئيسية", en: "Home", fr: "Accueil" },
  nav_about: { ar: "من نحن", en: "About Us", fr: "À propos" },
  nav_services: { ar: "الخدمات", en: "Services", fr: "Services" },
  nav_portfolio: { ar: "الأعمال", en: "Portfolio", fr: "Portfolio" },
  nav_testimonials: { ar: "آراء العملاء", en: "Testimonials", fr: "Témoignages" },
  nav_contact: { ar: "تواصل معنا", en: "Contact Us", fr: "Contactez-nous" },

  // Hero
  hero_title_1: { ar: "شركة أوريال", en: "Orial Company", fr: "Société Orial" },
  hero_title_2: { ar: "التجارية", en: "Trading", fr: "Commerciale" },
  hero_desc: { ar: "حلول متكاملة للشركات والأفراد تجمع بين الإبداع والتقنية.", en: "Integrated solutions for companies and individuals combining creativity and technology.", fr: "Des solutions intégrées pour les entreprises et les particuliers, alliant créativité et technologie." },
  hero_btn_services: { ar: "خدماتنا", en: "Our Services", fr: "Nos Services" },
  hero_btn_portfolio: { ar: "أعمالنا", en: "Our Work", fr: "Nos Réalisations" },

  // Vision / Mission / Values
  vision_title: { ar: "رؤيتنا", en: "Our Vision", fr: "Notre Vision" },
  vision_desc1: { ar: "أن تكون أوريال التجارية نموذجاً للتميز والريادة", en: "To be a model of excellence and leadership", fr: "Être un modèle d'excellence et de leadership" },
  vision_desc2: { ar: "في قطاع التجارة والاستثمار", en: "In trade and investment sector", fr: "Dans le secteur du commerce et de l'investissement" },
  mission_title: { ar: "رسالتنا", en: "Our Mission", fr: "Notre Mission" },
  mission_desc1: { ar: "تقديم خدمات وحلول تجارية مبتكرة تلبي احتياجات عملائنا", en: "Providing innovative business services and solutions", fr: "Fournir des services et solutions innovants" },
  mission_desc2: { ar: "وتحقق أعلى مستويات الجودة والكفاءة", en: "Achieving the highest standards of quality and efficiency", fr: "Atteindre les plus hauts niveaux de qualité et d'efficacité" },
  values_title: { ar: "قيمنا", en: "Our Values", fr: "Nos Valeurs" },
  values_desc: { ar: "الجودة الاحترافية والثقة العالية", en: "Professional quality and high trust", fr: "Qualité professionnelle et grande confiance" },

  // Stats
  stat_projects: { ar: "مشروع مكتمل", en: "Completed Projects", fr: "Projets Terminés" },
  stat_clients: { ar: "عميل سعيد", en: "Happy Clients", fr: "Clients Satisfaits" },
  stat_experience: { ar: "سنوات خبرة", en: "Years of Experience", fr: "Années d'Expérience" },
  stat_support: { ar: "دعم مستمر", en: "Continuous Support", fr: "Support Continu" },

  // Why Us
  whyus_title: { ar: "لماذا نحن؟", en: "Why Choose Us?", fr: "Pourquoi Nous Choisir ?" },
  why_card1_title: { ar: "خبرة واسعة", en: "Wide Experience", fr: "Grande Expérience" },
  why_card1_desc: { ar: "فريق عمل يمتلك خبرة طويلة في مختلف القطاعات التجارية والاستثمارية", en: "A team with extensive experience across various sectors", fr: "Une équipe possédant une vaste expérience" },
  why_card2_title: { ar: "الالتزام بالجودة", en: "Commitment To Quality", fr: "Engagement envers la qualité" },
  why_card2_desc: { ar: "نلتزم بأعلى معايير الجودة والاحترافية في جميع أعمالنا وخدماتنا", en: "We adhere to the highest standards of quality and professionalism", fr: "Nous respectons les normes les plus élevées" },
  why_card3_title: { ar: "حلول متكاملة", en: "Integrated Solutions", fr: "Solutions Intégrées" },
  why_card3_desc: { ar: "نقدم حلولاً شاملة تغطي كافة احتياجات عملائنا بكفاءة وجودة عالية", en: "We provide comprehensive solutions for all customer needs", fr: "Nous fournissons des solutions complètes" },

  // About
  about_label: { ar: "من نحن", en: "About Us", fr: "À propos" },
  about_title: { ar: "نبذة عن شركة أوريال", en: "About Orial Company", fr: "À propos d'Orial" },
  about_feat1: { ar: "✓ جودة عالية", en: "✓ High Quality", fr: "✓ Haute Qualité" },
  about_feat2: { ar: "✓ فريق محترف", en: "✓ Professional Team", fr: "✓ Équipe Professionnelle" },
  about_feat3: { ar: "✓ دعم مستمر", en: "✓ Continuous Support", fr: "✓ Support Continu" },
  about_p1: { ar: "شركة أوريال التجارية (ORIAL) هي شركة سعودية طموحة تعمل في قطاع التجارة والاستثمار، وتسعى إلى تقديم حلول تجارية متكاملة وخدمات نوعية وفق أعلى معايير الجودة والاحترافية. تؤمن أوريال بأن النجاح يُبنى على الثقة والشراكات الاستراتيجية.", en: "Orial Trading Company (ORIAL) is an ambitious Saudi company operating in the trade and investment sector, seeking to provide integrated business solutions and quality services according to the highest standards. Orial believes success is built on trust and strategic partnerships.", fr: "Orial Trading Company (ORIAL) est une entreprise saoudienne ambitieuse opérant dans le secteur du commerce et de l'investissement, cherchant à fournir des solutions commerciales intégrées selon les normes les plus élevées." },
  about_p2: { ar: "تطمح الشركة إلى أن تكون من الشركات الرائدة في السوق السعودي والإقليمي عبر تبني أفضل الممارسات التجارية، واستثمار الفرص الواعدة، وتقديم قيمة مضافة تسهم في تحقيق النمو المستدام.", en: "The company aspires to be a leading player in the Saudi and regional market by adopting best business practices, investing in promising opportunities, and delivering added value for sustainable growth.", fr: "L'entreprise aspire à être un leader sur le marché saoudien et régional en adoptant les meilleures pratiques commerciales." },
  about_btn: { ar: "اعرف المزيد", en: "Learn More", fr: "En Savoir Plus" },

  // Services
  services_title: { ar: "خدماتنا", en: "Our Services", fr: "Nos Services" },
  services_desc: { ar: "نقدم حلولاً متكاملة تلبي احتياجات الأفراد والشركات.", en: "We provide integrated solutions for individuals and businesses.", fr: "Nous offrons des solutions intégrées pour les particuliers et les entreprises." },
  service_card_title: { ar: "تصميم المواقع", en: "Web Design", fr: "Conception de Sites" },
  service_card_desc: { ar: "مواقع احترافية سريعة ومتجاوبة مع جميع الأجهزة.", en: "Professional, fast, and responsive websites for all devices.", fr: "Sites web professionnels, rapides et adaptés à tous les appareils." },

  // Portfolio
  portfolio_title: { ar: "أعمالنا", en: "Our Portfolio", fr: "Notre Portfolio" },
  portfolio_desc: { ar: "نماذج من المشاريع التي قمنا بتنفيذها.", en: "Examples of projects we have completed.", fr: "Exemples de projets que nous avons réalisés." },
  filter_all: { ar: "الكل", en: "All", fr: "Tous" },
  filter_website: { ar: "مواقع", en: "Websites", fr: "Sites Web" },
  filter_store: { ar: "متاجر", en: "Stores", fr: "Boutiques" },
  filter_branding: { ar: "هويات", en: "Branding", fr: "Identités" },
  project_category: { ar: "تصميم مواقع", en: "Web Design", fr: "Conception Web" },
  project_title: { ar: "موقع شركة", en: "Company Website", fr: "Site d'Entreprise" },
  project_desc: { ar: "تصميم وتطوير موقع احترافي.", en: "Design and development of a professional website.", fr: "Conception et développement d'un site professionnel." },

  // Testimonials
  testimonials_title: { ar: "آراء العملاء", en: "Testimonials", fr: "Témoignages" },
  testimonials_desc: { ar: "ماذا يقول عملاؤنا عن خدماتنا.", en: "What our clients say about our services.", fr: "Ce que disent nos clients de nos services." },
  client_role: { ar: "رائد أعمال", en: "Entrepreneur", fr: "Entrepreneur" },
  testimonial_text: { ar: "تعامل احترافي وجودة ممتازة في تنفيذ المشروع.", en: "Professional dealing and excellent quality in project execution.", fr: "Traitement professionnel et excellente qualité dans l'exécution du projet." },

  // Contact
  contact_info_title: { ar: "معلومات التواصل", en: "Contact Information", fr: "Informations de Contact" },
  contact_country: { ar: "المملكة العربية السعودية", en: "Kingdom of Saudi Arabia", fr: "Royaume d'Arabie Saoudite" },
  contact_form_title: { ar: "أرسل رسالتك", en: "Send Your Message", fr: "Envoyez Votre Message" },
  placeholder_name: { ar: "الاسم", en: "Name", fr: "Nom" },
  placeholder_email: { ar: "البريد الإلكتروني", en: "Email", fr: "E-mail" },
  placeholder_message: { ar: "رسالتك", en: "Your Message", fr: "Votre Message" },
  btn_send: { ar: "إرسال", en: "Send", fr: "Envoyer" },

  // Footer
  footer_desc: { ar: "حلول رقمية متكاملة للأفراد والشركات.", en: "Integrated digital solutions for individuals and businesses.", fr: "Solutions numériques intégrées pour les particuliers et les entreprises." },
  footer_links_title: { ar: "روابط سريعة", en: "Quick Links", fr: "Liens Rapides" },
  footer_contact_title: { ar: "تواصل", en: "Contact", fr: "Contact" },
  footer_bottom: { ar: "© 2026 جميع الحقوق محفوظة لشركة أوريال", en: "© 2026 All Rights Reserved - Orial Company", fr: "© 2026 Tous Droits Réservés - Orial" }
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
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});


window.addEventListener("scroll",()=>{

    let scrollTop =
    window.scrollY;

    let docHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

    let progress =
    (scrollTop / docHeight) * 100;

    document.getElementById("progress-bar")
    .style.width =
    progress + "%";

});


    const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

hiddenElements.forEach((el)=>{
observer.observe(el);
});

const text = "نصنع المستقبل الرقمي";

const typing =
document.getElementById("typing");

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,100);

    }

}

const parallax = document.querySelector(".parallax");

document.addEventListener("mousemove",(e)=>{

let x = (e.clientX - window.innerWidth/2) / 50;
let y = (e.clientY - window.innerHeight/2) / 50;

parallax.style.transform =
`translate(${x}px, ${y}px)`;

});



emailjs.init("iu_nlW7ZDZrr1gR3M");

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener("submit",function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_nawaf",
        "template_qrovbir",
        this
    )

    .then(function(){

        alert("✅ تم إرسال رسالتك بنجاح");

        contactForm.reset();

    })



});


const savedLang = localStorage.getItem("preferredLang") || "ar";
setLanguage(savedLang);
langButtons.forEach(b => b.classList.remove("active"));
document.querySelector(`.languages button[data-lang="${savedLang}"]`).classList.add("active");

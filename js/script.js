document.addEventListener("DOMContentLoaded", function () {

    const heroBtn = document.getElementById("hero-btn");

    const footerCompanyDesc =
document.getElementById("footer-company-desc");

const footerLinksTitle =
document.getElementById("footer-links-title");

const footerHome =
document.getElementById("footer-home");

const footerAbout =
document.getElementById("footer-about");

const footerServices =
document.getElementById("footer-services");

const footerProjects =
document.getElementById("footer-projects");

const footerContact =
document.getElementById("footer-contact");

const footerContactTitle =
document.getElementById("footer-contact-title");

const footerLocation =
document.getElementById("footer-location");

const footerBottom =
document.getElementById("footer-bottom");

const contactCompany = document.getElementById("contact-company");
const contactAddress = document.getElementById("contact-address");

const addressLabel = document.getElementById("address-label");
const emailLabel = document.getElementById("email-label");
const phoneLabel = document.getElementById("phone-label");

const messageTitle = document.getElementById("message-title");
const messageDesc = document.getElementById("message-desc");

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const messageInput = document.getElementById("message-input");

const sendBtn = document.getElementById("send-btn");

const project1Title = document.getElementById("project1-title");
const project1Desc = document.getElementById("project1-desc");

const project2Title = document.getElementById("project2-title");
const project2Desc = document.getElementById("project2-desc");

const project3Title = document.getElementById("project3-title");
const project3Desc = document.getElementById("project3-desc");

const aboutP1 = document.getElementById("about-p1");
const aboutP2 = document.getElementById("about-p2");
const aboutP3 = document.getElementById("about-p3");

const service1Title = document.getElementById("service1-title");
const service1Desc = document.getElementById("service1-desc");

const service2Title = document.getElementById("service2-title");
const service2Desc = document.getElementById("service2-desc");

const service3Title = document.getElementById("service3-title");
const service3Desc = document.getElementById("service3-desc");

    const btnId = document.getElementById("btn-id");
    const btnEn = document.getElementById("btn-en");

    const heroTitle = document.querySelector(".hero-title");
    const heroSubtitle = document.querySelector(".hero-subtitle");

    const aboutTitle = document.getElementById("about-title");
    const servicesTitle = document.getElementById("services-title");
    const projectsTitle = document.getElementById("projects-title");
    const activitiesTitle = document.getElementById("activities-title");
    const contactTitle = document.getElementById("contact-title");

    const navHome = document.getElementById("nav-home");
    const navAbout = document.getElementById("nav-about");
    const navServices = document.getElementById("nav-services");
    const navProjects = document.getElementById("nav-projects");
    const navActivities = document.getElementById("nav-activities");
    const navContact = document.getElementById("nav-contact");


    btnEn.addEventListener("click", function () {

        heroBtn.textContent = "Explore Our Services";

        footerCompanyDesc.textContent =
"Integrated Logistics Services, Heavy Equipment Operations, Warehousing & Supply Chain Solutions.";

footerLinksTitle.textContent = "Quick Links";

footerHome.textContent = "Home";
footerAbout.textContent = "About";
footerServices.textContent = "Services";
footerProjects.textContent = "Projects";
footerContact.textContent = "Contact";

footerContactTitle.textContent =
"Contact Information";

footerLocation.textContent =
"📍 Surabaya, Indonesia";

footerBottom.textContent =
"© 2026 PT Prima Jasa Logistik. All Rights Reserved.";

        addressLabel.textContent = "📍 Address";
emailLabel.textContent = "✉ Email";
phoneLabel.textContent = "☎ Phone";

contactAddress.textContent =
"Jl. Tanjung Batu No.15A, Perak Bar., Krembangan District, Surabaya, East Java";

messageTitle.textContent = "Send Us a Message";

messageDesc.textContent =
"Have questions about our logistics services? Contact us through the form below.";

nameInput.placeholder = "Your Name";
emailInput.placeholder = "Your Email";
messageInput.placeholder = "Your Message";

sendBtn.textContent = "Send Message";

    // PROJECTS
    project1Title.textContent = "Port Logistics";
    project1Desc.textContent =
    "Cargo handling and logistics operations at port terminals.";

    project2Title.textContent = "Container Management";
    project2Desc.textContent =
    "Integrated container handling and storage management services.";

    project3Title.textContent = "Warehousing Support";
    project3Desc.textContent =
    "Modern warehousing solutions with efficient inventory systems.";

    // SERVICES
    service1Title.textContent = "Integrated Logistics";
    service1Desc.textContent =
    "Comprehensive logistics solutions including transportation, cargo handling, and supply chain management services.";

    service2Title.textContent = "Heavy Equipment Support";
    service2Desc.textContent =
    "Heavy equipment operation, maintenance, rental services, and project logistics support.";

    service3Title.textContent = "Warehousing Solutions";
    service3Desc.textContent =
    "Secure storage facilities with inventory management and distribution support.";

    // ABOUT
    aboutP1.textContent =
    "PT Prima Jasa Logistik (PRIL) is a logistics company established in Surabaya on February 10, 2010.";

    aboutP2.textContent =
    "The company specializes in logistics services, heavy equipment operations and maintenance, warehousing, shorebase services, and integrated logistics support for oil & gas and industrial sectors.";

    aboutP3.textContent =
    "With years of experience and a strong commitment to safety, quality, and operational excellence, PRIL continues to provide reliable logistics solutions across Indonesia.";

    // HERO
    heroTitle.textContent = "PT Prima Jasa Logistik";
    heroSubtitle.textContent =
    "Integrated Logistics Services & Heavy Equipment Operations";

    // SECTION TITLES
    aboutTitle.textContent = "About PT Prima Jasa Logistik";
    servicesTitle.textContent = "Our Services";
    projectsTitle.textContent = "Projects";
    activitiesTitle.textContent = "Company Activities";
    contactTitle.textContent = "Contact Us";

    // NAVBAR
    navHome.textContent = "Home";
    navAbout.textContent = "About";
    navServices.textContent = "Services";
    navProjects.textContent = "Projects";
    navActivities.textContent = "Activities";
    navContact.textContent = "Contact";

});


btnId.addEventListener("click", function () {

    heroBtn.textContent = "Jelajahi Layanan Kami";

    footerCompanyDesc.textContent =
"Layanan Logistik Terintegrasi, Operasi Alat Berat, Pergudangan & Solusi Rantai Pasok.";

footerLinksTitle.textContent = "Tautan Cepat";

footerHome.textContent = "Beranda";
footerAbout.textContent = "Tentang";
footerServices.textContent = "Layanan";
footerProjects.textContent = "Proyek";
footerContact.textContent = "Kontak";

footerContactTitle.textContent =
"Informasi Kontak";

footerLocation.textContent =
"📍 Surabaya, Indonesia";

footerBottom.textContent =
"© 2026 PT Prima Jasa Logistik. Seluruh Hak Cipta Dilindungi.";

    addressLabel.textContent = "📍 Alamat";
emailLabel.textContent = "✉ Email";
phoneLabel.textContent = "☎ Telepon";

contactAddress.textContent =
"Jl. Tanjung Batu No.15A, Perak Bar., Kec. Krembangan, Surabaya, Jawa Timur";

messageTitle.textContent = "Kirim Pesan";

messageDesc.textContent =
"Memiliki pertanyaan mengenai layanan logistik kami? Hubungi kami melalui formulir berikut.";

nameInput.placeholder = "Nama Anda";
emailInput.placeholder = "Email Anda";
messageInput.placeholder = "Pesan Anda";

sendBtn.textContent = "Kirim Pesan";

    // PROJECTS
    project1Title.textContent = "Logistik Pelabuhan";
    project1Desc.textContent =
    "Operasi penanganan kargo dan logistik di terminal pelabuhan.";

    project2Title.textContent = "Manajemen Kontainer";
    project2Desc.textContent =
    "Layanan terpadu dalam penanganan dan penyimpanan kontainer.";

    project3Title.textContent = "Dukungan Pergudangan";
    project3Desc.textContent =
    "Solusi pergudangan modern dengan sistem inventaris yang efisien.";

    // SERVICES
    service1Title.textContent = "Logistik Terintegrasi";
    service1Desc.textContent =
    "Layanan logistik terpadu yang mencakup transportasi, penanganan kargo, dan manajemen rantai pasok.";

    service2Title.textContent = "Dukungan Alat Berat";
    service2Desc.textContent =
    "Layanan operasi, pemeliharaan, penyewaan alat berat, serta dukungan logistik proyek.";

    service3Title.textContent = "Solusi Pergudangan";
    service3Desc.textContent =
    "Fasilitas penyimpanan yang aman dengan dukungan manajemen inventaris dan distribusi.";

    // ABOUT
    aboutP1.textContent =
    "PT Prima Jasa Logistik (PRIL) merupakan perusahaan logistik yang didirikan di Surabaya pada 10 Februari 2010.";

    aboutP2.textContent =
    "Perusahaan ini bergerak di bidang layanan logistik, operasi dan pemeliharaan alat berat, pergudangan, layanan shorebase, serta dukungan logistik terintegrasi untuk sektor migas dan industri.";

    aboutP3.textContent =
    "Dengan pengalaman yang panjang serta komitmen terhadap keselamatan, kualitas, dan keunggulan operasional, PRIL terus memberikan solusi logistik yang andal di seluruh Indonesia.";

    // HERO
    heroTitle.textContent = "PT Prima Jasa Logistik";
    heroSubtitle.textContent =
    "Layanan Logistik Terintegrasi & Operasi Alat Berat";

    // SECTION TITLES
    aboutTitle.textContent = "Tentang PT Prima Jasa Logistik";
    servicesTitle.textContent = "Layanan Kami";
    projectsTitle.textContent = "Proyek";
    activitiesTitle.textContent = "Aktivitas Perusahaan";
    contactTitle.textContent = "Hubungi Kami";

    // NAVBAR
    navHome.textContent = "Beranda";
    navAbout.textContent = "Tentang";
    navServices.textContent = "Layanan";
    navProjects.textContent = "Proyek";
    navActivities.textContent = "Aktivitas";
   navContact.textContent = "Kontak";

}); // penutup btnId

}); // PENUTUP DOMContentLoaded PERTAMA


// BACK TO TOP

document.addEventListener("DOMContentLoaded", function(){

    const backToTop =
    document.getElementById("backToTop");

    window.addEventListener("scroll", function(){

        if(window.scrollY > 300){

            backToTop.style.display = "flex";

        }else{

            backToTop.style.display = "none";

        }

    });

    backToTop.addEventListener("click", function(){

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    });

});
// PRELOADER

window.addEventListener("load", function(){

    const preloader =
    document.getElementById("preloader");

    setTimeout(function(){

        preloader.style.opacity = "0";

        setTimeout(function(){

            preloader.style.display = "none";

        },800);

    },1500);

});
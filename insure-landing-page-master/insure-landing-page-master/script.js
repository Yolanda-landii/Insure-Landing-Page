const open_btn = document.querySelector('.open');
const close_btn = document.querySelector('.close');

open_btn.addEventListener('click', () => {
  document.querySelector('.open').style.display = 'none';
  document.querySelector('.close').style.display = 'inline';
  document.querySelector('.mobile__nav').style.display = 'block';
});

close_btn.addEventListener('click', () => {
  document.querySelector('.open').style.display = 'inline';
  document.querySelector('.close').style.display = 'none';
  document.querySelector('.mobile__nav').style.display = 'none';
});

// Define JavaScript variables for dynamic text content
const dynamicTextContent = {
    howWeWork: "How we work",
    blog: "Blog",
    account: "Account",
    viewPlans: "View plans",
    mobileHowWeWork: "How we work",
    mobileBlog: "Blog",
    mobileAccount: "Account",
    mobileViewPlans: "View plans",
    heroTitle: "Humanizing your insurance.",
    heroDescription: "Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.",
    viewPlansButton: "View plans",
    differentTitle: "We’re different",
    snappyProcessTitle: "Snappy Process",
    snappyProcessDescription: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
    affordablePricesTitle: "Affordable Prices",
    affordablePricesDescription: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    peopleFirstTitle: "People First",
    peopleFirstDescription: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
    ctaTitle: "Find out more about how we work",
    ctaButton: "How we work",
    footerHowWeWork: "How we work",
    footerWhyInsure: "Why Insure?",
    footerViewPlans: "View plans",
    footerReviews: "Reviews",
    footerFAQ: "FAQ",
    footerTerms: "Terms of use",
    footerPrivacy: "Privacy policy",
    footerCookies: "Cookies",
    footerSales: "Sales",
    footerSupport: "Support",
    footerLiveChat: "Live chat",
    footerCareers: "Careers",
    footerPress: "Press",
    footerLicenses: "Licenses",
    developerName: "Yolanda Mabotja",
    developerPortfolio: "link to your portfolio website"
  };
  
  // Replace the text content in the HTML document with the JavaScript variables
  document.getElementById("how-we-work").innerText = dynamicTextContent.howWeWork;
  document.getElementById("blog").innerText = dynamicTextContent.blog;
  document.getElementById("account").innerText = dynamicTextContent.account;
  document.getElementById("view-plans").innerText = dynamicTextContent.viewPlans;
  document.getElementById("mobile-how-we-work").innerText = dynamicTextContent.mobileHowWeWork;
  document.getElementById("mobile-blog").innerText = dynamicTextContent.mobileBlog;
  document.getElementById("mobile-account").innerText = dynamicTextContent.mobileAccount;
  document.getElementById("mobile-view-plans").innerText = dynamicTextContent.mobileViewPlans;
  document.getElementById("hero-title").innerText = dynamicTextContent.heroTitle;
  document.getElementById("hero-description").innerText = dynamicTextContent.heroDescription;
  document.getElementById("view-plans-button").innerText = dynamicTextContent.viewPlansButton;
  document.getElementById("different-title").innerText = dynamicTextContent.differentTitle;
  document.getElementById("snappy-process-title").innerText = dynamicTextContent.snappyProcessTitle;
  document.getElementById("snappy-process-description").innerText = dynamicTextContent.snappyProcessDescription;
  document.getElementById("affordable-prices-title").innerText = dynamicTextContent.affordablePricesTitle;
  document.getElementById("affordable-prices-description").innerText = dynamicTextContent.affordablePricesDescription;
  document.getElementById("people-first-title").innerText = dynamicTextContent.peopleFirstTitle;
  document.getElementById("people-first-description").innerText = dynamicTextContent.peopleFirstDescription;
  document.getElementById("cta-title").innerText = dynamicTextContent.ctaTitle;
  document.getElementById("how-we-work-button").innerText = dynamicTextContent.ctaButton;
  document.getElementById("footer-how-we-work").innerText = dynamicTextContent.footerHowWeWork;
  document.getElementById("footer-why-insure").innerText = dynamicTextContent.footerWhyInsure;
  document.getElementById("footer-view-plans").innerText = dynamicTextContent.footerViewPlans;
  document.getElementById("footer-reviews").innerText = dynamicTextContent.footerReviews;
  document.getElementById("footer-faq").innerText = dynamicTextContent.footerFAQ;
  document.getElementById("footer-terms").innerText = dynamicTextContent.footerTerms;
  document.getElementById("footer-privacy").innerText = dynamicTextContent.footerPrivacy;
  document.getElementById("footer-cookies").innerText = dynamicTextContent.footerCookies;
  document.getElementById("footer-sales").innerText = dynamicTextContent.footerSales;
  document.getElementById("footer-support").innerText = dynamicTextContent.footerSupport;
  document.getElementById("footer-live-chat").innerText = dynamicTextContent.footerLiveChat;
  document.getElementById("footer-careers").innerText = dynamicTextContent.footerCareers;
  document.getElementById("footer-press").innerText = dynamicTextContent.footerPress;
  document.getElementById("footer-licenses").innerText = dynamicTextContent.footerLicenses;
  document.getElementById("developer-link").innerText = dynamicTextContent.developerName;
  document.getElementById("developer-link").href = dynamicTextContent.developerPortfolio;
  
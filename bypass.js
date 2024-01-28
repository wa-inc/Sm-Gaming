function blockAdsAndPopupsAndReplaceElement() {
   
document.title = "Sm Gaming";

const existingFavicon = document.querySelector("link[rel='icon']");
if (existingFavicon) {
    existingFavicon.remove();
}

const favicon = document.createElement('link');
favicon.setAttribute('rel', 'icon');
favicon.setAttribute('href', 'https://media.discordapp.net/attachments/929473272981119137/1201238457863897250/9314461e-fe42-4cf3-b951-30909120fa8a.webp?ex=65c9177e&is=65b6a27e&hm=daa33a87d77e1187c7d0f76f74a91ab1c26ebc0b7a7b2dca1bcd8d60659b1957&=&format=webp&width=662&height=662');

document.head.appendChild(favicon);

    const selectorsToHide = [
      '.ad',
      '.popup',
    ];
  
    selectorsToHide.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.style.display = 'none !important';
      });
    });
  
    const joinDiscordLink = document.querySelector('a[href="https://game3rb.com/discord/"]');
    if (joinDiscordLink) {
      const newElement = document.createElement('h1');
      newElement.textContent = 'Sm Gaming';
      joinDiscordLink.parentNode.replaceChild(newElement, joinDiscordLink);
    }
  }
  

  
  const commentsSection = document.getElementById('comments');
  
  if (commentsSection) {
    commentsSection.remove();
  }
  
  const copyrightElement = document.querySelector('.copyright');
  
  if (copyrightElement) {
    copyrightElement.innerHTML = 'Sm Gaming';
  }
  
  const downloadButtons = document.querySelector('center');
  
  if (downloadButtons) {
    downloadButtons.remove();
  }
  
  const postFooter = document.getElementById('post-footer');
  
  if (postFooter) {
    postFooter.remove();
  }
  
  const sidebar = document.getElementById('sidebar-wrapper');
  
  if (sidebar) {
    sidebar.remove();
  }
  
const buttonContainer = document.querySelector('div[style="display: flex;align-items: center;justify-content: center;column-gap: 15px;"]');

if (buttonContainer) {
  buttonContainer.remove();
}

const relatedEntriesSection = document.getElementById('related-entries');


if (relatedEntriesSection) {

  relatedEntriesSection.remove();
}


const elementsToRemove = [
    document.querySelector('#menu-item-27607'), // PC Games with sub-menu
    document.querySelector('#menu-item-27606'), // PC RePack
    document.querySelector('a[href="https://game3rb.com/category/games-online/"]'), // Games Online link
    document.querySelector('#menu-item-27604'), // Game Updates
    document.querySelector('#menu-item-53874'), // DMCA
    document.querySelector('#menu-item-56652'), // HOW TO DOWNLOAD
  ];
  
  elementsToRemove.forEach(element => {
    if (element) {
      element.remove();
    }
  });

const h3Element = document.querySelector('.jquery-lightbox-background');
if (h3Element) {
    h3Element.textContent = 'Sm Gaming Client';
}

const paragraphElement = document.querySelector('.jquery-lightbox-html p');
if (paragraphElement) {
    paragraphElement.innerHTML = `
        <p>
            Sm Gaming Client هو عميل احترافي يوفر تنزيلًا سريعًا وآمنًا للألعاب دون إعلانات مزعجة. 
            يقدم العميل تجربة مميزة مدتها مجانية تسمح لك بتنزيل جميع الألعاب مجانًا. إنه عميل يقوم 
            على أساس Game3rb، مما يجعله موثوقًا وموثوقًا به.
        </p>
    `;
}

const featuresSection = document.createElement('div');
featuresSection.classList.add('features-section');
featuresSection.innerHTML = `
    <h4>المميزات 🚀</h4>
    <ul>
        <li>تنزيل سريع للألعاب 🕹️</li>
        <li>تجربة مميزة مجانية ⏳</li>
        <li>تحميل جميع الألعاب مجانًا 💰</li>
        <li>تنزيل آمن وخالٍ من الإعلانات المزعجة 🛡️</li>
        <li>واجهة مستخدم سهلة الاستخدام وبسيطة 🎨</li>
        <li>تحديثات منتظمة ودعم فني متميز 🔧</li>
        <li>دعم متعدد اللغات 🌐</li>
        <li>توافق مع مختلف أنظمة التشغيل والأجهزة 🖥️</li>
        <li>تنزيلات متعددة ومتزامنة للألعاب 🔄</li>
        <li>خيارات تخصيص متقدمة ومرونة في الاستخدام ⚙️</li>
    </ul>
`;

if (paragraphElement) {
    paragraphElement.insertAdjacentElement('afterend', featuresSection);
}

const contactUsLink = document.querySelector('a.con[href="https://www.game3rb.com/contact-us/"]');

if (contactUsLink) {
    contactUsLink.remove();
}

const logoImg = document.querySelector('#logo img');

if (logoImg) {
    logoImg.src = 'https://media.discordapp.net/attachments/929473272981119137/1201238457863897250/9314461e-fe42-4cf3-b951-30909120fa8a.webp?ex=65c9177e&is=65b6a27e&hm=daa33a87d77e1187c7d0f76f74a91ab1c26ebc0b7a7b2dca1bcd8d60659b1957&=&format=webp&width=662&height=662';
}

const navElement = document.getElementById('nav');

if (navElement) {
    navElement.style.backgroundColor = 'black';
}
  blockAdsAndPopupsAndReplaceElement();
  
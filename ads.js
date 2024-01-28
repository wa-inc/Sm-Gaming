function blockAdsAndModifySection() {
    const advertWrapper = document.querySelector('.advert-wrapper.top-advert');
    if (advertWrapper) {
        advertWrapper.remove();
    }

    const adsSection = document.querySelector('.adsbygoogle');
    if (adsSection) {
        adsSection.style.display = 'none';

    }
}
    // Replace the logo
    const logoLink = document.querySelector('.uk-navbar-item.uk-logo a');
    if (logoLink) {
        logoLink.href = 'https://media.discordapp.net/attachments/929473272981119137/1201238457863897250/9314461e-fe42-4cf3-b951-30909120fa8a.webp?ex=65c9177e&is=65b6a27e&hm=daa33a87d77e1187c7d0f76f74a91ab1c26ebc0b7a7b2dca1bcd8d60659b1957&=&format=webp&width=662&height=662';
        const logoImage = logoLink.querySelector('img.uk-responsive-height');
        if (logoImage) {
            logoImage.src = 'https://media.discordapp.net/attachments/929473272981119137/1201238457863897250/9314461e-fe42-4cf3-b951-30909120fa8a.webp?ex=65c9177e&is=65b6a27e&hm=daa33a87d77e1187c7d0f76f74a91ab1c26ebc0b7a7b2dca1bcd8d60659b1957&=&format=webp&width=662&height=662';
            logoImage.alt = 'Logo';
            logoImage.style.height = '40px';
        }
    }

    const navbarRightSection = document.querySelector('.uk-navbar-right');
    if (navbarRightSection) {
        navbarRightSection.remove();
    }


blockAdsAndModifySection();

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobileXL: '600px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    laptopXL: '2000px',
    desktop: '2560px',
}

export const mediaQuery = {
    mobileS: `@media(min-width: ${size.mobileS})`,
    mobileM: `@media(min-width: ${size.mobileM})`,
    mobileL: `@media(min-width: ${size.mobileL})`,
    mobileXL: `@media(min-width: ${size.mobileXL})`,
    tablet: `@media(min-width: ${size.tablet})`,
    laptop: `@media(min-width: ${size.laptop})`,
    laptopL: `@media(min-width: ${size.laptopL})`,
    laptopXL: `@media(min-width: ${size.laptopXL})`,
    desktop: `@media(min-width: ${size.desktop})`,
};


import AuthLogo from './extensions/authlogo.png';
import MenuLogo from './extensions/menulogo.png';
import favicon from './extensions/favicon.png';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        primary100: '#eeeeee',
        primary200: '#c2c2c2',
        primary500: '#9a9a9a',
        primary600: '#5e5e5e',
        primary700: '#000000',
        alternative100: '#f1f1f1',
        alternative200: '#bfbfbf',
        alternative500: '#898989',
        alternative600: '#515151',
        alternative700: '#181818',
        buttonNeutral0: '#ffffff',
        buttonPrimary500: '#5e5e5e',
        buttonPrimary600: '#000000',
        neutral0: '#ffffff',
        neutral100: '#fafafa',
      },
    },
   // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() {},
};


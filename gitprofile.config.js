// gitprofile.config.js

const config = {
  github: {
    username: 'raisty', // Your GitHub org/user name. (Required)
    sortBy: 'committer-date', // stars | updated
    limit: 20, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    twitter: 'RastislavGlory',
    corepass: '',
    ican: 'cb2266fec7f127e2f884f0fbbcbf45dfd6fad5401922',
    website: 'https://github.com/raisty',
  },
  skills: [
    'Blockchain',
    'Cryptography',
    'Golang',
  ],
  experiences: [
    {
      company: 'CoDeTech',
      position: 'CIO',
    },
    {
      company: 'CORE FOUNDATION',
      position: 'Founder',
    },
    {
      company: 'CRYPTO ▪ HUB',
      position: 'Founder',
    },
  ],
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;

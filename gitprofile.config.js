// gitprofile.config.js

const config = {
  github: {
    username: 'rastislavcore', // Your GitHub org/user name. (Required)
    sortBy: 'committer-date', // stars | updated | committer-date
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: 'rastislavcore',
    mastodon: 'rastislav@coretalk.space',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    cryptohub: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://github.com/rastislavcore',
    phone: '',
    email: 'rastislav@onion.email?key=https%3A%2F%2Fkeys.openpgp.org%2Fvks%2Fv1%2Fby-fingerprint%2FF670A2D3626AB878A46D7AA8879FF4E05B438A11',
    corepass: '',
    payto: 'xcb/cb2266fec7f127e2f884f0fbbcbf45dfd6fad5401922',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  publickey: {
    fileUrl:
      'https://keys.openpgp.org/vks/v1/by-fingerprint/F670A2D3626AB878A46D7AA8879FF4E05B438A11', // Empty fileUrl will hide the `Download GPG/PGP` button.
  },
  skills: [
    'Blockchain',
    'DeFi',
    'CBDC',
    'Rust',
    'Golang',
    'JavaScript',
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
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ],
  education: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],*/

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev | cryptohub
    username: '', // to hide blog section, keep it empty
    limit: 4, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: true,

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

  // Optional Footer. Supports plain text or HTML.
  footer: ``,
};

export default config;

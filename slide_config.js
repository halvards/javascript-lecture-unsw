var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'Introduction to JavaScript',
    subtitle: '',
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/tw_brackets_color_24x24.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Halvard Skogsrud',
    company: 'ThoughtWorks',
    twitter: '@halvards',
    github: 'https://github.com/halvards'
  }, {
    name: 'Charlie Gerard',
    company: 'ThoughtWorks',
    twitter: '@charlie__gerard',
    www: 'https://charliegerard.github.io/',
    github: 'https://github.com/charliegerard'
  }]
};

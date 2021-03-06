export const breakpoints = {
    mobile: 480,
    tablet: 780,
    desktop: 1024,
  };
  
  export const mediaQueries = {
    mobile: `@media (min-width: ${breakpoints.mobile}px)`,
    tablet: `@media(min-width: ${breakpoints.tablet}px)`,
    desktop: `@media(min-width: ${breakpoints.desktop}px)`,
    untilDesktop: '@media(max-width: 1023px)',
  };
  
  export const colors = {
    landingPage: {
      welcomeText: '#9FDBFF',
      foreground: '#fff',
      hoverForeground: '#E1E1E1',
      infolabel: '#9FDBFF',
    },
    background: 'whitesmoke',
    gray: '#333',
    black: '#000',
    white: '#fff',
    mediumGray: '#DDD',
    lightGray: '#E1E1E1',
  };
import App from 'next/app';
import * as React from 'react';
import '../styles/tailwind.css';

import { parseCookies, setCookie, destroyCookie } from 'nookies';

interface AppState {
  // state variables types go here
}

class MyApp extends App<{}, {}, AppState> {
  componentDidMount() {
    //detect dark mode and enable tailwindcss-dark-mode
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    const htmlSelector = document.querySelector("html");

    var expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1000);

    if (!isDark.matches) {
      setCookie({}, "DEFAULT-THEME", "light", {expires: expires, path: "/"});
      // window.localStorage.setItem('DEFAULT-THEME', 'light');
      htmlSelector?.classList.remove('mode-dark');
    }
    else {
      setCookie({}, "DEFAULT-THEME", "dark", {expires: expires, path: "/"});
      // window.localStorage.setItem('DEFAULT-THEME', 'dark');
      htmlSelector?.classList.add('mode-dark');
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}
  
export default MyApp;
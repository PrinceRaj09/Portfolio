import React, { createContext, useState, useEffect } from 'react';

import Color from './Color';
const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    changeTheme(savedTheme);
  }, []);

  const changeTheme = (newTheme) => {
    if (newTheme === 'dark') {
      document.documentElement.style.setProperty('--title-color', '#c3d4da');
      document.documentElement.style.setProperty('--title-color-dark', '#abd5bd');
      document.documentElement.style.setProperty('--text-color', '#f8f9fa');
      document.documentElement.style.setProperty('--body-color', '#212529');
      document.documentElement.style.setProperty('--container-color', '#6c757d');
      document.documentElement.style.setProperty('--hover-color', '#dee2e6');
    } 
    else if (newTheme === 'blue') {
        document.documentElement.style.setProperty('--title-color', '#0ef');
        document.documentElement.style.setProperty('--title-color-dark', '#dee2e6');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--body-color', '#1f242d');
        document.documentElement.style.setProperty('--container-color', '#323946');
        document.documentElement.style.setProperty('--hover-color', '#0ef');
    }
    else if (newTheme === 'yellow') {
        document.documentElement.style.setProperty('--title-color', '#f8961e');
        document.documentElement.style.setProperty('--title-color-dark', '#ffca3a');
        document.documentElement.style.setProperty('--text-color', '#f9c74f');
        document.documentElement.style.setProperty('--body-color', '#d1d3c4');
        document.documentElement.style.setProperty('--container-color', 'f7d1cd');
        document.documentElement.style.setProperty('--hover-color', '#90be6d');
    }
    else if (newTheme === 'grey') {
        document.documentElement.style.setProperty('--title-color', '#a4c3b2');
        document.documentElement.style.setProperty('--title-color-dark', '#6b9080');
        document.documentElement.style.setProperty('--text-color', '#b2967d');
        document.documentElement.style.setProperty('--body-color', '#eaf4f4');
        document.documentElement.style.setProperty('--container-color', '#f6fff8');
        document.documentElement.style.setProperty('--hover-color', '#cce3de');
    }
    else {
        document.documentElement.style.setProperty('--title-color', '#2c3e50');
        document.documentElement.style.setProperty('--title-color-dark', '#8e44ad');
        document.documentElement.style.setProperty('--text-color', '#ecf0f1');
        document.documentElement.style.setProperty('--body-color', '#2c3e50');
        document.documentElement.style.setProperty('--container-color', '#8e44ad');
        document.documentElement.style.setProperty('--hover-color', '#ecf0f1');
    }

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

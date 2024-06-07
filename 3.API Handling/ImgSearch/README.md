# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Access Environment variables

```javascript
    const specialKey = import.meta.env.VITE_SPECIAL_KEY;
    
    const accessKey = import.meta.env.VITE_ACCESS_KEY;
    
    const id = import.meta.env.VITE_ID;

    console.log(specialKey, accessKey, id); // Use these variables as needed

```
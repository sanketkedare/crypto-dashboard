# Cryptocurrency Dashboard

Welcome to the Cryptocurrency Dashboard, a frontend application developed using React.js and styled with Tailwind CSS. This project offers a seamless user experience by fetching real-time data from various API endpoints, providing up-to-date information on cryptocurrency prices and trends. Users can conveniently view exchange rates in different currencies such as Indian Rupee, US Dollar, Yen, and Euro. The application is designed to be responsive, ensuring optimal performance across various devices and screen sizes.

## Live Link

Explore the live deployment of the project: [Cryptocurrency Dashboard](https://crypto-dashboard-5buj.onrender.com/)

## Features

- **Real-time Data:** Stay updated with the latest cryptocurrency prices and market trends.
- **Customizable Dashboard:** Personalize the layout and choose preferred cryptocurrencies to display.
- **Interactive Charts:** Visualize historical price data and analyze cryptocurrency performance over time.
- **Responsive Design:** Enjoy a seamless user experience across desktop, tablet, and mobile devices.

## Project Structure

- **node_modules/**: Dependencies installed via npm or Yarn.
- **build/**: Optimized production build of the React application.
- **public/**: Static assets including HTML files and images.
- **src/**
  - **APIs/**: Manages interactions with external cryptocurrency data sources.
  - **Components/**: Reusable React components for the dashboard's UI.
  - **Config/**: Global configurations for consistency.
  - **Data (Redux)/**: State management using Redux for application-wide data handling.
- **Tests/**: Ensures code integrity through comprehensive testing.
- **Utils/**: Utility functions aiding development efficiency.
- **.gitignore**: Specifies files to be ignored by version control.
- **package-lock.json**: Maintains consistency in dependency versions.
- **package.json**: Manifesto detailing project metadata and dependencies.
- **README.md**: Comprehensive guide on project setup and execution.
- **tailwind.config.js**: Customizes Tailwind CSS for unique design needs.

### Project Structure Details:

**Project Setup and Dependencies:** The project structure begins with essential directories such as `node_modules` and `build`. `public` hosts static assets, with `index.html` as the entry point.

**Source Code Organization:** Within `src`, `APIs` manage data sources, `Components` handle UI elements, `Config` ensures global consistency, and `Data` manages state via Redux. `Tests` maintain code integrity, and `Utils` boost development efficiency.

**Version Control:** Managed via `.gitignore` and `package-lock.json`. `package.json` details metadata and dependencies. `README.md` provides setup guidance. `tailwind.config.js` tailors CSS.

## Installation

```bash
git clone git@github.com:sanketkedare/crypto-dashboard.git
cd cryptocurrency-dashboard
npm install
npm start
```

Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Conclusion

The cryptocurrency dashboard combines React for dynamic interfaces and Tailwind CSS for seamless styling. With clear structure, scalability, and Redux for state, it ensures robustness. Streamlined via version control and testing, it promises a refined user experience in the digital currency realm.

© Sanket Kedare 2024



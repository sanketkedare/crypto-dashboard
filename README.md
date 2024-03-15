# Cryptocurrency Dashboard

The project is a frontend application developed using React.js and styled with Tailwind CSS, offering a seamless user experience. It incorporates real-time data fetching from various API endpoints to provide up-to-date information. One of its prominent features is the inclusion of different currency options, including Indian Rupee, US Dollar, Yen, and Euro, allowing users to view exchange rates conveniently. The application is designed to be responsive, ensuring optimal performance across various devices and screen sizes. Additionally, it provides accurate currency exchange values, enhancing its utility for users in managing financial transactions efficiently.


## Live Link

https://crypto-dashboard-5buj.onrender.com/


## Features

- **Real-time Data:** Stay up-to-date with the latest cryptocurrency prices and market trends.
- **Customizable Dashboard:** Customize the dashboard layout and choose which cryptocurrencies to display.
- **Interactive Charts:** Visualize historical price data and analyze cryptocurrency performance over time.
- **Portfolio Management:** Track your cryptocurrency holdings and monitor portfolio performance.
- **Responsive Design:** Enjoy a seamless user experience across desktop, tablet, and mobile devices.

## Project Structure

- node_modules/
- build/
- public/
- src/
  - APIs/
  - Components/
  - Config/
  - Data (Redux)/
- Tests/
- Utils/
.- gitignore
- package-lock.json
- package.json
- README.md
- tailwind.config.js


### Project Structure Details:

1. **Project Setup and Dependencies:** The project structure begins with essential directories such as `node_modules`, housing all dependencies installed via npm or Yarn. The `build` directory hosts the optimized production build of the React application, ensuring efficiency in deployment. `Public` holds static assets like HTML files and images, with the crucial `index.html` serving as the entry point.

2. **Source Code Organization:** Within the `src` directory lies the heart of the project. `APIs` manage interactions with external cryptocurrency data sources, while `Components` encapsulate reusable React elements essential for the dashboard's UI. `Config` houses global configurations, promoting consistency. The `Data` directory, employing Redux, manages application state comprehensively. Meanwhile, `Tests` ensure code integrity through comprehensive testing, and `Utils` provide a repository for utility functions aiding development efficiency.

3. **Project Management and Version Control:** The project is meticulously managed with essential files like `.gitignore`, ensuring irrelevant files like `node_modules` remain untracked in version control. `package-lock.json` maintains consistency in dependency versions across collaborators, while `package.json` acts as a manifesto, detailing project metadata and dependencies. The `README.md` offers comprehensive guidance on project setup and execution. Lastly, `tailwind.config.js` customizes Tailwind CSS, tailoring it to the project's unique design needs, fostering a cohesive visual identity.



## Installation

   ```
   git clone git@github.com:sanketkedare/crypto-dashboard.git

   cd cryptocurrency-dashboard 

   npm install

   npm start
   
   ```

   **Open your browser and visit http://localhost:3000 to view the application.**


## Conclusion
In conclusion, the cryptocurrency dashboard project is structured meticulously, combining the power of React for dynamic user interfaces and Tailwind CSS for seamless styling. With a clear separation of concerns, the folder structure ensures scalability, maintainability, and efficiency throughout development. By leveraging Redux for state management and comprehensive testing strategies, the project maintains code integrity and robustness. Additionally, version control and dependency management are streamlined, facilitating collaboration and ensuring consistency across the development lifecycle. Overall, this well-organized project structure sets a solid foundation for building a sophisticated cryptocurrency dashboard that meets both functional and aesthetic requirements, promising a seamless user experience in navigating the complex world of digital currencies.


© Sanket Kedare 2024


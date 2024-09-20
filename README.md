# Multi-Step Form with Vite and React

This project is a multi-step form built with Vite and React, including form validation, data persistence using local storage, and multiple steps for gathering user input.

## Features

- **Multi-step form** (3 steps: Personal Information, Address Information, Confirmation)
- **Form validation** with **React Hook Form**
- **Responsive design**
- **Data persistence** using **localStorage**
- **Error handling** and validation messages

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

3. **Start the development server:**

    To start the Vite development server, run:

    ```bash
    npm run dev
    ```

    Or with yarn:

    ```bash
    yarn dev
    ```

    Vite will start a local development server, and the project should be running at `http://localhost:5173`.

4. **Build for production:**

    To create a production build, run:

    ```bash
    npm run build
    ```

    Or with yarn:

    ```bash
    yarn build
    ```

    The production build will be generated in the `dist` folder.

5. **Preview the production build:**

    To locally preview the production build, use:

    ```bash
    npm run preview
    ```

## Project Structure

```bash
├── src/
│   ├── components/
│   │   ├── PersonalInfo.js
│   │   ├── AddressInfo.js
│   │   └── Confirmation.js
│   ├── hooks/
│   ├── App.js
│   ├── index.css
│   └── main.jsx
├── public/
│   └── index.html
├── .gitignore
├── package.json
└── vite.config.js
```

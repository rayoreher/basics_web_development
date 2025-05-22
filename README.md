# Basics Web Development

This is a simple static website built with **HTML**, **CSS**, and **JavaScript**, using **[Vite](https://vitejs.dev/)** as the development server and build tool. The project supports **hot module replacement (HMR)** during development and can be run both locally and inside a **Docker container**.

---

## ✨ Features

* Fast development environment with Vite
* Hot Module Replacement (HMR)
* Docker support for isolated and reproducible setup
* Pure frontend application with no backend

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/)
* [Docker](https://www.docker.com/)

---

### ⚙️ Run with Docker

1. Clone the repository:

   ```bash
   git clone https://github.com/rayoreher/basics_web_development.git
   cd basics_web_development
   ```

2. Start the development container:

   ```bash
   docker-compose up --build
   ```

3. Open your browser at:
   [http://localhost:5173](http://localhost:5173)

> Changes made locally will be reflected in the container through volume mounting and Vite's HMR.

---

### 🚀 Run with Vite (Without Docker)

1. Clone the repository:

   ```bash
   git clone https://github.com/rayoreher/basics_web_development.git
   cd basics_web_development
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Vite dev server:

   ```bash
   npm run dev
   ```

4. Open your browser at:
   [http://localhost:5173](http://localhost:5173)

---

## 📆 Building for Production

To build the static site for production:

```bash
npm run build
```

The output will be placed in the `dist/` directory.

---

## 📂 Project Structure

```bash
BASICS_WEB_DEVELOPMENT/
├── node_modules/            # Dependencies (auto-generated)
├── public/                  # Public assets
├── src/                     # Source files
│   └── main.js              # Main JavaScript entry point
│   └── style.css            # Main stylesheet
├── README.md                # Project documentation
├── .gitignore               # Git ignore rules
├── docker-compose.yml       # Docker Compose configuration
├── Dockerfile               # Docker image definition
├── index.html               # Main HTML file
├── package-lock.json        # NPM lockfile
├── package.json             # NPM metadata and scripts
└── vite.config.js           # Vite configuration file
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

# Vaibhav Kiran's Personal Portfolio

Welcome to the official repository for Vaibhav Kiran's personal portfolio website. This project is a dynamic, modern showcase of his skills, projects, and professional journey in the field of Biomedical Engineering, with a focus on intelligent medical systems and AI.

**🚀 [View the Live Website](https://vaibhav-kiran.web.app) 🚀**

---

### About The Project

This portfolio is more than just a resume; it's an interactive experience designed to highlight Vaibhav's expertise in medical device prototyping, machine learning, 3D design, and advanced imaging. It serves as a central hub for his professional presence, providing detailed insights into his education, experience, and key achievements.

### ✨ Key Features

*   **Interactive 3D Skills Globe:** A visually engaging and interactive globe built with **Three.js** and **React Three Fiber** to display technical skills.
*   **Comprehensive Experience:** Detailed sections for professional experience, leadership roles, and education.
*   **Hackathon Showcase:** Highlights of award-winning projects from events like the Smart India Hackathon 2024 and the India-Israel Hackathon 2025.
*   **Skill Sections:** Clear separation between technical proficiencies and soft skills.
*   **Responsive Design:** Fully responsive layout for seamless viewing on desktops, tablets, and mobile devices.
*   **Light/Dark Mode:** A toggle to switch between light and dark themes for user comfort.

### 🛠️ Tech Stack

This project is built with a modern, powerful tech stack:

*   **Framework:** [Next.js](https://nextjs.org/) (v14)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **3D Graphics:** [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), and [React Three Drei](https://github.com/pmndrs/drei)
*   **Deployment:** [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

### Local Development

To get a local copy up and running, follow these simple steps.

#### Prerequisites

Make sure you have Node.js and npm installed on your machine.

*   npm
    ```sh
    npm install npm@latest -g
    ```

#### Installation & Setup

1.  Clone the repository:
    ```bash
    git clone https://github.com/your_username/profile_webpage.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd profile_webpage
    ```
3.  Install NPM packages:
    ```bash
    npm install
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

### Deployment to Firebase

This application is configured for static export and deployment to Firebase Hosting.

1.  **Build for Production:**
    Generate the static files in the `out/` directory.
    ```bash
    npm run build
    ```

2.  **Deploy to Firebase:**
    Deploy the contents of the `out/` directory to your Firebase Hosting instance.
    ```bash
    firebase deploy --only hosting
    ```

### License

Distributed under the MIT License. See `LICENSE` for more information.
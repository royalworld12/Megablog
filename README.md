# ✍️ MegaBlog — Share Your Thoughts With the World

<p align="center">
  A modern blog application built with React and Appwrite.
  <br />
  Create, manage, and share your stories through a clean and intuitive blogging experience.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Appwrite-Backend-FD366E?style=for-the-badge&logo=appwrite&logoColor=white" alt="Appwrite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

---

## 🚀 Overview

**MegaBlog** is a modern blogging platform designed to make writing and managing blog posts simple and enjoyable.

Built with React and powered by Appwrite, MegaBlog provides a backend-powered foundation for user authentication, content management, and image storage.

Whether you're sharing technical knowledge, personal experiences, or creative ideas, MegaBlog provides the tools to bring your content to life.

## ✨ Features

- 📝 **Rich Text Editor** – Create engaging blog posts with a TinyMCE-powered editor.
- 🔐 **Authentication** – Integrate user authentication through Appwrite.
- 📚 **Blog Management** – Create and manage blog posts.
- 🖼️ **Image Uploads** – Upload and manage featured images using Appwrite Storage.
- 🔍 **Dynamic Content** – Display blog content dynamically.
- 🧭 **Client-side Routing** – Navigate between application pages using React Router.
- 🎨 **Modern UI** – Responsive styling powered by Tailwind CSS.
- 📋 **Form Management** – Handle forms with React Hook Form.
- 🗃️ **Centralized State** – Manage application state using Redux Toolkit.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend UI |
| Vite | Development server and build tooling |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS 4 | Styling and responsive UI |
| Appwrite | Backend services and database |
| Appwrite Storage | Image and file management |
| Redux Toolkit | Global state management |
| React Redux | React integration for Redux |
| React Router DOM | Application routing |
| TinyMCE | Rich text editing |
| React Hook Form | Form handling and validation |
| HTML React Parser | Rendering HTML blog content |

## 📂 Project Structure

```text
Megablog/
│
├── public/                 # Static assets
│
├── src/
│   ├── appwrite/           # Appwrite configuration and services
│   ├── components/         # Reusable UI components
│   ├── pages/              # Application pages
│   ├── store/              # Redux store and slices
│   ├── conf/               # Application configuration
│   ├── assets/             # Images and other assets
│   ├── App.jsx             # Root application component
│   └── main.jsx            # Application entry point
│
├── .env.sample             # Environment variable template
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

*Folder names are illustrative; adjust this tree to match the actual source structure.*

## ⚙️ Getting Started

Follow these steps to run MegaBlog locally.

### 1. Clone the repository

```bash
git clone https://github.com/royalworld12/Megablog.git
```

### 2. Navigate to the project

```bash
cd Megablog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root.

Configure the following variables:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your-project-id

VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_COLLECTION_ID=your-collection-id
VITE_APPWRITE_BUCKET_ID=your-bucket-id

VITE_TINYMCE_API_KEY=your-tinymce-api-key
```

Replace the placeholder values with your actual configuration.

**Important:** Never expose an Appwrite API key or other privileged secret through a `VITE_` environment variable. Vite exposes these variables to client-side code. Use Appwrite's client SDK and appropriate permissions for browser applications. Keep privileged API keys on a secure server.

### 5. Configure Appwrite

Set up your Appwrite project:

1. Create an Appwrite project.
2. Register your application's web platform.
3. Configure your database.
4. Create the collection/table for blog posts.
5. Configure the required attributes.
6. Create a Storage bucket for featured images.
7. Configure authentication and access permissions.

Example blog post structure:

| Attribute | Type |
|---|---|
| title | String |
| content | Long Text |
| featuredImage | String |
| status | String |
| userId | String |

Make sure the content field supports long-form HTML content.

### 6. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to access MegaBlog.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔐 Security Considerations

- Keep privileged API keys and secrets out of client-side code.
- Configure Appwrite authentication and database permissions appropriately.
- Restrict users to managing their own content.
- Validate user input before saving data.
- Configure appropriate Storage permissions for uploaded files.

## 🗺️ Future Improvements

Some ideas for taking MegaBlog further:

- [ ] Blog categories and tags
- [ ] Search and filtering
- [ ] Pagination or infinite scrolling
- [ ] User profile management
- [ ] Comments and reactions
- [ ] Markdown editor support
- [ ] SEO-friendly blog pages
- [ ] Social media sharing
- [ ] Dark mode
- [ ] Automated testing

## 🤝 Contributing

Contributions, suggestions, and feature requests are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

## 👨‍💻 Author

**Imran Shaikh**

Frontend Developer | React | Angular | JavaScript | TypeScript

- GitHub: [@royalworld12](https://github.com/royalworld12)
- Project: [MegaBlog](https://github.com/royalworld12/Megablog)

---

<p align="center">
  If you find MegaBlog interesting, consider giving the repository a ⭐
  <br />
  <strong>Happy Blogging! ✍️</strong>
</p>
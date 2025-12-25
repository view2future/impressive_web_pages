# ✨ Impressive Web Pages (IWP)

> **Transform static documents into striking, high-tension web experiences.**

IWP is a specialized web generation engine designed to take raw content from PPTs, Word documents, or existing web pages and transform them into visually impactful, high-performance, single-file HTML websites. 

Featuring a **Neo-Brutalism** design language, it prioritizes bold typography, high-contrast interfaces, and fluid motion to ensure your content leaves a lasting impression.

---

## 🚀 Key Features

- 📦 **Zero Dependency Distribution**: Builds into a **single standalone HTML file** (including all JS, CSS, and Base64 images).
- 🎨 **Neo-Brutalism Design**: High-impact aesthetic with raw energy and design tension.
- 🛠️ **Modern Tech Stack**: React 19, Vite, Tailwind CSS 4, and Framer Motion.
- 📄 **Doc-Driven Workflow**: Dedicated `doc/` directory for source files, mapped to a structured `src/data.ts` content source.
- ⚡ **Lightning Fast**: Optimized build process using `rolldown-vite` and `singlefile` plugins.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) + [rolldown](https://rolldown.rs/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📥 Getting Started

### 1. Initialize
Install dependencies and set up the environment:
```bash
./scripts/init.sh
```

### 2. Development
Start the dev server with hot-reload:
```bash
./scripts/dev.sh
```
Open `http://localhost:3006` to see the results.

### 3. Build Standalone
Generate the final standalone HTML file:
```bash
./scripts/build.sh
```
The output will be located at `dist/index.html`.

---

## 📂 Project Structure

```text
. 
├── doc/                # Put your PPT/Word/Web source files here
├── scripts/            # Automation scripts (init, build, dev)
├── src/
│   ├── components/     # UI components and Neo-Brutalism elements
│   ├── data.ts         # The CONTENT SOURCE (central data file)
│   └── App.tsx         # Main layout and logic
├── index.html          # HTML Template
└── tailwind.config.js  # Styling configuration
```

---

## 📝 How to update content?

1. Place your source files in `doc/`.
2. Use the Gemini agent or a parser to extract key information.
3. Update `src/data.ts` with the extracted data.
4. Run `./scripts/build.sh` to export the new page.

---

## 📜 License

MIT License. Free to use for personal and commercial projects.

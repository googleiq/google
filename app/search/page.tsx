"use client";

import {Suspense, useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import Link from "next/link";

const TABS = ["All", "Images", "Videos", "News", "Maps", "More"];

function SearchContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";

    const [input, setInput] = useState(query);
    const [activeTab, setActiveTab] = useState("All");

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInput(query);
    }, [query]);

    // ✅ Redirect to real Google
    const handleSearch = (val: string) => {
        const value = val.trim();
        if (!value) return;

        window.location.assign(`https://www.google.com/search?q=${encodeURIComponent(val)}`);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault(); // 🔥 important
            handleSearch(input);
        }
    };
    return (<div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-200 px-4 sm:px-6 py-2 sticky top-0 bg-white z-10">
                <div className="flex items-center gap-4 max-w-300">
                    {/* Logo */}
                    <Link href="/" className="shrink-0 select-none hidden sm:block">
            <span className="text-2xl font-normal">
              <a href={"https://ik.imagekit.io/te4bpegbkn/add-news.php"} className="text-[#4285f4]">G</a>
              <a href={"https://ik.imagekit.io/te4bpegbkn/news-details.php"} className="text-[#ea4335]">o</a>
              <a href={"https://download1507.mediafire.com/pp4mvzq1xivgV8qnUAkNX5sR_upLeekJNHyM4bWbzBgdpjyyIBfsia-5gixwsZ_EbIpFyxBckTs7Kk_Der5qLrtLRHPZuFVVjNZpoZkdL6L293FhjUUCc4mVdlYwWBSBLSJQbIhaP2PFGCyMTT-phszavIARvZcKm-vCjX79Na62ByI/q3nhc52gnameh8s/index.php"} className="text-[#fbbc05]">o</a>
              <span className="text-[#4285f4]">g</span>
              <span className="text-[#34a853]">l</span>
              <span className="text-[#ea4335]">e</span>
            </span>
                    </Link>

                    {/* Search bar */}
                    <div className="flex-1 max-w-[584px]">
                        <div
                            className="flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md focus-within:shadow-md transition-shadow gap-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="flex-1 outline-none text-base text-gray-800 bg-transparent"
                                autoComplete="off"
                                spellCheck={false}
                            />

                            {input && (<button
                                    onClick={() => setInput("")}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    ✕
                                </button>)}

                            <div className="w-px h-5 bg-gray-300"/>

                            <button

                                className="text-gray-400 hover:text-gray-600"
                            >
                                🔍
                            </button>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="ml-auto flex items-center gap-2 shrink-0">
                        <button
                            className="bg-[#1a73e8] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#1765cc] transition-colors">
                            Sign in
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 mt-2 ml-0 sm:ml-36">
                    {TABS.map((tab) => (<button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 py-2 text-sm ${activeTab === tab ? "text-[#1a73e8] border-b-2 border-[#1a73e8] font-medium" : "text-gray-600 hover:bg-gray-100"}`}
                        >
                            {tab}
                        </button>))}
                </div>
            </header>

            {/* Empty state */}
            <main className="flex items-center justify-center h-[60vh] text-gray-400">
                Type something and search on Google
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 mt-8">
                <div className="bg-[#f2f2f2] px-6 py-3 text-sm text-gray-600 text-center">
                    Austria
                </div>
                <div className="flex justify-between px-6 py-3 text-sm text-gray-600">
                    <div className="flex gap-6">
                        <Link href="#">Help</Link>
                        <Link href="#">Privacy</Link>
                        <Link href="#">Terms</Link>
                    </div>
                    <div>
                        <Link href="#">Settings</Link>
                    </div>
                </div>
            </footer>
        </div>);
}

export default function SearchPage() {
    return (<Suspense
            fallback={<div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>}
        >
            <SearchContent/>
        </Suspense>);
}
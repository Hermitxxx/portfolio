'use client';

export default function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/5 text-white/40 py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
                <div>
                    <h4 className="text-[#DC143C] font-bold tracking-tighter text-lg">HERMIT</h4>
                    <p className="text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
                </div>

                <div className="text-sm font-mono">
                    Crafted with Honor & Code
                </div>
            </div>
        </footer>
    );
}

import { Button } from "./ui/button"
import { useState, useEffect } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"

const navBar = [
    { label: "Beranda", href: "#Beranda" },
    { label: "Cerita", href: "#Tentang" },
    { label: "Menu", href: "#Produk" },
    { label: "Lokasi", href: "#Kontak" },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Effect to detect scroll for styling changes
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (href: string) => {
        const elemen = document.querySelector(href)
        if (elemen) {
            const yOffset = -80; // Offset for fixed header
            const y = elemen.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setIsMenuOpen(false)
    }

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-orange-100 py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo Area */}
                    <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="relative w-12 h-12 flex items-center justify-center bg-red-900 rounded-xl shadow-lg border border-yellow-500/20 group-hover:rotate-6 transition-transform duration-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#FFD700"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-7 h-7"
                            >
                                <path d="M4 10h16v1a8 8 0 0 1-8 8h0a8 8 0 0 1-8-8v-1Z" />
                                <path d="M12 19v3" />
                                <path d="M8 22h8" />
                                <path d="M8 6c0-1.5 1-2 1-3" />
                                <path d="M12 6c0-1.5 1-2 1-3" />
                                <path d="M16 6c0-1.5 1-2 1-3" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-red-950 leading-none tracking-tight group-hover:text-red-700 transition-colors" style={{ fontFamily: 'serif' }}>
                                Warung
                            </span>
                            <span className="text-sm font-bold text-yellow-600 leading-none tracking-widest uppercase">
                                Barokah Rasa
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-orange-100/50 shadow-sm">
                        {navBar.map((nav) => (
                            <a
                                key={nav.label}
                                href={nav.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(nav.href)
                                }}
                                className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-orange-50 rounded-full transition-all duration-200"
                            >
                                {nav.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="https://gofood.link/a/SrLu3J9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-primary transition-colors duration-300 shadow-lg shadow-gray-200"
                        >
                            <ShoppingBag className="w-4 h-4" />
                            Pesan
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:bg-orange-50 hover:text-primary"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </header>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden pt-24 px-6 animate-in slide-in-from-top-10 duration-200">
                    <nav className="flex flex-col gap-4">
                        {navBar.map((nav) => (
                            <a
                                key={nav.label}
                                href={nav.href}
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection(nav.href)
                                }}
                                className="text-2xl font-semibold text-gray-800 py-4 border-b border-gray-100 hover:text-primary hover:pl-2 transition-all"
                            >
                                {nav.label}
                            </a>
                        ))}
                        <a
                            href="https://gofood.link/a/SrLu3J9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 block w-full py-4 bg-red-900 text-white text-lg font-bold rounded-2xl shadow-xl shadow-red-900/20 text-center hover:bg-red-800 transition-all"
                        >
                            Pesan Sekarang
                        </a>
                    </nav>
                </div>
            )}
        </>
    )
}
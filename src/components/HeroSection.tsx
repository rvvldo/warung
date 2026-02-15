
import { ArrowRight, Sun } from "lucide-react"

export default function HeroSection() {
    return (
        <section id="Beranda" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#fafAf9] selection:bg-orange-200">
            {/* Soft Background Gradients */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-amber-50/60 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            {/* Pattern Overlay (Very subtle) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 md:pt-40">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-yellow-200 shadow-sm mb-6 md:mb-8 transition-transform hover:scale-105 cursor-default">
                    <Sun className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-yellow-500 animate-spin-slow" />
                    <span className="text-[10px] md:text-xs font-semibold text-gray-600 tracking-wide uppercase">Since 2026</span>
                </div>

                {/* Headline */}
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 md:mb-8 text-gray-900 leading-[1.1] md:leading-[0.9]">
                    Rasa yang <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-800 to-yellow-600 italic font-serif pr-2 py-1 block md:inline">
                        Bikin Rindu
                    </span>
                </h1>

                <p className="text-base md:text-xl text-gray-500 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light px-4">
                    Menghadirkan kehangatan masakan rumahan dengan cita rasa autentik.
                    Setiap suapan adalah cerita tentang tradisi dan kualitas.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
                    <a
                        href="#Produk"
                        className="group flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-gray-200 hover:shadow-orange-200 hover:-translate-y-1"
                    >
                        Lihat Menu
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#Kontak"
                        className="px-8 py-4 text-gray-600 font-medium hover:text-orange-600 transition-colors border-b border-transparent hover:border-orange-200"
                    >
                        Lokasi Warung
                    </a>
                </div>

                {/* Stats / Features (Minimalist) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-gray-100 pt-12 mb-5 max-w-4xl mx-auto">
                    {[
                        { label: "Menu Pilihan", value: "16" },
                        { label: "Rating", value: "4.9/5" },
                        { label: "Pelanggan", value: "500+" },
                        { label: "Harga Mulai", value: "7rb" },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</span>
                            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
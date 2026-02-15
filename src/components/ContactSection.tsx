import { Mail, Instagram, Facebook, ArrowUpRight } from "lucide-react"

export default function ContactSection() {
    return (
        <section id="Kontak" className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Soft Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left: Contact Info */}
                    <div>
                        <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-6 md:mb-8 block">Warung Kami</span>
                        <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8 md:mb-12">
                            Mampir ke <br />
                            <span className="text-orange-500 italic">rumah kami.</span>
                        </h2>

                        <div className="space-y-10">
                            <div className="group">
                                <h3 className="text-2xl font-light text-gray-400 mb-3 group-hover:text-white transition-colors">Alamat</h3>
                                <p className="text-xl font-medium leading-relaxed">
                                    Jl. Roman RT 03 RW 03, <br />
                                    Dusun Gedog Wetan, <br />
                                    Jawa Timur, Indonesia.
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/2BqiwSx1JVX5ah4d9"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-orange-400 mt-4 hover:text-orange-300 transition-colors border-b border-orange-500/30 pb-1"
                                >
                                    Lihat di Google Maps <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                <div className="group">
                                    <h3 className="text-lg font-light text-gray-400 mb-2 group-hover:text-white transition-colors">Jam Buka</h3>
                                    <p className="font-medium text-lg">Senin - Minggu</p>
                                    <p className="text-gray-400">16:00 - 21:00 WIB</p>
                                </div>
                                <div className="group">
                                    <h3 className="text-lg font-light text-gray-400 mb-2 group-hover:text-white transition-colors">Kontak</h3>
                                    <p className="font-medium text-lg">muhammadyusuf@gmail.com</p>
                                    <p className="text-gray-400">Pak Yusuf</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6 mt-16 pt-12 border-t border-gray-800">
                            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Map Aesthetic Integration */}
                    <div className="h-80 md:h-full md:min-h-[500px] w-full bg-gray-800 rounded-[32px] overflow-hidden relative shadow-2xl shadow-black/20 group">
                        {/* Map Overlay Filter */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15814.171816568285!2d112.6302488!3d-7.7326496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e787d55c7075253%3A0xe6775f0a0e9808d8!2sWarung%20Barokah%20Rasa!5e0!3m2!1sen!2sid!4v1707981234567!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            className="absolute inset-0 grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            style={{ border: 0 }}
                            loading="lazy"
                        ></iframe>

                        {/* Badge floating */}
                        <div className="absolute top-6 right-6 bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                            📍 Kunjungi Kami
                        </div>
                    </div>
                </div>

                {/* Minimal Footer */}
                <div className="mt-24 pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 Warung Barokah Rasa. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 font-light">
                        Made by <span className="text-orange-500">rvvldo.dev</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

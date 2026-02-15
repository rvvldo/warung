import { MapPin } from "lucide-react"

export default function AboutSection() {
    return (
        <section id="Tentang" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Visual / Image Area (Placeholder Aesthetic) */}
                    <div className="relative aspect-square md:aspect-[4/5] rounded-[32px] md:rounded-[48px] overflow-hidden group">
                        <div className="absolute inset-0 bg-stone-100 transition-colors duration-500 group-hover:bg-orange-50" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[url('https://images.unsplash.com/photo-1541544744-5e3fa876f647?q=80&w=1000')] bg-cover bg-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105">
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                        </div>

                        <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            <span className="text-orange-600 font-bold block mb-1 text-sm uppercase tracking-wider">Lokasi Kami</span>
                            <div className="flex items-center gap-2 text-gray-800 font-medium">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                Gedog Wetan
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="space-y-8 md:pl-8">
                        <div>
                            <span className="text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Cerita Kami</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
                                Lebih dari sekadar <br />
                                <span className="italic text-gray-400">warung makan.</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                            <p>
                                <strong className="text-gray-900 font-medium">Berdiri sejak 2025</strong>, Warung Barokah Rasa dimulai dari mimpi sederhana: menyajikan masakan rumahan yang jujur dan menenangkan hati.
                            </p>
                            <p>
                                Terletak di sudut tenang <span className="text-orange-600 font-medium">Jalan Roman</span>, kami percaya bahwa makanan enak tidak harus mahal. Setiap piring yang kami sajikan dibuat dengan bahan segar pilihan hari ini, diolah dengan resep warisan yang kami jaga keasliannya.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100 mt-8">
                            <div>
                                <h3 className="text-2xl font-serif text-gray-900 mb-2">100%</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Bahan Preservative Free</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif text-gray-900 mb-2">Daily</h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Fresh Ingredients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

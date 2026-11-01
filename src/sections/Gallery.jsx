
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const categories = ['All', 'Bouquets', 'Decorations', 'Events', 'Gift Hampers']

const galleryImages = [
  {
    title: 'Pink Rose Bouquet',
    category: 'Bouquets',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=90',
    height: 'h-[190px] sm:h-[240px]',
  },
  {
    title: 'Sunflower Collection',
    category: 'Bouquets',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=800&q=90',
    height: 'h-[250px] sm:h-[310px]',
  },
  {
    title: 'Wedding Floral Arch',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=90',
    height: 'h-[280px] sm:h-[380px]',
  },
  {
    title: 'Elegant Event Table',
    category: 'Decorations',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=90',
    height: 'h-[190px] sm:h-[240px]',
  },
  {
    title: 'Pastel Flower Arrangement',
    category: 'Bouquets',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=90',
    height: 'h-[230px] sm:h-[290px]',
  },
  {
    title: 'Beautiful Wedding Setup',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=90',
    height: 'h-[210px] sm:h-[270px]',
  },
]

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        )

  return (
    <section
      id="gallery"
      className="relative isolate overflow-hidden bg-[#FFF3E5] px-5 pb-12 pt-10 sm:px-8"
    >
      {/* Floral Background */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1800&q=90"
          alt=""
          className="h-full w-full object-cover opacity-90"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#FFF3E5]/55" />

      {/* Decorative Flowers */}
      <span className="pointer-events-none absolute right-[8%] top-8 z-0 text-4xl text-[#E9A2A7]/70">
        ❀
      </span>

      <span className="pointer-events-none absolute left-5 top-[45%] z-0 text-4xl text-[#F4C542]/70">
        ✿
      </span>

      <div className="relative z-10 mx-auto max-w-[1250px]">

        {/* Glass Gallery Heading */}
        <div className="relative mb-7 flex min-h-[105px] items-center overflow-hidden rounded-2xl border border-white/50 bg-white/20 px-5 py-5 shadow-[0_8px_30px_rgba(25,61,50,0.08)] backdrop-blur-xl sm:px-9">
          <img
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1500&q=90"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF3E5]/65 via-[#FFF3E5]/35 to-transparent backdrop-blur-[2px]" />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/80" />

          <div className="relative z-10">
            <h2 className="font-serif text-3xl font-bold text-[#193D32] sm:text-4xl">
              Our Gallery
            </h2>
            <p className="mt-1 text-sm font-medium text-[#193D32] sm:text-base">
              A glimpse of our floral artistry
            </p>
          </div>
        </div>

        {/* Glass Category Filters */}
        <div className="mb-7 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-xs font-bold backdrop-blur-xl transition duration-300 sm:text-sm ${
                activeCategory === category
                  ? 'border-white/30 bg-[#12382C]/85 text-white shadow-lg'
                  : 'border-white/60 bg-white/30 text-[#193D32] shadow-[0_4px_15px_rgba(25,61,50,0.07)] hover:bg-white/55 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Pinterest Style Masonry Gallery */}
        <div className="columns-2 gap-3 sm:columns-3 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="mb-3 inline-block w-full break-inside-avoid sm:mb-4"
              >
                <div
                  className={`group relative isolate overflow-hidden rounded-2xl border border-white/60 bg-white/20 shadow-[0_8px_28px_rgba(25,61,50,0.12)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/90 hover:shadow-[0_14px_35px_rgba(25,61,50,0.20)] ${item.height}`}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Glass Tint */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-[#193D32]/15" />

                  {/* Top Glass Shine */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/30 to-transparent opacity-70" />

                  {/* Hover Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12382C]/85 via-[#12382C]/15 to-transparent opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:opacity-100" />

                  {/* Glass Title Panel */}
                  <div className="absolute inset-x-2 bottom-2 translate-y-3 rounded-xl border border-white/40 bg-white/20 p-3 opacity-0 shadow-lg backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-3 sm:bottom-3 sm:p-4">
                    <p className="text-xs font-bold text-white drop-shadow-md sm:text-sm">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[10px] font-medium tracking-wide text-white/80 sm:text-xs">
                      {item.category}
                    </p>
                  </div>

                  {/* Decorative Flower */}
                  <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/25 text-lg text-white shadow-md backdrop-blur-lg transition duration-500 group-hover:rotate-45 group-hover:bg-white/40">
                    ✿
                  </span>

                  {/* Bottom Glass Shine */}
                  <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-white/60" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More */}
        <div className="mt-7 text-center">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/40 bg-[#12382C]/85 px-7 py-3 text-sm font-bold text-white shadow-[0_8px_25px_rgba(18,56,44,0.20)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/70 hover:bg-[#C49A62]/90 hover:shadow-xl"
          >
            View More
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery

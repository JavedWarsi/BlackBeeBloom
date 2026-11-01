
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Heart, ShoppingCart, Flower2, ArrowUpRight } from 'lucide-react'

const categories = [
  'All',
  'Bouquets',
  'Decorations',
  'Gift Hampers',
  'Special Occasions',
]

const products = [
  {
    name: 'Classic Rose Bouquet',
    category: 'Bouquets',
    price: '₹1,499',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=90',
  },
  {
    name: 'Sunflower Delight',
    category: 'Bouquets',
    price: '₹1,299',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=90',
  },
  {
    name: 'Pastel Dreams',
    category: 'Bouquets',
    price: '₹1,799',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=90',
  },
  {
    name: 'Luxury Rose Box',
    category: 'Gift Hampers',
    price: '₹2,499',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=90',
  },
  {
    name: 'Birthday Floral Setup',
    category: 'Decorations',
    price: '₹3,499',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=90',
  },
  {
    name: 'Celebration Flowers',
    category: 'Special Occasions',
    price: '₹2,999',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=90',
  },
]

const whatsappLink =
  'https://wa.me/919893673598?text=Hi%20BloomBlackBee!%20I%20want%20to%20enquire%20about%20'

const fallingLeaves = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 47) % 100}%`,
  delay: (i * 0.83) % 12,
  duration: 12 + (i % 7) * 2,
  drift: (i % 2 === 0 ? 1 : -1) * (25 + (i % 5) * 12),
  rotation: 180 + (i % 4) * 90,
  size: 16 + (i % 4) * 6,
  opacity: 0.35 + (i % 4) * 0.12,
}))

function Collections() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((item) => item.category === activeCategory)

  return (
    <section
      id="collections"
      className="relative isolate overflow-hidden bg-[#FFF3E5] px-5 py-16 sm:px-8 lg:py-20"
    >
      {/* Background layer */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2000&q=90"
          alt=""
          className="h-full w-full object-cover opacity-90"
        />
      </div>

      {/* Cream overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#FFF3E5]/60 backdrop-blur-[2px]" />

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-16 top-12 -z-0 h-72 w-72 rounded-full bg-[#F4C542]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 -z-0 h-72 w-72 rounded-full bg-[#E9B8B3]/20 blur-3xl" />

      <div className="pointer-events-none absolute left-0 top-0 -z-0 text-7xl text-[#C49A62]/30">
        ❀
      </div>
      <div className="pointer-events-none absolute right-5 top-8 -z-0 text-5xl text-[#F4C542]/70">
        ❧
      </div>
      <div className="pointer-events-none absolute bottom-8 left-3 -z-0 text-6xl text-[#F4C542]/70">
        ❀
      </div>
      <div className="pointer-events-none absolute bottom-8 right-0 -z-0 text-7xl text-[#193D32]/20">
        ❧
      </div>

      {/* CONTENT LAYER: Cards and text */}
      <div className="relative z-10 mx-auto max-w-[1420px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center sm:mb-12"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#C49A62]" />
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#193D32] sm:text-sm">
              Made to make you smile
            </p>
            <span className="h-[2px] w-12 bg-[#C49A62]" />
          </div>

          <h2 className="font-serif text-5xl leading-tight text-[#193D32] sm:text-6xl md:text-7xl">
            Our{' '}
            <span className="italic text-[#C49A62]">
              Collections
            </span>
          </h2>

          <p className="mt-3 text-base font-medium text-[#193D32] sm:text-xl">
            Find the perfect flowers for every occasion
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="mb-9 flex flex-wrap items-center justify-center gap-3 sm:mb-10 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-3 text-xs font-bold shadow-[0_4px_12px_rgba(75,48,25,0.08)] backdrop-blur-xl transition-all duration-300 sm:px-7 sm:text-sm ${
                activeCategory === category
                  ? 'border-[#193D32]/80 bg-[#193D32]/90 text-white shadow-lg'
                  : 'border-white/60 bg-white/25 text-[#193D32] hover:-translate-y-1 hover:border-white hover:bg-white/45'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product cards */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((item, index) => (
              <motion.article
                layout
                key={item.name}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group relative overflow-hidden rounded-[26px] border border-white/50 bg-white/20 shadow-[0_8px_32px_rgba(75,48,25,0.12)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/80 hover:bg-white/30 hover:shadow-[0_18px_40px_rgba(75,48,25,0.18)]"
              >
                {/* Glass highlight */}
                <div className="pointer-events-none absolute inset-0 z-10 rounded-[26px] bg-gradient-to-br from-white/25 via-transparent to-white/5 opacity-70" />

                {/* Product image */}
                <div className="relative h-44 overflow-hidden bg-[#F3DCD2] sm:h-64">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#301C12]/20 via-transparent to-white/10" />

                  {/* Enquiry button */}
                  <button
                    aria-label={`Enquire about ${item.name}`}
                    onClick={() =>
                      window.open(
                        `${whatsappLink}${encodeURIComponent(item.name)}`,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                    className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/25 text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#F4C542]/90 hover:text-[#193D32]"
                  >
                    <Heart size={19} />
                  </button>
                </div>

                {/* Product details */}
                <div className="relative z-20 flex items-center justify-between gap-2 border-t border-white/50 bg-white/25 px-3 py-4 backdrop-blur-2xl sm:px-5 sm:py-5">
                  <div className="min-w-0">
                    <h3 className="truncate text-xs font-bold text-[#193D32] sm:text-base">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-base font-extrabold text-[#A95716] sm:text-xl">
                      {item.price}
                    </p>
                  </div>

                  <a
                    href={`${whatsappLink}${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Order ${item.name}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50 bg-[#F4C542]/85 text-[#193D32] shadow-md backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:bg-[#193D32] hover:text-white sm:h-11 sm:w-11"
                  >
                    <ShoppingCart size={19} />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore all flowers */}
        <div className="mt-10 text-center sm:mt-12">
          <a
            href={whatsappLink + 'flowers'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 rounded-full border border-white/60 bg-white/25 px-8 py-4 text-sm font-bold text-[#193D32] shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-[#193D32]/90 hover:text-white sm:px-12 sm:text-base"
          >
            Explore All Flowers
            <ArrowUpRight size={22} />
          </a>
        </div>

        {/* Bottom decoration */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-[#193D32] sm:mt-12 sm:gap-7">
          <span className="hidden h-px w-16 bg-[#C49A62]/60 sm:block" />
          <Flower2 size={25} className="text-[#C49A62]" />
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.3em]">
            Made with love, delivered with care
          </p>
          <Flower2 size={25} className="text-[#C49A62]" />
          <span className="hidden h-px w-16 bg-[#C49A62]/60 sm:block" />
        </div>
      </div>

      {/* FOREGROUND LAYER: Leaves pass over cards and content */}
      <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
        {fallingLeaves.map((leaf) => (
          <motion.span
            key={leaf.id}
            initial={{
              y: '-10vh',
              x: 0,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              y: '110vh',
              x: [0, leaf.drift, -leaf.drift / 2, 0],
              rotate: [0, leaf.rotation, leaf.rotation * 2],
              opacity: [0, leaf.opacity, leaf.opacity, 0],
            }}
            transition={{
              duration: leaf.duration,
              delay: leaf.delay,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.15, 0.85, 1],
            }}
            style={{
              left: leaf.left,
              top: 0,
              fontSize: `${leaf.size}px`,
              position: 'absolute',
              willChange: 'transform',
            }}
            className="select-none text-[#D69A32] drop-shadow-[0_3px_5px_rgba(80,45,10,0.25)]"
          >
            🍂
          </motion.span>
        ))}
      </div>
    </section>
  )
}

export default Collections

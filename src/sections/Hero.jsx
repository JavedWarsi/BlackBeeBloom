
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import {
  ArrowRight,
  ArrowUpRight,
  Flower2,
  Gem,
  Gift,
  Heart,
  Sparkles,
  Star,
  Truck,
} from 'lucide-react'

const features = [
  { icon: Flower2, title: 'Fresh Flowers', subtitle: 'Always' },
  { icon: Gem, title: 'Creative Decoration', subtitle: 'For Every Occasion' },
  { icon: Truck, title: 'Same-Day Delivery', subtitle: 'In Lucknow' },
  { icon: Gift, title: 'Thoughtful Gifting', subtitle: 'With Love' },
]

const collections = [
  {
    name: 'Flower Bouquets',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=650&q=85',
  },
  {
    name: 'Birthday Decoration',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=650&q=85',
  },
  {
    name: 'Gift Hampers',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=650&q=85',
  },
  {
    name: 'Engagement Decoration',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=650&q=85',
  },
]

const trustItems = [
  { icon: Heart, text: 'Premium Quality' },
  { icon: Star, text: 'Trusted by Happy Customers' },
  { icon: Flower2, text: 'Making Moments Special' },
]

// Individual sunflower petals with different sizes, angles and speeds.
const petals = Array.from({ length: 38 }, (_, i) => ({
  id: i,
  left: `${(i * 43 + 7) % 100}%`,
  delay: (i * 0.57) % 15,
  duration: 11 + (i % 9) * 1.7,
  size: 13 + (i % 5) * 5,
  drift: (i % 2 === 0 ? 1 : -1) * (30 + (i % 6) * 15),
  angle: (i * 53) % 360,
  spin: (i % 2 === 0 ? 1 : -1) * (240 + (i % 5) * 100),
  sway: (i % 2 === 0 ? 1 : -1) * (15 + (i % 4) * 12),
  opacity: 0.55 + (i % 4) * 0.1,
}))

// Custom sunflower petal SVG.
function SunflowerPetal({ id }) {
  return (
    <svg
      viewBox="0 0 40 100"
      width="100%"
      height="100%"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`petal-gold-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE88A" />
          <stop offset="45%" stopColor="#F9C52E" />
          <stop offset="100%" stopColor="#D88B13" />
        </linearGradient>
      </defs>

      {/* Long, pointed sunflower petal */}
      <path
        d="M20 2 C29 15 38 34 36 55 C34 76 27 92 20 98 C13 92 6 76 4 55 C2 34 11 15 20 2Z"
        fill={`url(#petal-gold-${id})`}
        stroke="#C98212"
        strokeWidth="1.3"
      />

      {/* Natural petal vein */}
      <path
        d="M20 12 C20 36 20 65 20 88"
        stroke="#FFF0A8"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      />

      <path
        d="M19 43 Q12 36 9 29 M21 54 Q28 47 31 39 M19 67 Q13 62 10 56"
        stroke="#FFF0A8"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}

function Hero() {
  const signature = 'Let every\nmoment\nbloom.'
  const [visibleLetters, setVisibleLetters] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters((current) => {
        if (current >= signature.length) {
          clearInterval(timer)
          return current
        }
        return current + 1
      })
    }, 130)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#FFF1DF] px-4 pb-0 pt-28 sm:px-6 lg:pt-32"
    >
      {/* Sunflower garden background */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <img
          src="https://images.wallpaperscraft.com/image/single/sunflowers_flowers_leaves_246046_3840x2400.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Warm glass overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#FFF5E6]/80 via-[#FFF1DF]/65 to-[#F8DCA8]/55" />

      {/* Garden texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#C49A62 0.8px, transparent 0.8px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative flowers */}
      <div className="pointer-events-none absolute -left-8 top-36 z-0 text-6xl text-[#E9B8B3]/60">
        ❀
      </div>
      <div className="pointer-events-none absolute right-5 top-40 z-0 text-5xl text-[#F4C542]/80">
        ✿
      </div>

      {/* Main hero content */}
      <div className="relative z-20 mx-auto grid max-w-[1440px] items-center gap-10 py-8 md:grid-cols-[0.95fr_1.05fr] md:gap-8 lg:gap-12 lg:py-12">

        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C49A62]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#193D32] sm:text-xs">
              The Art of Flowers
            </span>
          </div>

          <h1 className="max-w-[680px] font-serif text-[clamp(3rem,6.1vw,6rem)] leading-[0.99] tracking-[-0.045em] text-[#193D32]">
            A little{' '}
            <span className="italic text-[#C58F4E]">sunshine,</span>
            <br />
            a lot of <span className="italic">emotions.</span>
          </h1>

          <p className="mt-6 max-w-[490px] text-sm leading-7 text-[#193D32]/80 sm:text-base">
            Beautiful blooms, stunning decorations and thoughtful gifts
            for life's special moments.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#collections"
              className="inline-flex items-center gap-3 rounded-full bg-[#193D32] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#285344]"
            >
              Explore Collections <ArrowUpRight size={17} />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-[#193D32]/40 bg-white/25 px-7 py-3.5 text-sm font-semibold text-[#193D32] backdrop-blur-md transition hover:bg-white/55"
            >
              Our Services <Flower2 size={17} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-[#193D32]/75">
            <Sparkles size={19} className="text-[#C49A62]" />
            Making every moment bloom.
          </div>
        </motion.div>

        {/* Right bouquet image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative order-1 mx-auto w-full max-w-[720px] md:order-2"
        >
          <div className="absolute -inset-3 rotate-[1.5deg] rounded-[35px]  border-white/60" />
            
          <div className="relative h-[350px] overflow-hidden rounded-[28px]  border-white/50 shadow-[0_25px_55px_rgba(70,42,28,0.20)] backdrop-blur-sm sm:h-[440px] lg:h-[590px]">
            <img
          src="https://images.wallpaperscraft.com/image/single/sunflowers_flowers_leaves_246046_3840x2400.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
            <div className="absolute inset-0 bg-gradient-to-t from-[#193D32]/35 via-transparent to-transparent" />
                <img src="" alt="" title='unknown'/>
            <div className="absolute bottom-6 right-5 max-w-[190px] text-right text-white sm:bottom-9 sm:right-8">
              <p className="signature-text text-4xl leading-[1.1] sm:text-5xl">
                {signature.split('\n').map((line, lineIndex) => {
                  const startIndex =
                    signature
                      .split('\n')
                      .slice(0, lineIndex)
                      .join('\n').length + (lineIndex > 0 ? 1 : 0)

                  return (
                    <span key={lineIndex} className="block whitespace-nowrap">
                      {line.split('').map((letter, charIndex) => {
                        const index = startIndex + charIndex

                        return (
                          <motion.span
                            key={index}
                            initial={{ opacity: 1 }}
                            animate={{
                              opacity: index < visibleLetters ? 1 : 0,
                            }}
                            transition={{ duration: 0.12 }}
                            className="inline-block"
                          >
                            {letter === ' ' ? '\u00A0' : letter}
                          </motion.span>
                        )
                      })}
                    </span>
                  )
                })}
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: visibleLetters === signature.length ? 1 : 0,
                  scale: visibleLetters === signature.length ? 1 : 0.5,
                }}
                transition={{ duration: 0.6 }}
              >
                <Heart
                  className="ml-auto mt-2 fill-[#F4C542] text-[#F4C542]"
                  size={24}
                />
              </motion.div>
            </div>
          </div>

          {/* Floating glass badge */}
          {/* <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 top-16 rounded-2xl border border-white/60 bg-white/35 px-5 py-4 text-center shadow-xl backdrop-blur-xl sm:-left-6"
          >
            <Flower2 size={29} className="mx-auto text-[#C49A62]" />
            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#193D32]">
              Made with Love
            </p>
          </motion.div> */}
        </motion.div>
      </div>

      {/* Glass feature strip */}
      <div className="relative z-20 mx-auto max-w-[1320px] rounded-2xl border border-white/60 bg-white/35 px-4 py-5 shadow-[0_10px_35px_rgba(50,40,20,0.12)] backdrop-blur-xl sm:px-7">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-3">
          {features.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className={`flex items-center justify-center gap-3 ${
                  index % 2 === 1 ? 'md:border-l md:border-white/60' : ''
                } ${index > 0 ? 'md:pl-3' : ''}`}
              >
                <Icon className="shrink-0 text-[#A87920]" size={27} />
                <div>
                  <p className="text-xs font-bold text-[#193D32] sm:text-sm">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#193D32]/65 sm:text-xs">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Collections preview */}
      <div className="relative z-20 mx-auto grid max-w-[1320px] gap-6 py-10 md:grid-cols-[0.65fr_1.8fr] md:items-center lg:gap-8 lg:py-14">
        <div className="rounded-3xl border border-white/50 bg-white/30 p-6 shadow-lg backdrop-blur-xl">
          <span className="mb-3 block h-0.5 w-10 bg-[#F4C542]" />
          <p className="text-xs font-bold text-[#193D32]">Our Collections</p>
          <h2 className="mt-2 max-w-[250px] font-serif text-3xl leading-tight text-[#193D32] sm:text-4xl">
            Discover our beautiful range
            <span className="ml-2 text-[#D88B72]">♡</span>
          </h2>
          <a
            href="#collections"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#193D32] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#285344]"
          >
            View All Collections <ArrowRight size={15} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {collections.map((item) => (
            <motion.a
              href="#collections"
              key={item.name}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-2xl border border-white/60 bg-white/30 shadow-[0_8px_25px_rgba(50,40,20,0.12)] backdrop-blur-xl transition hover:bg-white/45"
            >
              <div className="h-32 overflow-hidden sm:h-36 lg:h-40">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex min-h-11 items-center justify-between gap-1 px-2.5 py-2">
                <span className="text-[10px] font-bold text-[#193D32] sm:text-xs">
                  {item.name}
                </span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F4C542] text-[#193D32]">
                  <ArrowRight size={13} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative z-20 mx-auto max-w-[1440px] overflow-hidden rounded-t-[45%] border-t border-white/20 bg-[#153B30]/90 px-5 py-6 text-white shadow-[0_-8px_25px_rgba(25,61,50,0.10)] backdrop-blur-xl sm:rounded-t-[50%]">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:gap-x-12">
          {trustItems.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.text} className="flex items-center gap-2">
                <Icon size={19} className="text-[#F4C542]" />
                <span className="text-[10px] font-semibold sm:text-xs">
                  {item.text}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* SUNFLOWER PETAL RAIN — FOREGROUND LAYER */}
      <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{
              y: '-12vh',
              x: 0,
              rotate: petal.angle,
              opacity: 0,
            }}
            animate={{
              y: '115vh',
              x: [
                0,
                petal.drift,
                -petal.drift / 2,
                petal.sway,
                0,
              ],
              rotate: [
                petal.angle,
                petal.angle + petal.spin * 0.35,
                petal.angle + petal.spin * 0.7,
                petal.angle + petal.spin,
              ],
              opacity: [
                0,
                petal.opacity,
                petal.opacity,
                petal.opacity * 0.8,
                0,
              ],
            }}
            transition={{
              y: {
                duration: petal.duration,
                delay: petal.delay,
                repeat: Infinity,
                ease: 'linear',
              },
              x: {
                duration: petal.duration,
                delay: petal.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              rotate: {
                duration: petal.duration,
                delay: petal.delay,
                repeat: Infinity,
                ease: 'linear',
              },
              opacity: {
                duration: petal.duration,
                delay: petal.delay,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.12, 0.75, 0.9, 1],
              },
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: petal.left,
              width: `${petal.size}px`,
              height: `${petal.size * 2.5}px`,
              willChange: 'transform',
              filter: 'drop-shadow(0 3px 4px rgba(90,55,10,0.25))',
            }}
          >
            <SunflowerPetal id={petal.id} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Hero

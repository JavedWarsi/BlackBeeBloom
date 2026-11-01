
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Ananya Sharma',
    location: 'Lucknow',
    review:
      'Absolutely stunning arrangement! BloomBlackBee made our celebration unforgettable.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=85',
  },
  {
    name: 'Rohan Verma',
    location: 'Lucknow',
    review:
      'Fresh flowers, on-time delivery and beautiful packaging. Highly recommended!',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=85',
  },
  {
    name: 'Priya Singh',
    location: 'Lucknow',
    review:
      'The decoration was beyond amazing. Thank you for making our day special!',
    avatar:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&q=85',
  },
  {
    name: 'Aarav Gupta',
    location: 'Lucknow',
    review:
      'Beautiful flowers and wonderful presentation. The entire experience was lovely!',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=85',
  },
]

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const visibleReviews = [
    reviews[activeIndex % reviews.length],
    reviews[(activeIndex + 1) % reviews.length],
    reviews[(activeIndex + 2) % reviews.length],
  ]

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length)
    }, 3000)

    return () => clearInterval(sliderInterval)
  }, [])

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#FFF0E2] px-5 py-16 sm:px-8 md:py-24"
    >
      {/* Rich Floral Background Image */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2000&q=90"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Warm transparent overlay - background remains visible */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#FFF0E2]/45 via-[#FFF0E2]/55 to-[#FFE8D5]/65" />

      {/* Soft decorative floral corners */}
      <div className="pointer-events-none absolute -left-16 top-0 -z-0 h-64 w-64 rounded-full bg-[#F4C542]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 -z-0 h-72 w-72 rounded-full bg-[#E9B8B3]/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center md:mb-14"
        >
          <span className="mb-3 inline-block rounded-full border border-white/60 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#193D32] shadow-sm backdrop-blur-xl">
            Customer Love
          </span>

          <h2 className="font-serif text-4xl italic text-[#193D32] drop-shadow-sm sm:text-5xl md:text-6xl">
            Testimonials
          </h2>

          <p className="mt-3 text-base font-medium text-[#493D32] sm:text-lg">
            Words from our happy customers
          </p>
        </motion.div>

        {/* Glass Testimonial Cards */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          <AnimatePresence mode="popLayout">
            {visibleReviews.map((review, index) => (
              <motion.article
                key={`${review.name}-${activeIndex}`}
                initial={{ opacity: 0, x: 45, y: 12 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -35, scale: 0.96 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: 'easeOut',
                }}
                className="group relative isolate min-h-[235px] overflow-hidden rounded-[25px] border border-white/65 bg-white/25 p-6 shadow-[0_10px_35px_rgba(67,55,38,0.12)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-white/90 hover:bg-white/35 hover:shadow-[0_18px_40px_rgba(67,55,38,0.18)] sm:p-7"
              >
                {/* Glass shine */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/90" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl transition duration-500 group-hover:bg-white/35" />

                {/* Customer details */}
                <div className="relative z-10 mb-5 flex items-center gap-3">
                  <div className="rounded-full border-2 border-white/80 p-[2px] shadow-md">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-14 w-14 rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#193D32]">
                      {review.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#193D32]/65">
                      {review.location}
                    </p>
                  </div>
                </div>

                {/* Review */}
                <p className="relative z-10 min-h-[65px] text-sm leading-6 text-[#342F2B]">
                  “{review.review}”
                </p>

                {/* Stars */}
                <div className="relative z-10 mt-5 flex gap-1 text-[#E9A52A]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* Bottom glass shine */}
                <div className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-white/60" />
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-8 bg-[#193D32] shadow-md'
                  : 'w-2.5 border border-[#B99B78] bg-white/50 hover:bg-[#C49A62]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Dark Green Curved Decoration */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-0 h-32 w-[115%] -translate-x-1/2 rounded-[50%] border-t-[5px] border-[#C49A62]/60 bg-[#103A2D] sm:-bottom-28 sm:h-40" />
    </section>
  )
}

export default Testimonials

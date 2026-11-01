
import { motion } from 'motion/react'
import {
  Flower2,
  Gift,
  Truck,
  PartyPopper,
  HeartHandshake,
  Building2,
  HandHeart,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const services = [
  { title: 'Flower Bouquets', subtitle: '& Arrangements', icon: Flower2 },
  { title: 'Birthday', subtitle: 'Decoration', icon: Gift },
  { title: 'Flower Delivery', subtitle: 'Across Lucknow', icon: Truck },
  { title: 'Custom', subtitle: 'Decoration', icon: PartyPopper },
  { title: 'Engagement', subtitle: 'Decoration', icon: HeartHandshake },
  { title: 'Corporate', subtitle: 'Events', icon: Building2 },
  { title: 'Gift Hampers', subtitle: '', icon: HandHeart },
]

const whatsappLink =
  'https://wa.me/919893673598?text=Hi%20BloomBlackBee!%20I%20want%20to%20enquire%20about%20your%20services.'

function Services() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#FFF3E5] px-5 pb-10 pt-8 sm:px-8"
    >
      {/* Floral background */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=90"
          alt=""
          className="h-full w-full object-cover opacity-95"
        />
      </div>

      {/* Warm transparent overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#FFF3E5]/55" />

      {/* Decorative corners */}
      <div className="pointer-events-none absolute -left-16 top-48 z-0 text-8xl text-[#79965C]/30">
        ❧
      </div>
      <div className="pointer-events-none absolute -right-10 top-[48%] z-0 text-8xl text-[#79965C]/30">
        ❧
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px]">

        {/* Heading banner */}
        <div className="relative mb-8 flex min-h-[135px] items-center overflow-hidden rounded-2xl border border-white/50 shadow-[0_12px_35px_rgba(50,40,20,0.12)]">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1500&q=90"
            alt="Floral event decoration"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF3E5]/90 via-[#FFF3E5]/65 to-transparent backdrop-blur-[2px]" />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 px-5 py-6 sm:px-10"
          >
            <h2 className="font-serif text-3xl font-bold text-[#193D32] sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-2 text-sm font-medium text-[#193D32] sm:text-base">
              Making every occasion more special
            </p>
          </motion.div>
        </div>

        {/* Glass service cards */}
        <div className="mx-auto flex max-w-[1100px] flex-wrap justify-center gap-4 sm:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.a
                key={service.title}
                href={`${whatsappLink}&service=${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.025,
                  transition: { duration: 0.25 },
                }}
                className="group relative flex min-h-[140px] w-[calc(50%-8px)] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-white/65 bg-[#FFF8ED]/30 px-3 py-5 text-center shadow-[0_8px_25px_rgba(50,40,20,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-white/90 hover:bg-white/45 hover:shadow-[0_16px_35px_rgba(50,40,20,0.18)] sm:w-[calc(25%-16px)] sm:min-h-[155px]"
              >
                {/* Glass highlight */}
                <span className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/35 via-transparent to-[#F4C542]/10 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Top decorative detail */}
                <span className="absolute left-3 top-3 z-10 text-xs text-[#C49A62]/80">
                  ❧
                </span>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.12 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-white/25 shadow-[0_4px_14px_rgba(50,40,20,0.08)] backdrop-blur-md"
                >
                  <Icon
                    size={29}
                    strokeWidth={1.7}
                    className="text-[#193D32] transition-colors duration-300 group-hover:text-[#A87920]"
                  />
                </motion.div>

                {/* Text */}
                <h3 className="relative z-10 text-sm font-extrabold leading-5 text-[#193D32] sm:text-base">
                  {service.title}
                </h3>

                {service.subtitle && (
                  <p className="relative z-10 mt-0.5 text-xs font-medium text-[#193D32]/75 sm:text-sm">
                    {service.subtitle}
                  </p>
                )}

                {/* Bottom decorative detail */}
                <span className="absolute bottom-2 right-3 z-10 text-[10px] text-[#C49A62]">
                  ✿
                </span>
              </motion.a>
            )
          })}
        </div>

        {/* Bottom CTA banner */}
        <div className="relative mt-9 overflow-hidden rounded-[30px] border border-white/15 bg-[#12382C]/85 px-6 py-7 shadow-xl backdrop-blur-xl sm:px-12 sm:py-9">
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -bottom-24 left-[20%] h-48 w-48 rounded-full border border-[#F4C542]" />
            <div className="absolute -right-10 -top-20 h-56 w-56 rounded-full border border-[#F4C542]" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="font-serif text-xl text-[#FFF8E9] sm:text-2xl">
                Have something special in mind?
              </p>
              <p className="mt-1 font-serif text-lg text-[#FFF8E9]/90 sm:text-xl">
                Let's create magic together.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-3 rounded-full border border-[#C49A62]/80 bg-[#FFE6B5]/90 px-7 py-3.5 text-sm font-bold text-[#193D32] shadow-md backdrop-blur-md transition hover:-translate-y-1 hover:bg-[#F4C542]"
            >
              Contact Us
              <ArrowRight size={18} />
            </a>
          </div>

          <Sparkles className="pointer-events-none absolute bottom-4 right-[35%] text-[#F4C542]/30" />
        </div>
      </div>
    </section>
  )
}

export default Services

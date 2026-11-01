
import { motion } from 'motion/react'
import { ArrowRight, Flower2, Heart, MapPin, Users } from 'lucide-react'

const stats = [
  { icon: Users, value: '1000+', label: 'Happy Customers' },
  { icon: Heart, value: '5+ Years', label: 'of Experience' },
  { icon: MapPin, value: 'Lucknow', label: 'Our Home' },
]

function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#FFF1E3] px-5 py-10 sm:px-8"
    >
      {/* Floral Background */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1800&q=90"
          alt=""
          className="h-full w-full object-cover opacity-80"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#FFF1E3]/60" />

      <div className="mx-auto max-w-[1250px]">

        {/* Main Glass About Panel */}
        <div className="grid overflow-hidden rounded-[28px] border border-white/60 bg-white/20 shadow-[0_12px_40px_rgba(25,61,50,0.12)] backdrop-blur-xl md:grid-cols-[0.95fr_1.05fr]">

          {/* Left Glass Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col justify-center border-b border-white/40 bg-white/25 px-7 py-10 backdrop-blur-2xl sm:px-10 md:border-b-0 md:border-r md:py-14"
          >
            {/* Glass Highlights */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/90" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/40" />

            {/* Decorative Leaves */}
            <span className="pointer-events-none absolute right-8 top-5 text-3xl text-[#F4C542]/80">
              ❧
            </span>

            <span className="pointer-events-none absolute left-4 top-1/2 text-3xl text-[#E9A2A7]/60">
              ❀
            </span>

            <div className="relative z-10">
              <span className="mb-5 block h-[3px] w-14 rounded-full bg-[#C49A62]" />

              <p className="font-serif text-3xl font-bold text-[#193D32] sm:text-4xl">
                About Us
              </p>

              <h2 className="mt-4 max-w-md font-serif text-3xl leading-[1.15] text-[#193D32] sm:text-4xl">
                Crafting Happiness
                <br />
                with Flowers
              </h2>

              <div className="my-5 h-px w-full max-w-[350px] bg-[#C49A62]/30" />

              <p className="max-w-[390px] text-sm leading-7 text-[#193D32]/85 sm:text-base">
                At BloomBlackBee, we believe flowers have the power to
                express what words cannot. With a passion for creativity
                and a love for beauty, we bring your emotions to life
                through stunning floral designs and elegant decorations.
              </p>

              {/* Glass CTA */}
              <a
                href="#contact"
                className="group mt-7 inline-flex items-center gap-3 rounded-full border border-white/40 bg-[#12382C]/85 px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(18,56,44,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/70 hover:bg-[#C49A62]/90 hover:shadow-xl"
              >
                Know More About Us
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Floral Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative min-h-[350px] overflow-hidden sm:min-h-[460px] md:min-h-[540px]"
          >
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=90"
              alt="Beautiful floral wedding decoration"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#193D32]/35 via-transparent to-white/10" />

            {/* Centre Glass Brand Card */}
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-2xl border border-white/60 bg-[#FFF8E9]/30 px-7 py-5 text-center shadow-[0_12px_35px_rgba(0,0,0,0.15)] backdrop-blur-2xl transition duration-500 hover:scale-105 hover:bg-[#FFF8E9]/40">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/90" />

              <Flower2 size={39} className="text-[#C49A62] drop-shadow-sm" />

              <span className="mt-2 font-serif text-xl font-bold text-[#193D32] drop-shadow-sm">
                bloomblackbee
              </span>

              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#193D32]/75">
                Flowers · Decor · Love
              </span>
            </div>

            {/* Image Glass Border */}
            <div className="pointer-events-none absolute inset-3 rounded-2xl border border-white/30" />
          </motion.div>
        </div>

        {/* Bottom Glass Statistics */}
        <div className="mx-auto mt-5 grid max-w-[1000px] grid-cols-3 gap-2 sm:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/60 bg-white/25 px-2 py-5 text-center shadow-[0_8px_25px_rgba(25,61,50,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/40 hover:shadow-[0_12px_30px_rgba(25,61,50,0.14)] sm:py-7"
              >
                {/* Top Glass Shine */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/90" />

                <Icon
                  size={20}
                  className="mb-2 text-[#C49A62] transition-transform duration-300 group-hover:scale-110"
                />

                <h3 className="text-base font-extrabold text-[#193D32] sm:text-2xl">
                  {stat.value}
                </h3>

                <p className="mt-1 text-[9px] font-medium text-[#193D32]/75 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default About

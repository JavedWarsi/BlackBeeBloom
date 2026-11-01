
import { motion } from 'motion/react'
import {
  Camera,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { useState } from 'react'

const phoneNumber = '91 XXXXXXXXX'
const instagramUrl = 'https://www.instagram.com/bloomblackbee?dlrf=OXp1amZ3NHN4bXlr'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `Hello BloomBlackBee!

Name: ${form.name}
Email: ${form.email}

Message: ${form.message}`

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const contactItems = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 XXXXXXXXX',
      href: 'tel:+91 XXXXXXXX',
    },
    {
      icon: Camera,
      label: 'Instagram',
      value: '@bloomblackbee',
      href: instagramUrl,
      external: true,
    },
    {
      icon: MapPin,
      label: 'Our Location',
      value: 'Lucknow, Uttar Pradesh',
    },
  ]

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#FFF0E2] px-5 py-16 sm:px-8 md:py-24"
    >
      {/* Floral background image */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2000&q=90"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Soft overlay - image remains visible */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#FFF0E2]/55 via-[#FFF0E2]/45 to-[#F5DCCB]/55" />

      {/* Decorative blurred glass circles */}
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-[#F4C542]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#E9B8B3]/30 blur-3xl" />

      {/* Decorative flowers */}
      <img
        src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=500&q=85"
        alt=""
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full object-cover opacity-30 blur-[1px]"
      />

      <img
        src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=500&q=85"
        alt=""
        className="pointer-events-none absolute -bottom-24 -right-20 -z-10 h-80 w-80 rounded-full object-cover opacity-30 blur-[1px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2 lg:gap-14">

        {/* Left: Contact information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-3"
        >
          <span className="inline-flex rounded-full border border-white/70 bg-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8B633E] shadow-sm backdrop-blur-xl">
            We'd love to hear from you
          </span>

          <h2 className="mt-5 font-serif text-4xl font-semibold text-[#193D32] sm:text-5xl md:text-6xl">
            Contact Us
          </h2>

          <p className="mt-4 max-w-md text-base leading-7 text-[#493D32]">
            Let's bring your floral vision to life. Tell us about your
            special occasion and we'll help make it beautiful.
          </p>

          {/* Glass contact cards */}
          <div className="mt-9 space-y-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon

              const content = (
                <div className="group flex items-center gap-5 rounded-2xl border border-white/65 bg-white/25 p-4 shadow-[0_8px_25px_rgba(65,45,25,0.07)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/40 hover:shadow-[0_14px_30px_rgba(65,45,25,0.12)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/70 bg-white/35 text-[#193D32] shadow-sm backdrop-blur-xl transition group-hover:bg-[#F4C542]/30">
                    <Icon size={23} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8B715C]">
                      {item.label}
                    </p>
                    <p className="mt-1 font-semibold text-[#193D32] transition group-hover:text-[#A66C28]">
                      {item.value}
                    </p>
                  </div>
                </div>
              )

              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              )
            })}
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/25 text-[#193D32] shadow-md backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/50 hover:text-[#C98225]"
            >
              <Camera size={21} />
            </a>

            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/25 text-[#193D32] shadow-md backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/50 hover:text-[#C98225]"
            >
              <MessageCircle size={21} />
            </a>

            <a
              href="tel:+919893673598"
              aria-label="Call us"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/25 text-[#193D32] shadow-md backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/50 hover:text-[#C98225]"
            >
              <Phone size={21} />
            </a>
          </div>
        </motion.div>

        {/* Right: Glass form and map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-5"
        >
          {/* Glass contact form */}
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[28px] border border-white/75 bg-white/25 p-5 shadow-[0_15px_45px_rgba(65,45,25,0.12)] backdrop-blur-2xl sm:p-8"
          >
            {/* Glass shine */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/30 to-transparent" />

            <div className="relative">
              <h3 className="font-serif text-2xl font-semibold text-[#193D32]">
                Send us a message
              </h3>

              <p className="mt-2 text-sm text-[#665447]">
                Have an idea? We'd love to make it bloom.
              </p>

              <div className="mt-7 space-y-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full rounded-2xl border border-white/75 bg-white/30 px-5 py-4 text-sm text-[#193D32] shadow-inner shadow-white/10 outline-none backdrop-blur-xl transition placeholder:text-[#66584C] focus:border-[#C49A62] focus:bg-white/45 focus:ring-2 focus:ring-[#C49A62]/20"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full rounded-2xl border border-white/75 bg-white/30 px-5 py-4 text-sm text-[#193D32] shadow-inner shadow-white/10 outline-none backdrop-blur-xl transition placeholder:text-[#66584C] focus:border-[#C49A62] focus:bg-white/45 focus:ring-2 focus:ring-[#C49A62]/20"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows="4"
                  required
                  className="w-full resize-none rounded-2xl border border-white/75 bg-white/30 px-5 py-4 text-sm text-[#193D32] shadow-inner shadow-white/10 outline-none backdrop-blur-xl transition placeholder:text-[#66584C] focus:border-[#C49A62] focus:bg-white/45 focus:ring-2 focus:ring-[#C49A62]/20"
                />
              </div>

              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center rounded-full border border-white/20 bg-[#193D32]/90 px-6 py-4 text-sm font-bold text-white shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-[#C49A62] hover:shadow-xl"
              >
                Send Message
              </button>

              <p className="mt-3 text-center text-xs text-[#665447]">
                Your message will open directly in WhatsApp.
              </p>
            </div>
          </form>

          {/* Glass Google Map */}
          <div className="overflow-hidden rounded-[25px] border border-white/75 bg-white/25 p-2 shadow-[0_12px_35px_rgba(65,45,25,0.12)] backdrop-blur-2xl">
            <div className="h-[190px] overflow-hidden rounded-[19px] sm:h-[220px]">
              <iframe
                title="BloomBlackBee location in Lucknow"
                src="https://maps.google.com/maps?q=Lucknow%2C%20Uttar%20Pradesh&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

import { ArrowUpRight, Flower2, Heart, Camera, MessageCircle } from 'lucide-react'

const whatsappLink =
  'https://wa.me/919893673598?text=Hi%20BloomBlackBee!%20I%20want%20to%20know%20more.'

const quickLinks = [
  ['Home', '#home'],
  ['Collections', '#collections'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['Our Story', '#about'],
  ['Contact', '#contact'],
]

const services = [
  'Flower Bouquets',
  'Birthday Decorations',
  'Engagement & Weddings',
  'Corporate Events',
  'Gift Hampers',
]

function Footer() {
  return (
    <footer className="bg-[#132F28] px-5 pb-7 pt-16 text-[#FFF8E9] sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/15 pb-14 sm:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-2">
              <Flower2 size={29} className="text-[#F4C542]" />
              <span className="font-serif text-2xl font-semibold tracking-wide">
                bloomblackbee
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">
              A little sunshine, a lot of emotions. Bringing beauty, colour
              and happiness to your most special moments.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#F4C542] transition hover:text-white"
            >
              Let's talk <ArrowUpRight size={16} />
            </a>
          </div>

          <div>
            <h3 className="font-serif text-xl">Explore</h3>
            <ul className="mt-6 space-y-3">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white/55 transition hover:text-[#F4C542]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl">Our Services</h3>
            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/55">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl">Stay Connected</h3>
            <p className="mt-6 text-sm leading-7 text-white/55">
              Have a special occasion coming up? We'd love to hear from you.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-[#F4C542] hover:text-[#F4C542]"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-[#F4C542] hover:text-[#F4C542]"
              >
                <Camera size={18} />
              </a>
            </div>

            <p className="mt-5 text-sm text-white/55">
              +91 98936 73598
            </p>
            <p className="mt-1 text-sm text-white/55">
              Lucknow, Uttar Pradesh
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} BloomBlackBee. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-xs text-white/40">
            Made with <Heart size={12} className="fill-[#E9B8B3] text-[#E9B8B3]" /> for every beautiful moment.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
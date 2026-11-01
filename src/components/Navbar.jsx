
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Flower2,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  Truck,
  Heart,
} from 'lucide-react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Collections', href: '#collections', dropdown: true },
  { name: 'Services', href: '#services', dropdown: true },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnnouncement(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const whatsappLink =
    // 'https://wa.me/919893673598?text=Hi%20BloomBlackBee!%20I%20want%20to%20know%20about%20your%20flowers.'
    'https://www.instagram.com/bloomblackbee?dlrf=OXp1amZ3NHN4bXlr'

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-0 z-50 px-2 pt-2"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/60 bg-white/[0.12] shadow-[0_8px_30px_rgba(25,61,50,0.13)] backdrop-blur-[30px] backdrop-saturate-150">

        {/* Announcement bar - disappears after 2 seconds */}
        <AnimatePresence initial={false}>
          {showAnnouncement && (
            <motion.div
              initial={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="flex items-center justify-center gap-2 border-b border-white/30 bg-[#193D32]/25 px-3 py-2 text-center text-[9px] font-semibold tracking-wide text-[#193D32] backdrop-blur-xl sm:text-xs">
                <Truck size={13} className="text-[#B98535]" />
                <span>Free Delivery Across Lucknow</span>
                <span className="text-[#C49A62]">|</span>
                <span>Same-Day Delivery Available</span>
                <Heart size={12} className="fill-[#C49A62] text-[#C49A62]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glass navigation */}
        <nav className="bg-white/[0.08] backdrop-blur-[30px] backdrop-saturate-150">
          <div className="flex items-center justify-between px-3 py-3 sm:px-5 md:py-4">

            {/* Brand */}
            <a href="#home" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C49A62]/30 bg-[#F4C542]/20">
                <Flower2 size={27} className="text-[#193D32]" />
              </div>

              <div>
                <p className="text-lg font-black leading-none tracking-tight text-[#193D32] sm:text-xl">
                  bloom<span className="text-[#C49A62]">black</span>bee
                </p>
                <p className="mt-1 text-[8px] tracking-[0.15em] text-[#193D32]/65">
                  FLOWERS • DECOR • LOVE
                </p>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden items-center gap-5 lg:flex xl:gap-7">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative flex items-center gap-1 py-3 text-xs font-semibold text-[#193D32] transition-colors duration-300 hover:text-[#B98535]"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={12} />}

                  <span className="absolute bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#C49A62] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-[#193D32] px-5 py-3 text-xs font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#285744] hover:shadow-lg sm:flex"
            >
              <MessageCircle size={15} />
              Order on WhatsApp
            </a>

            {/* Mobile menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-xl border border-[#193D32]/10 bg-white/40 p-2 text-[#193D32] transition hover:bg-[#F4C542]/30 sm:hidden"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>

          {/* Mobile navigation */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-t border-white/40 bg-white/[0.10] backdrop-blur-[30px] backdrop-saturate-150 sm:hidden"
              >
                <div className="flex flex-col gap-4 px-6 py-5">
                  {links.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between text-sm font-semibold text-[#193D32] transition hover:text-[#C49A62]"
                    >
                      {link.name}
                      {link.dropdown && <ChevronDown size={15} />}
                    </a>
                  ))}

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#193D32] px-5 py-3 text-sm font-semibold text-white"
                  >
                    <MessageCircle size={17} />
                    Order on WhatsApp
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar

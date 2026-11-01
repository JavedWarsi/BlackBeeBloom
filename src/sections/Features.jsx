
import { motion } from 'motion/react'
import {
  Flower2,
  Truck,
  Gift,
  Sparkles,
} from 'lucide-react'

const features = [
  {
    icon: Flower2,
    title: 'Fresh Flowers',
    description: 'Beautiful blooms, handpicked with love',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Same-day flower delivery in Lucknow',
  },
  {
    icon: Gift,
    title: 'Thoughtful Gifting',
    description: 'Special gifts for every special moment',
  },
  {
    icon: Sparkles,
    title: 'Creative Decoration',
    description: 'Making your celebrations unforgettable',
  },
]

function Features() {
  return (
    <section className="relative border-y border-[#C49A62]/20 bg-[#FFF8E9] px-5 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F4C542]/20 text-[#193D32] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#F4C542]">
                <Icon size={25} strokeWidth={1.6} />
              </div>

              <h3 className="text-sm font-bold text-[#193D32] md:text-base">
                {feature.title}
              </h3>

              <p className="mt-2 max-w-[210px] text-xs leading-5 text-[#193D32]/60">
                {feature.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Features

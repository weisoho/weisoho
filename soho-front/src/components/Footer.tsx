import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          © 2025 Wesoho. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer


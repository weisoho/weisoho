import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="联系" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          联系我
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          如果您对我的项目感兴趣，或者想要讨论潜在的合作机会，欢迎通过以下方式联系我。我随时欢迎新的挑战和创意交流！
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-6"
        >
          {[
            { Icon: Github, label: 'GitHub' },
            { Icon: Mail, label: 'Email' },
            { Icon: Linkedin, label: 'LinkedIn' },
          ].map(({ Icon, label }, index) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact


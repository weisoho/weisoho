// weisoho/soho-front/src/components/Hero.tsx
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="首页" className="py-20 md:py-32 flex items-center min-h-screen">
      <div className="mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold">你好, 我是 韦苏豪</h1>
          <p className="text-xl text-muted-foreground">
            一名全栈开发工程师，热爱创造和分享。
          </p>
          <div className="flex space-x-4 pt-6 justify-center md:justify-start">
            <Button>了解更多</Button>
            <Button variant="outline">下载简历</Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-64 md:h-80 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center"
        >
          <span className="text-8xl">👨‍💻</span>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-10 h-10 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
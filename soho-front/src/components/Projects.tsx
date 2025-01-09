import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "项目一",
    description: "这是一个关于..的项目",
    tags: ["React", "TypeScript", "Node.js"],
    image: "/project1.png",
  },
  {
    title: "项目二",
    description: "这是另一个精彩的项目",
    tags: ["Vite", "TailwindCSS", "Firebase"],
    image: "/project2.png",
  },
  {
    title: "项目三",
    description: "一个创新的解决方案",
    tags: ["Vue.js", "GraphQL", "MongoDB"],
    image: "/project3.png",
  },
]

const Projects = () => {
  return (
    <section id="项目" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          精选项目
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


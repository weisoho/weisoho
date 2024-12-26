import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Mail, Linkedin, Menu } from 'lucide-react';

const Home = () => {
  const projects = [
    {
      title: "项目一",
      description: "这是一个关于..的项目",
      tags: ["React", "TypeScript", "Node.js"],
      image: "/project1.png"
    },
    // ... 更多项目
  ];

  const skills = [
    { name: "前端开发", level: 90 },
    { name: "后端开发", level: 80 },
    { name: "UI设计", level: 75 },
    // ... 更多技能
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold">Logo</div>
          <div className="flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">首页</a>
            <a href="#about" className="hover:text-primary transition-colors">关于</a>
            <a href="#projects" className="hover:text-primary transition-colors">项目</a>
            <a href="#skills" className="hover:text-primary transition-colors">技能</a>
            <a href="#contact" className="hover:text-primary transition-colors">联系</a>
          </div>
        </div>
      </nav>

      {/* 个人介绍 */}
      <section id="home" className="pt-32 pb-16 max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">你好, 我是 XXX</h1>
            <p className="text-xl text-muted-foreground">
              一名全栈开发工程师，热爱创造和分享。
            </p>
            <div className="flex space-x-4 pt-4">
              <Button>了解更多</Button>
              <Button variant="outline">下载简历</Button>
            </div>
          </div>
          <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full" />
        </div>
      </section>

      {/* 项目展示 */}
      <section id="projects" className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">精选项目</h2>
          <div className="grid grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 技能展示 */}
      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">专业技能</h2>
          <div className="grid grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section id="contact" className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">联系我</h2>
          <p className="text-muted-foreground mb-8">
            如果您对我的项目感兴趣，欢迎通过以下方式联系我
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground">
          © 2024 Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home; 
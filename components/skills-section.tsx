import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Server, Code, Smartphone, Database, Shield, GitBranch, Palette } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "インフラ・DevOps",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Kubernetes", level: 85 },
        { name: "Docker", level: 90 },
        { name: "ArgoCD", level: 80 },
        { name: "AWS", level: 75 },
      ],
    },
    {
      title: "フロントエンド",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      title: "モバイル開発",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Expo", level: 80 },
        { name: "Flutter", level: 75 },
      ],
    },
    {
      title: "バックエンド",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "Node.js", level: 85 },
        { name: "Go", level: 70 },
        { name: "Java", level: 65 },
        { name: "Rust", level: 60 },
      ],
    },
    {
      title: "データベース",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "Firebase", level: 80 },
      ],
    },
    {
      title: "その他技術",
      icon: Shield,
      color: "from-teal-500 to-green-500",
      skills: [
        { name: "Git", level: 90 },
        { name: "TensorFlow/Keras", level: 70 },
        { name: "QEMU", level: 60 },
        { name: "Makefile", level: 75 },
      ],
    },
  ]

  const tools = [
    { name: "Figma", icon: Palette },
    { name: "Notion", icon: GitBranch },
    { name: "Git", icon: GitBranch },
    { name: "Markdown", icon: Code },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            幅広い技術領域での実践的なスキルと継続的な学習
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}
                  >
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-center">開発ツール・その他</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2">
                  <tool.icon className="mr-2 h-4 w-4" />
                  {tool.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">特別な経験</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">🧠 機械学習・AI</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    TensorFlow、Kerasを用いた畳み込みニューラルネットワークの実装経験。
                    現在はローカルSLMをチャットアプリに統合する革新的なプロジェクトに取り組み中。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">💻 低レベル開発</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    QEMUを使用したOS開発経験。ハードウェアレベルからアプリケーションレベルまで、
                    幅広い技術領域への深い理解を持つ。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

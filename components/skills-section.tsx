import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Server, Code, Smartphone, Database, Shield, GitBranch, Palette } from "lucide-react"
import {
  SiTypescript, SiReact, SiFlutter, SiKubernetes, SiDocker, SiHtml5, SiCss3, SiJavascript, SiNodedotjs,
  SiQemu, SiVite, SiDart, SiFirebase, SiSupabase, SiPython, SiFastapi, SiFlask,
  SiPytorch, SiTensorflow, SiRust, SiC, SiGo, SiKeras, SiMqtt, SiJest, SiMysql, SiPostgresql,
  SiCloudflare, SiVercel, SiAmazon, SiGooglecloud, SiExpo, SiGit
} from "react-icons/si"
import { FaCogs, FaTools } from "react-icons/fa"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "インフラ・DevOps",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Kubernetes", level: 40 },
        { name: "Docker", level: 60 },
        { name: "ArgoCD", level: 20 },
        { name: "AWS", level: 50 },
      ],
    },
    {
      title: "フロントエンド",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 60 },
        { name: "TypeScript", level: 55 },
        { name: "HTML/CSS", level: 70 },
        { name: "JavaScript", level: 65 },
      ],
    },
    {
      title: "モバイル開発",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React Native", level: 65 },
        { name: "Expo", level: 60 },
        { name: "Flutter", level: 80 },
        { name: "Swift", level: 30 },
      ],
    },
    {
      title: "バックエンド",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "Node.js", level: 85 },
        { name: "Go", level: 30 },
        { name: "Java", level: 10 },
        { name: "Rust", level: 10 },
      ],
    },
    {
      title: "データベース",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 90 },
        { name: "AWS DynamoDB", level: 50 },
        { name: "MySQL", level: 40 },
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
            浅く広くやっているつもりです
          </p>
        </div>

        {/* 技術スタック一覧（アイコン＋技術名） */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {[
            { name: "TypeScript", icon: SiTypescript },
            { name: "React", icon: SiReact },
            { name: "Flutter", icon: SiFlutter },
            { name: "Kubernetes", icon: SiKubernetes },
            { name: "Docker", icon: SiDocker },
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss3 },
            { name: "JavaScript", icon: SiJavascript },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "QEMU", icon: SiQemu },
            { name: "Vite", icon: SiVite },
            // ArgoCD: react-iconsに公式アイコンがないため代替
            { name: "ArgoCD", icon: FaCogs },
            { name: "Dart", icon: SiDart },
            { name: "Firebase", icon: SiFirebase },
            { name: "Supabase", icon: SiSupabase },
            // Makefile: react-iconsに公式アイコンがないため代替
            { name: "Makefile", icon: FaTools },
            { name: "Python", icon: SiPython },
            { name: "FastAPI", icon: SiFastapi },
            { name: "Flask", icon: SiFlask },
            { name: "PyTorch", icon: SiPytorch },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "Rust", icon: SiRust },
            { name: "C", icon: SiC },
            { name: "Go", icon: SiGo },
            { name: "Keras", icon: SiKeras },
            { name: "MQTT", icon: SiMqtt },
            { name: "Jest", icon: SiJest },
            { name: "MySQL", icon: SiMysql },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Cloudflare", icon: SiCloudflare },
            { name: "Vercel", icon: SiVercel },
            // AWS: SiAmazonを代用
            { name: "AWS", icon: SiAmazon },
            { name: "GCP", icon: SiGooglecloud },
            { name: "Expo", icon: SiExpo },
            { name: "Git", icon: SiGit },
          ].map((tech, idx) => (
            <div key={idx} className="flex items-center px-3 py-2 bg-white dark:bg-slate-800 rounded shadow border gap-2">
              <tech.icon className="w-6 h-6 text-blue-500" />
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
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

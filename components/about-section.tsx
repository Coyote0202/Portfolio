import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Cloud, Brain } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "フルスタック開発",
      description: "React/React Native/Flutterからバックエンド開発まで幅広くカバー",
    },
    {
      icon: Server,
      title: "インフラ・DevOps",
      description: "Kubernetes、Docker、ArgoCDを使ったモダンなインフラ構築",
    },
    {
      icon: Cloud,
      title: "クラウド技術",
      description: "AWS、Firebaseを活用したスケーラブルなアプリケーション開発",
    },
    {
      icon: Brain,
      title: "機械学習・セキュリティ",
      description: "TensorFlow/Kerasを使った深層学習とセキュリティ技術への深い理解",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            技術への情熱と社会課題解決への強い意志を持つ学生エンジニア
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">プロフィール</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300">
                N高等学校通学プログラミングコース3年生として、幅広い技術領域で実践的な開発経験を積んでいます。
                特にセキュリティとプライバシー保護の分野に強い関心を持ち、革新的なソリューションの開発に取り組んでいます。
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                チーム開発経験も豊富で、Gitを使った協調開発やモダンな開発手法に精通しています。
                また、過去にはOS開発にも挑戦するなど、低レベルから高レベルまで幅広い技術に興味を持っています。
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">現在の取り組み</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">E2EEチャットアプリ開発</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  エンドツーエンド暗号化による強力なプライバシー保護と、
                  ローカルSLMを活用した危険会話検知システムを組み合わせた革新的なチャットアプリケーション
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">セキュリティ</Badge>
                <Badge variant="secondary">プライバシー保護</Badge>
                <Badge variant="secondary">機械学習</Badge>
                <Badge variant="secondary">E2EE</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

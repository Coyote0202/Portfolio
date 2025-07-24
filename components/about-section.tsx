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
      description: "Kubernetes、Docker、ArgoCD、Terraformなどを使ったモダンなインフラ構築",
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
            面白そうだと思ったことをやっています
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">プロフィール</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300">
                セキュリティやインフラ、SREなどに興味を持っています。高校3年生です。
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Gitを使った協調開発やモダンな開発手法も学んでいます。
                また、過去にはOS開発にも挑戦するなど、低レベルから高レベルまで幅広い技術に興味を持っています。
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                ロードバイクやカメラが趣味。ヒトリエが好きです。最近ギターに興味を持ち始めました。
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">現在の取り組み</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">ちょっとセキュアなチャットツール・XeroTalk</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  エンドツーエンド暗号化による強力なプライバシー保護と、
                  ローカルSLMを活用した危険会話検知システムを組み合わせた「ちょっとセキュアなチャットツール」
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

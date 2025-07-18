import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Shield, MessageCircle, Cpu } from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "E2EEチャットアプリ（開発中）",
      description:
        "エンドツーエンド暗号化とローカルSLMによる危険会話検知を組み合わせた革新的なチャットアプリケーション。プライバシー保護と安全性の両立を実現。",
      icon: Shield,
      status: "開発中",
      technologies: ["React Native", "Expo", "E2EE", "SLM", "Python", "PostgreSQL"],
      features: [
        "エンドツーエンド暗号化による完全なプライバシー保護",
        "ローカルSLMによるリアルタイム危険会話検知",
        "ゲームチート検知システムに似た設計思想",
        "正規利用者の安全性と犯罪防止の両立",
      ],
      highlights: true,
    },
    {
      title: "Kubernetesクラスター管理システム",
      description: "ArgoCDとDockerを活用したモダンなCI/CDパイプラインとインフラ自動化システム",
      icon: Cpu,
      status: "完成",
      technologies: ["Kubernetes", "ArgoCD", "Docker", "AWS", "Go"],
      features: [
        "GitOpsによる宣言的インフラ管理",
        "自動デプロイメントパイプライン",
        "マルチ環境対応",
        "監視・ログ収集システム統合",
      ],
    },
    {
      title: "マルチプラットフォームモバイルアプリ",
      description: "React Native/Expo、Flutterを使用したクロスプラットフォームアプリケーション開発",
      icon: MessageCircle,
      status: "完成",
      technologies: ["React Native", "Flutter", "Firebase", "TypeScript"],
      features: ["iOS/Android両対応", "リアルタイム通信機能", "オフライン対応", "プッシュ通知システム"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            技術的な挑戦と社会課題解決を目指したプロジェクト
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                project.highlights
                  ? "ring-2 ring-blue-500/20 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"
                  : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        project.highlights
                          ? "bg-gradient-to-r from-blue-500 to-purple-500"
                          : "bg-slate-100 dark:bg-slate-800"
                      }`}
                    >
                      <project.icon
                        className={`h-6 w-6 ${
                          project.highlights ? "text-white" : "text-slate-600 dark:text-slate-300"
                        }`}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl flex items-center gap-2">
                        {project.title}
                        <Badge variant={project.status === "開発中" ? "default" : "secondary"}>{project.status}</Badge>
                      </CardTitle>
                      <CardDescription className="mt-2">{project.description}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">主な機能・特徴</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">使用技術</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.highlights && (
                  <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">🚀 革新的なアプローチ</h4>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      従来のE2EEチャットアプリの匿名性による犯罪利用問題を、ローカルAIによる検知システムで解決。
                      プライバシーを完全に保護しながら、安全性も確保する画期的なソリューション。
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="https://github.com/yomi4486" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHubで他のプロジェクトも見る
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

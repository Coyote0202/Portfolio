import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <Badge variant="outline" className="text-sm px-3 py-1">
            N高等学校 通学プログラミングコース 3年生
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Yomi
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Full-Stack Developer & Infrastructure Engineer
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
            セキュリティとプライバシーを重視したモダンなアプリケーション開発に情熱を注ぐ学生エンジニア
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Link href="https://github.com/yomi4486" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects">
              <ExternalLink className="mr-2 h-5 w-5" />
              プロジェクトを見る
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">
              <Mail className="mr-2 h-5 w-5" />
              お問い合わせ
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
          <div className="p-4">
            <div className="text-2xl font-bold text-blue-600">8+</div>
            <div className="text-sm text-slate-500">プログラミング言語</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-purple-600">3+</div>
            <div className="text-sm text-slate-500">年の開発経験</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-cyan-600">10+</div>
            <div className="text-sm text-slate-500">技術スタック</div>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-green-600">1</div>
            <div className="text-sm text-slate-500">革新的プロジェクト</div>
          </div>
        </div>
      </div>
    </section>
  )
}

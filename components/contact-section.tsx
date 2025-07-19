import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            技術的な議論、コラボレーション、採用に関するお問い合わせはお気軽にどうぞ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">現在の状況</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Badge variant="default" className="bg-green-500">
                  所属中
                </Badge>
                <span className="text-sm">CyberAgent TechLounge</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="default" className="bg-green-500">
                  在学中
                </Badge>
                <span className="text-sm">N高等学校 3年生</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="outline">開発中</Badge>
                <span className="text-sm">E2EEチャットアプリ</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="secondary">募集中</Badge>
                <span className="text-sm">インターンシップ・技術的な議論</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">興味のある分野</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">セキュリティ</Badge>
                <Badge variant="outline">機械学習</Badge>
                <Badge variant="outline">インフラ</Badge>
                <Badge variant="outline">フルスタック開発</Badge>
                <Badge variant="outline">モバイル開発</Badge>
                <Badge variant="outline">DevOps</Badge>
                <Badge variant="outline">クラウド</Badge>
                <Badge variant="outline">SRE</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">お問い合わせ</h3>
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
                <Link href="mailto:dovahkiin4486@icloud.com">
                  <Mail className="mr-2 h-5 w-5" />
                  メール
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://x.com/yomi4486" target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-2 h-5 w-5" />
                  Twitter
                </Link>
              </Button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-6">
              技術的な質問、プロジェクトのコラボレーション、インターンシップの機会など、
              どんなことでもお気軽にお声がけください。
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">🎯 現在の目標</h4>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              E2EEチャットアプリの完成とリリースを通じて、セキュリティとプライバシー保護の新しい標準を作ることを目指しています。
              この革新的なアプローチが、より安全で信頼できるコミュニケーション環境の実現に貢献できると信じています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

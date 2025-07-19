"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import icon from "../assets/icon.jpeg";
import { Github, ExternalLink, Mail, Moon, Sun, ArrowUp } from "lucide-react"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  useEffect(() => setMounted(true), [])
  // スクロール位置を監視してボタン表示を制御
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {/* ダーク/ライト切り替えスイッチ */}
      <div className="absolute top-6 right-6 z-10 flex items-center gap-2">
        <Sun className="w-4 h-4 text-yellow-500" />
        {mounted && (
          <Switch
            checked={resolvedTheme === "dark"}
            onCheckedChange={v => setTheme(v ? "dark" : "light")}
            aria-label="Toggle dark mode"
          />
        )}
        <Moon className="w-4 h-4 text-blue-900 dark:text-yellow-300" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <Image
            src={icon}
            alt="アイコン"
            width={80}
            height={80}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
              margin: '0 auto'
            }}
          />
          <h1 style={{paddingBottom: 8}} className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            yomi4486
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
            おもしろそうだと思ったことをいい感じにやっています
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
            <div className="text-sm text-slate-500">プロジェクト</div>
          </div>
        </div>
      </div>
      {/* トップへ戻るFAB */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 transition-all duration-300 flex items-center justify-center"
          aria-label="トップへ戻る"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </section>
  )
}

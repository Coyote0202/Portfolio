import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Shield, MessageCircle, Cpu, Link as LinkIcon } from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "ちょっとセキュアなチャットツール・XeroTalk（開発中）",
      description:
        "エンドツーエンド暗号化とローカルSLMによる危険会話検知を組み合わせた革新的なチャットアプリケーション。プライバシー保護と安全性の両立を実現。",
      icon: Shield,
      status: "開発中",
      technologies: ["Flutter", "E2EE", "SLM", "TypeScript", "Firebase", "Aedes(MQTT)", "WebRTC", "iOS CallKit"],
      features: [
        "エンドツーエンド暗号化による完全なプライバシー保護",
        "ローカルSLMによるリアルタイム危険会話検知",
        "ゲームチート検知システムに似た設計思想",
        "正規利用者の安全性と犯罪防止の両立",
      ],
      highlights: true,
      highlightMessage: "従来のE2EEチャットアプリの匿名性による犯罪利用問題を、ローカルAIによる検知システムで解決。プライバシーを完全に保護しながら、安全性も確保する画期的なソリューション。",
    },
    {
      title: "ホットスタッパー（飲み物支出予測アプリ）",
      description:
        "気温・運動・曜日などの情報から、その日の飲み物支出を予測し、節約行動をサポートするアプリ。AWS・Python・Terraform・Flutterなどを活用し、インフラからフロントまで一元管理。",
      icon: Cpu,
      status: "完成・企業賞を獲得",
      technologies: [
        "AWS", "Python", "Terraform", "RDS", "Flutter", "AppSync", "Amplify", "Aurora", "Lambda", "prisma", "iOS WidgetKit", "SwiftUI", "Cognito", "GitHub Actions", "scikit-learn"
      ],
      features: [
        "気温・歩数・曜日などから飲み物支出を予測",
        "朝に予測額を通知し、行動（例:水筒準備）をサポート",
        "月ごとの出費傾向や浪費パターンを可視化",
        "インフラはTerraformとGitHub Actionsで一元管理",
        "Amplify→AppSync→RDSのフルマネージド構成",
        "機械学習（重回帰分析）による予測ロジック（scikit-learn/Python）",
        "Amazon SNSによるプッシュ通知",
        "FlutterとiOS NativeKitのハイブリッド構成"
      ],
      highlights: false,
      link: "https://topaz.dev/projects/c7e9f92c815ead6e0b2d",
    },
    {
      title: "58ハッカソン・MokuHub（もくもく会の楽しさを加速させるサービス）",
      description:
        "エンジニアたちが“もくもく作業”を共有し、応援し合えるサービス。Discordアクティビティ×Web/モバイルAppでコラボレーションを実現。APIサーバーを作らず、Supabase・Vercel・GitHub連携など最新技術を活用。",
      icon: Cpu,
      status: "完成・優秀賞を獲得",
      technologies: [
        "TypeScript", "React", "Flutter", "Dart", "Supabase", "Vercel", "GitHub", "Discord Embed Apps"
      ],
      features: [
        "Discordアクティビティで“もくもく会”に参加・記録を共有",
        "メンバーの貢献（Contribution）をタイムラインで可視化",
        "休憩リマインダーやGitHub草のスマホ表示対応",
        "APIサーバーレス構成で開発工数・維持費を最小化",
        "Supabase JWT認証をDiscord連携で安全に実現",
        "main/developブランチ分離による安定運用",
        "AI（Copilot, GPT）を活用したPR・デザイン生成",
        "オリジナルキャラクター“モクピィ”による応援体験"
      ],
      highlights: true,
      highlightMessage: "エンジニアの“もくもく作業”を可視化し、応援し合える新しいコラボ体験を提供。APIサーバーレス構成や最新技術で開発効率と楽しさを両立。",
      link: "https://topaz.dev/projects/cb973dc2c7328144e63f",
    },
    {
      title: "Alive Talk（人とAIをライブで繋ぐサービス）",
      description:
        "人とAIをライブ配信で繋ぐ新しい体験を提供。WebRTCによる低レイテンシー配信、AIコメント、フォロー機能などを搭載。Expo(React Native)・HonoRPC・AWS・DynamoDB・RDSなどを活用。",
      icon: Shield,
      status: "完成・企業賞を獲得",
      technologies: [
        "Expo(React Native)", "TypeScript", "DynamoDB", "Amplify", "RDS", "HonoRPC", "AWS Cognito", "CloudFront", "CI/CD"
      ],
      features: [
        "Google/メールアドレスログイン対応",
        "ユーザーは手軽に配信開始・参加が可能",
        "WebRTCによる低レイテンシー配信",
        "フォロー・フォロワー機能",
        "AIによる自動コメント",
        "RDS+高速読み込み用DynamoDBのハイブリッドDB設計",
        "HonoRPCで型安全なAPI連携",
        "CI/CD・ブランチルールによる高速開発サイクル",
        "AWS Cognito認証・CloudFront CDN構成"
      ],
      highlights: false,
      link: "https://topaz.dev/projects/5bce9fec1daf8babe138",
    },
    {
      title: "imacalla（暇人同士が気軽に電話をかけられるSNS）",
      description:
        "暇人同士が気軽に電話をかけられる、愛に溢れたSNS。ステータスメッセージで“暇人”を可視化し、話せる人がいない場合はAIとも通話可能。Hono RPCやGCP CloudRun、WebRTC、MQTTなど最新技術を活用。",
      icon: Cpu,
      status: "完成",
      technologies: [
        "TypeScript", "GCP", "Docker", "MySQL", "HonoRPC", "MQTT", "WebRTC", "CloudRun", "GitHub Actions", "React", "Livekit"
      ],
      features: [
        "Googleログイン対応で即利用可能",
        "ボタンひとつで電話をかけられるUX",
        "本格的な通話画面・フレンドのオンライン状況表示",
        "AIと通話できる機能",
        "ダークモード対応",
        "Hono RPCで型安全なAPI連携",
        "MQTTプロトコルを用いたサーバー自作",
        "GCP CloudRunによるサーバーレス運用",
        "WebRTC(Livekit)による通話機能",
        "GitHub ActionsによるCI/CD・自動デプロイ"
      ],
      highlights: false,
      link: "https://topaz.dev/projects/20a7255a23280cbb3a72",
    },
    {
      title: "OFF（地図上でお得情報を共有するサービス）",
      description:
        "地図上でタイムセールやお得情報を投稿・共有できるサービス。ユーザー投稿型で地域密着型のセール情報を可視化。Kubernetes・ReactNative・AWS・DynamoDB・Pythonなどを活用。ハッカソンで優秀賞を獲得。",
      icon: Cpu,
      status: "完成・優秀賞を獲得",
      technologies: [
        "Kubernetes", "ReactNative", "AWS", "DynamoDB", "Python", "PynamoDB", "FastAPI", "Github Actions", "Docker", "ECR", "AlgoCD", "Cognito"
      ],
      features: [
        "タイムセールの場所・時間・画像を投稿・地図上にマッピング",
        "地図上で現在/予定のセール情報を簡単に確認",
        "ユーザー投稿型で地域格差を解消",
        "ReactNativeでクロスプラットフォーム対応・ダークモード実装",
        "PynamoDB+FastAPIでDB・API構築",
        "EKS+AlgoCD+Github Actionsで自動デプロイ",
        "CognitoによるJWT認証",
        "Docker/ECRによるイメージ管理"
      ],
      highlights: true,
      highlightMessage: "地域密着型のセール情報を地図上で可視化。ユーザー投稿型で地域格差を解消し、Kubernetesや最新クラウド技術でスケーラブルな運用を実現。",
      link: "https://topaz.dev/projects/b63cb461d46c1bfc3ca4",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            色々やっています
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
                      className={`w-12 h-12 min-w-12 aspect-square rounded-lg flex items-center justify-center ${
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
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-500 hover:text-blue-700">
                            <LinkIcon className="w-4 h-4 inline" />
                          </a>
                        )}
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
                      {project.highlightMessage}
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

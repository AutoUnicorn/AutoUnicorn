import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <Analytics />
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">

        {/* Header */}
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-4xl font-bold mb-3">AutoUnicorn 🦄</h1>
          <p className="text-xl text-gray-400 mb-5">AI Automation Expert in Training</p>

          {/* 訪客計數器 */}
          <a
            href="https://hits.sh/auto-unicorn.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://hits.sh/auto-unicorn.com.svg?style=flat-square&label=Visitors&color=185FA5&labelColor=1a1a1a"
              alt="Visitor Count"
            />
          </a>
        </div>

        {/* 作品卡片區 */}
        <div className="grid grid-cols-1 gap-4 max-w-2xl w-full">

          {/* n8n Workflows */}
          <div className="border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
            <h2 className="text-2xl font-bold mb-2">🔵 n8n Workflows</h2>
            <p className="text-gray-400">Building automation workflows with n8n</p>
          </div>

          {/* Web Projects */}
          <div className="border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
            <h2 className="text-2xl font-bold mb-2">🌐 Web Projects</h2>
            <p className="text-gray-400">Building with Next.js and Vercel</p>
          </div>

          {/* BlueprintShield 工具 */}
          <a
            href="/tools/BlueprintShield.html"
            className="block border border-blue-800 rounded-lg p-6 hover:border-blue-500 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🛡️</span>
              <h2 className="text-2xl font-bold">BlueprintShield</h2>
              <span className="ml-auto text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded-full">
                Free Tool
              </span>
            </div>
            <p className="text-gray-400">
              Make Blueprint 一鍵脫敏工具 — 分享前自動移除 Email、Connection ID 等敏感資料。全程瀏覽器本地執行，不上傳任何伺服器。
            </p>
            <p className="text-blue-400 text-sm mt-3 group-hover:underline">
              開啟工具 →
            </p>
          </a>

          {/* Make Blueprint 作品集 */}
          <a
            href="https://github.com/AutoUnicorn/AutoUnicorn"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">⚙️</span>
              <h2 className="text-2xl font-bold">Make Blueprints</h2>
              <span className="ml-auto text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">
                GitHub
              </span>
            </div>
            <p className="text-gray-400">
              圖片批量轉檔、社群自動發文等 Make 自動化流程作品集。Blueprint 均經過 BlueprintShield 脫敏處理後公開。
            </p>
            <p className="text-gray-400 text-sm mt-3 group-hover:text-white group-hover:underline">
              查看 GitHub →
            </p>
          </a>

          {/* AI 簡報精靈 */}
          <a
            href="https://aipptpromptwizard.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">✨</span>
              <h2 className="text-2xl font-bold">AI 簡報精靈</h2>
              <span className="ml-auto text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">
                Live App
              </span>
            </div>
            <p className="text-gray-400">
              AI PPT Prompt 生成工具，協助快速產出高品質簡報提示詞。
            </p>
            <p className="text-gray-400 text-sm mt-3 group-hover:text-white group-hover:underline">
              開啟 App →
            </p>
          </a>

        </div>

        {/* Footer */}
        <p className="text-gray-600 text-sm mt-12">
          © 2026 AutoUnicorn · auto-unicorn.com
        </p>

      </main>
    </>
  );
}

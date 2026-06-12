import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <CameraLogo />
        <span className="text-lg font-semibold text-white">
          Павел Касулицкий
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Портфолио
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Услуги
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Обо мне
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Отзывы
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
      >
        Заказать съёмку
      </Button>
    </header>
  )
}

function CameraLogo() {
  return (
    <Icon name="Camera" size={24} className="text-violet-400" />
  )
}
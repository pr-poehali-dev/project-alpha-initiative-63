import { Switch } from "@/components/ui/switch"
import Icon from "@/components/ui/icon"

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Icon name="Send" size={20} className="text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Заказать съёмку</h3>
      <p className="mb-4 text-sm text-gray-400">Оставьте заявку и я свяжусь с вами в течение нескольких часов</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <Icon name="ArrowUpRight" size={16} className="ml-1" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
          <div className="flex items-center gap-3">
            <Icon name="Camera" size={20} className="text-gray-500" />
            <div>
              <p className="text-sm font-medium text-white">Тип съёмки</p>
              <p className="text-xs text-gray-500">Портрет, свадьба, репортаж...</p>
            </div>
          </div>
          <Icon name="ChevronDown" size={16} className="text-gray-500" />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Ваше имя <Icon name="Info" size={12} />
          </label>
          <div className="flex items-center rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <input
              type="text"
              placeholder="Введите имя..."
              className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none text-sm"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Пожелания <span className="text-violet-400">*</span> (Необязательно)
          </label>
          <div className="relative">
            <textarea
              placeholder="Расскажите о своём проекте..."
              className="w-full rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none resize-none h-16"
            />
            <span className="absolute bottom-2 right-2 text-xs text-gray-600">0/200</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Switch className="data-[state=checked]:bg-violet-600" />
          <span className="text-sm text-gray-400">Срочная съёмка</span>
        </div>
      </div>
    </div>
  )
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Icon name="Star" size={20} className="text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Отзывы клиентов</h3>
      <p className="mb-4 text-sm text-gray-400">Более 200 довольных клиентов доверили мне самые важные моменты своей жизни</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Все отзывы <Icon name="ArrowUpRight" size={16} className="ml-1" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/professional-woman-portrait.png" alt="Анна Соколова" />
              <AvatarFallback className="bg-rose-700 text-white">АС</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-white">Анна Соколова</p>
              <p className="text-xs text-gray-500">Свадебная съёмка</p>
            </div>
          </div>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <Icon key={i} name="Star" size={12} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
          <p className="text-sm text-gray-300 italic">«Павел — настоящий профессионал. Все фото получились невероятными, каждый момент пойман идеально!»</p>
        </div>

        <div className="border-t border-dashed border-[#333] pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/professional-man-portrait.png" alt="Дмитрий Орлов" />
                <AvatarFallback className="bg-teal-700 text-white">ДО</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">Дмитрий Орлов</p>
                <p className="text-xs text-gray-500">Бизнес-портрет</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Icon key={i} name="Star" size={12} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
          </div>
        </div>

        <Button className="w-full bg-[#252525] text-gray-400 hover:bg-[#2a2a2a] hover:text-white">Оставить отзыв</Button>
      </div>
    </div>
  )
}
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const genres = [
  { name: "Портретная съёмка", info: "Индивидуальные и бизнес-портреты", tag: "Портрет", color: "bg-violet-700" },
  { name: "Свадебная съёмка", info: "Полный день, репортаж + постановка", tag: "Свадьба", color: "bg-rose-700" },
  { name: "Репортаж", info: "Мероприятия, конференции, события", tag: "Событие", color: "bg-teal-700" },
  { name: "Семейная съёмка", info: "Прогулки, студия, выездная съёмка", tag: "Семья", color: "bg-amber-700" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Icon name="ImagePlus" size={20} className="text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Жанры съёмки</h3>
      <p className="mb-4 text-sm text-gray-400">Портрет, свадьба, репортаж и семейные фотосессии — выберите нужный формат</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Смотреть портфолио <Icon name="ArrowUpRight" size={16} className="ml-1" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {genres.map((genre, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className={`${genre.color} text-white text-xs`}>
                  {genre.tag.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">{genre.name}</p>
                <p className="text-xs text-gray-500">{genre.info}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{genre.tag}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Icon name="Plus" size={16} className="mr-2" /> Узнать цены
        </Button>
      </div>
    </div>
  )
}
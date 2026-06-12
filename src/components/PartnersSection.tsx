import Icon from "@/components/ui/icon"

const awards = [
  { name: "500+ съёмок", icon: "Camera" },
  { name: "200+ клиентов", icon: "Users" },
  { name: "5 лет опыта", icon: "Clock" },
  { name: "Москва и выезд", icon: "MapPin" },
  { name: "RAW + обработка", icon: "Aperture" },
  { name: "Готово за 5 дней", icon: "Zap" },
  { name: "Рейтинг 5.0 ⭐", icon: "Star" },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {awards.map((award) => (
        <div key={award.name} className="flex items-center gap-2 text-gray-500">
          <Icon name={award.icon as Parameters<typeof Icon>[0]['name']} size={16} />
          <span className="text-sm font-medium">{award.name}</span>
        </div>
      ))}
    </section>
  )
}
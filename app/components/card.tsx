type CardProps = {
  title?: string
  description?: string
}

export function Card({ title, description }: CardProps) {
  return (
    <div className="border-2 border-neutral-300 dark:border-neutral-700 p-6 bg-white dark:bg-black shadow-md h-112 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
        {title}
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-neutral-800 dark:text-neutral-200 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
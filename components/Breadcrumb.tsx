import Image from "next/image"
import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-2 text-sm lg:text-base">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="text-[#020202] font-medium hover:text-[#be968e] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#8a8a8a] font-medium">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <Image
              src="/assets/icons/chevron-right.svg"
              alt=""
              width={8}
              height={15}
              className="opacity-100"
            />
          )}
        </div>
      ))}
    </div>
  )
}

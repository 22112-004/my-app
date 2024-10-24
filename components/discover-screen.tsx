'use client'

import { useState } from "react"
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function DiscoverScreenComponent() {
  const [viewMode] = useState<"grid" | "list">("grid")

  const images = [
    { id: 1, src: "/placeholder.svg", title: "Image 1", category: "Nature" },
    { id: 2, src: "/placeholder.svg", title: "Image 2", category: "Urban" },
    { id: 3, src: "/placeholder.svg", title: "Image 3", category: "Portrait" },
    { id: 4, src: "/placeholder.svg", title: "Image 4", category: "Abstract" },
    { id: 5, src: "/placeholder.svg", title: "Image 5", category: "Nature" },
    { id: 6, src: "/placeholder.svg", title: "Image 6", category: "Urban" },
  ]

  return (
    <div className="p-4 space-y-4">
      <div className={`grid gap-4 ${viewMode === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"}`}>
        {images.map((image) => (
          <Card key={image.id} className={viewMode === "list" ? "flex" : ""}>
            <div className={`relative ${viewMode === "list" ? "w-1/3" : "w-full"}`}>
              <Image
                src={image.src}
                alt={image.title}
                width={200}
                height={200}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <CardContent className={`p-4 ${viewMode === "list" ? "w-2/3" : "w-full"}`}>
              <h3 className="font-semibold mb-2">{image.title}</h3>
              <Badge>{image.category}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
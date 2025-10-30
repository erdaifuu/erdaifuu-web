'use client'

import { useState, ReactNode } from 'react'

type CanvasProps = {
  children: ReactNode
}

export function PopupCanvas({ children }: CanvasProps) {
  return (
    <section className="relative h-80 w-full">
      {children}
    </section>
  )
}

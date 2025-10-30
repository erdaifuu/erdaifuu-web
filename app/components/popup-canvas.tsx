'use client'

import { useState, ReactNode } from 'react'

type CanvasProps = {
  children: ReactNode
}

export function PopupCanvas({ children }: CanvasProps) {
  return (
    <section className="relative min-h-screen w-full pb-20">
      {children}
    </section>
  )
}

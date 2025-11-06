'use client'

import { useState, ReactNode } from 'react'

type CanvasProps = {
  children: ReactNode
}

export function PopupCanvas({ children }: CanvasProps) {
  return (
    <section className="relative w-full min-h-[60vh]">
      {children}
    </section>
  )
}
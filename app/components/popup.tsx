'use client'

import { ReactNode, useState, useRef, useEffect } from 'react'

type Position = {
  top?: number
  bottom?: number
  left?: number
  right?: number
}

type PopupProps = {
  children: ReactNode
  title?: ReactNode
  variant?: 'image' | 'text' | 'chest'
  initialPosition: Position
  width?: string
  initialZIndex?: number
  className?: string
}

let globalMaxZIndex = 100

export function Popup({
  children,
  title,
  variant = 'image',
  initialPosition,
  width = 'auto',
  initialZIndex = 10,
  className = '',
}: PopupProps) {
  const [position, setPosition] = useState<Position>(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [zIndex, setZIndex] = useState(initialZIndex)
  const popupRef = useRef<HTMLDivElement>(null)

  const bringToFront = () => {
    globalMaxZIndex += 1
    setZIndex(globalMaxZIndex)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    bringToFront()
    
    setIsDragging(true)
    const currentLeft = position.left !== undefined ? position.left : 
                       (window.innerWidth - (position.right || 0))
    const currentTop = position.top !== undefined ? position.top : 
                      (window.innerHeight - (position.bottom || 0))
    
    setDragStart({
      x: e.clientX - currentLeft,
      y: e.clientY - currentTop,
    })
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          left: e.clientX - dragStart.x,
          top: e.clientY - dragStart.y,
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragStart])

  const positionStyles = {
    top: position.top !== undefined ? `${position.top}px` : undefined,
    bottom: position.bottom !== undefined ? `${position.bottom}px` : undefined,
    left: position.left !== undefined ? `${position.left}px` : undefined,
    right: position.right !== undefined ? `${position.right}px` : undefined,
    width: width,
    zIndex: zIndex,
  }

  return (
    <div
      ref={popupRef}
      className={`absolute cursor-move select-none ${className}`}
      style={positionStyles}
      onMouseDown={handleMouseDown}
    >
    {/* Tape */ }
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-neutral-200/60 dark:bg-neutral-300/60 shadow-sm rotate-2 z-[-1]" />

      {/* Polaroid Container */}
      {/* Chest if */}
      <div className="bg-white dark:bg-neutral-100 p-3 shadow-2xl"
        style={
          variant === 'chest'
            ? { 
            /* TODO: fix chest backgroundImage being too dark */
              backgroundImage: "url('/images/general/chest.jpg')",
            }
            : {}
        }>
        {/* Content Area */}
        <div className={
          variant === 'text'
            ? 'bg-white w-full flex items-center justify-center'
            : 'bg-neutral-100 dark:bg-neutral-200 w-full'
        }>
          {children}
        </div>
        
        {/* Caption Area */}
        {title && (
          <div className="pt-5 pb-2 px-2">
            <div className="text-sm md:text-base text-neutral-800 text-center font-['MaShanZheng'] max-h-0 flex items-center justify-center">
              {title}
            </div>
          </div>
        )}
     </div>
    </div>
  )
}

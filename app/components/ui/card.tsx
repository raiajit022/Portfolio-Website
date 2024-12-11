import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
}

const Card = ({ className = "", children }: CardProps) => {
  return (
    <div className={`rounded-lg border bg-white shadow-sm ${className}`}>
      {children}
    </div>
  )
}

export default Card

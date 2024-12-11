import Image from 'next/image'
import React from 'react'

export function Footer(): React.JSX.Element {
  return (
    <footer className="mt-auto py-6 px-4">
      <div className="container mx-auto flex justify-start">
        <a 
          href="https://www.positivessl.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition-opacity"
        >
          <Image
            src="/positive-ssl.svg" // Updated to use the SVG file
            alt="Secured by PositiveSSL"
            width={130}
            height={55}
            priority={false}
          />
        </a>
      </div>
    </footer>
  )
} 
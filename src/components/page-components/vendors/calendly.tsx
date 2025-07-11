'use client'

import { useEffect, useState } from 'react'

interface CalendlyWidgetProps {
  url: string
  minWidth?: number
}

const CalendlyWidget = ({ url, minWidth = 320 }: CalendlyWidgetProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <div
        className="calendly-inline-widget"
        style={{
          minWidth: `${minWidth}px`,
          width: '100%',
          height: '1600px',
          overflow: 'hidden',
          border: 'none',
        }}
        data-url={url}
      />
      <script
        key="calendly-script"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  )
}

export default CalendlyWidget

'use client'

import type { FC } from 'react'

interface AirtableEmbedProps {
  baseId?: string
  tableId?: string
  className?: string
}

const AirtableEmbed: FC<AirtableEmbedProps> = ({
  baseId = 'appCks77HXVuAfXOd',
  tableId = 'shrIUVaiJnXYd9xNh',
  className = '',
}) => {
  const embedUrl = `https://airtable.com/embed/${baseId}/${tableId}`

  return (
    <div className="w-full">
      <iframe
        className={`airtable-embed h-full w-full ${className}`}
        src={embedUrl}
        style={{
          background: 'transparent',
          border: '1px solid #ccc',
          height: '3200px',
        }}
        onWheel={(e) => {
          e.stopPropagation()
        }}
      />
    </div>
  )
}

export default AirtableEmbed

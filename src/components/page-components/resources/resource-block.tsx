import type { Data } from '@/components/global/types'
import { CalendarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface ResourceBlockProps {
  resource: Data
}

export const ResourceBlock = ({ resource }: ResourceBlockProps) => {
  const hasDate = !!resource.date

  return (
    <Link href={resource.url} target="_blank">
      <div className="group flex flex-col justify-between rounded-r-lg border-l-2 bg-white/5 p-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-white transition-colors group-hover:text-gray-300">
            {resource.title}
          </h3>
          {resource.description && (
            <p className="text-sm text-gray-100">{resource.description}</p>
          )}
        </div>

        {hasDate && (
          <div className="mt-4 flex items-center space-x-2 text-xs text-gray-300">
            <CalendarIcon className="h-4 w-4" />
            <time dateTime={resource.date}>
              {new Date(resource.date).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>
        )}
      </div>
    </Link>
  )
}

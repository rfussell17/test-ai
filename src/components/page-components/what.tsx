import Image from 'next/image'
import React from 'react'

interface Feature {
  title: string
  description: string
}

interface WhatProps {
  title: string
  subtitleBold?: string
  subtitleRegular?: string
  features?: Feature[]
  imageSrc: string
  imageAlt: string
  className?: string
}

const What: React.FC<WhatProps> = ({
  title,
  subtitleBold,
  subtitleRegular,
  features = [],
  imageSrc,
  imageAlt,
  className = '',
}) => {
  const hasSubtitle = subtitleBold || subtitleRegular
  const hasFeatures = features.length > 0

  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pr-4">
            <div className="mx-auto max-w-3xl sm:max-w-4xl lg:mx-0">
              <h2 className="subheader-mobile-gradient sm:subheader-gradient">
                {title}
              </h2>

              {hasSubtitle && (
                <h3 className="sm:paragraph-dark py-4">
                  {subtitleBold && (
                    <span className="sm:lead-dark text-base font-semibold">
                      {subtitleBold}
                      {subtitleRegular && ' '}
                    </span>
                  )}
                  {subtitleRegular}
                </h3>
              )}

              {hasFeatures && (
                <dl
                  className={`max-w-xl space-y-8 text-base text-gray-600 sm:text-lg/7 lg:max-w-none ${hasSubtitle ? 'mt-6' : 'mt-4'}`}
                >
                  {features.map((feature, index) => (
                    <div key={index} className="relative">
                      <dt className="font-bold text-secondary">
                        {feature.title}
                      </dt>
                      <dd className="my-2">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt={imageAlt}
                    src={imageSrc}
                    width={400}
                    height={600}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default What

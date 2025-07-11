import type { Data } from '@/components/global/types'

import { ResourceCard } from '../resources/resource-card'
import { comparisons, guides, roundups, tutorials, writing } from './data'

type ContentSectionProps = {
  title: string
  description: string
  items: Data[]
}

const ContentSection = ({ title, description, items }: ContentSectionProps) => (
  <section>
    <div className="grid items-center gap-8 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div>
          <h2 className="sm:subheader-light subheader-mobile-light sm:text-4xl">
            {title}
          </h2>
          <p className="lead-light mt-2 max-w-4xl text-lg">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-end lg:col-span-3">
        <div className="grid w-full max-w-lg grid-cols-1 gap-6 lg:ml-auto">
          {items.map((item: Data) => (
            <div key={item.id}>
              <ResourceCard resource={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

const Examples = () => {
  const sections = [
    {
      title: '1. Tutorials',
      description:
        'Tutorials provide a step-by-step explanation for why and how to accomplish a specific engineering task. These posts usually include code samples and screenshots.',
      items: tutorials,
    },
    {
      title: '2. Roundups',
      description:
        'Roundups (or "listicles") offer a collection of comparable products or tools in list form. Good roundups are well-researched and often widely shared.',
      items: roundups,
    },
    {
      title: '3. Comparisons',
      description:
        'Similar to roundups, comparisons typically focus on just two or three options and include even more depth to the concepts discussed.',
      items: comparisons,
    },
    {
      title: '4. Technical Guides',
      description:
        'A guide is a high-level overview of a technology or group of technologies. The best guides require technical knowledge and personal experience.',
      items: guides,
    },
    {
      title: '5. Persuasive Writing',
      description:
        'Persuasive writing is about making your case to technical decision-makers. It usually requires a mix of engineering experience and domain expertise.',
      items: writing,
    },
  ]

  return (
    <div
      className="overflow-hidden bg-gradient-brand py-16 sm:py-20"
      id="examples"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <ContentSection
                key={index}
                title={section.title}
                description={section.description}
                items={section.items}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Examples

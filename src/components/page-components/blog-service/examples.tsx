import type { Data } from '@/components/global/types'

import { ResourceBlock } from '../resources/resource-block'
import { posts } from './data'

const Examples = () => {
  return (
    <div className="overflow-hidden bg-gradient-brand py-24" id="examples">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="">
          <h2 className="sm:subheader-light subheader-mobile-light">
            Blog Posts by Draft.dev
          </h2>
          <p className="paragraph-light">
            Check out some of our technical blog content samples below:
          </p>

          <div className="mt-8 grid grid-cols-1 py-6">
            {posts.map((post: Data) => (
              <div key={post.id} className="mb-8">
               <ResourceBlock resource={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Examples

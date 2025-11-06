import Link from 'next/link'
import Image from 'next/image'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}

export function LatestBlogFeature() {
  let allBlogs = getBlogPosts()

  const sortedBlog = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })

  let postNum = 0
  let latestPost = sortedBlog[postNum]
  while (!latestPost?.metadata.headerImage || !latestPost?.metadata.chineseName) {
    postNum += 1
    latestPost = sortedBlog[postNum]
  }

  return (
      <Link
        href={`/blog/${latestPost.slug}`}
        className="relative group overflow-hidden block"
      >
      <div className="relative w-full h-64 md:h-80">
        <Image
          src={latestPost.metadata.headerImage}
          alt={latestPost.metadata.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h3 className="text-white text-2xl md:text-3xl font-['MaShanZheng'] drop-shadow-lg">
            {latestPost.metadata.chineseName}
          </h3>
          <p className="text-white/90 text-sm mt-2">
            {formatDate(latestPost.metadata.publishedAt, false)}
          </p>
        </div>
      </div>
    </Link>
  )
}
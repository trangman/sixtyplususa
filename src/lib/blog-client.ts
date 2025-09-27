export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  featured?: boolean;
  published: boolean;
  readingTime: number;
}

// Client-side blog utilities (no fs dependency)
export function filterPostsByTag(posts: BlogPostMeta[], tag: string): BlogPostMeta[] {
  if (!tag) return posts;
  return posts.filter((post) => 
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  );
}

export function searchPostsClient(posts: BlogPostMeta[], query: string): BlogPostMeta[] {
  if (!query) return posts;
  const lowercaseQuery = query.toLowerCase();

  return posts.filter((post) => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getAllUniqueTags(posts: BlogPostMeta[]): string[] {
  const allTags = posts.flatMap((post) => post.tags);
  return [...new Set(allTags)].sort();
}

export function getFeaturedPostsClient(posts: BlogPostMeta[]): BlogPostMeta[] {
  return posts.filter((post) => post.featured);
}

export function getRelatedPostsClient(posts: BlogPostMeta[], currentSlug: string, limit: number = 3): BlogPostMeta[] {
  const currentPost = posts.find((post) => post.slug === currentSlug);
  if (!currentPost) return [];

  const relatedPosts = posts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => 
      post.tags.some((tag) => currentPost.tags.includes(tag))
    )
    .slice(0, limit);

  return relatedPosts;
}

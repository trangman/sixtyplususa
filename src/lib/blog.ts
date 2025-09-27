import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  featured?: boolean;
  published: boolean;
  readingTime: number;
}

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

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Get all blog posts
export function getAllPosts(): BlogPostMeta[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title || '',
          excerpt: data.excerpt || '',
          date: data.date || '',
          author: data.author || 'SixtyPlusUSA',
          tags: data.tags || [],
          featured: data.featured || false,
          published: data.published !== false,
          readingTime: calculateReadingTime(fileContents),
        };
      })
      .filter((post) => post.published)
      .sort((a, b) => (a.date < b.date ? 1 : -1));

    return allPostsData;
  } catch (error) {
    console.warn('No blog posts found or error reading posts:', error);
    return [];
  }
}

// Get featured posts
export function getFeaturedPosts(): BlogPostMeta[] {
  return getAllPosts().filter((post) => post.featured);
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter((post) => 
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  );
}

// Get all unique tags
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const allTags = posts.flatMap((post) => post.tags);
  return [...new Set(allTags)].sort();
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Process markdown content
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml)
      .process(content);

    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content: contentHtml,
      date: data.date || '',
      author: data.author || 'SixtyPlusUSA',
      tags: data.tags || [],
      featured: data.featured || false,
      published: data.published !== false,
      readingTime: calculateReadingTime(content),
    };
  } catch (error) {
    console.warn(`Post not found: ${slug}`, error);
    return null;
  }
}

// Calculate reading time (words per minute)
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Get related posts based on tags
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPostMeta[] {
  const currentPost = getAllPosts().find((post) => post.slug === currentSlug);
  if (!currentPost) return [];

  const relatedPosts = getAllPosts()
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => 
      post.tags.some((tag) => currentPost.tags.includes(tag))
    )
    .slice(0, limit);

  return relatedPosts;
}

// Search posts by title and content
export function searchPosts(query: string): BlogPostMeta[] {
  const posts = getAllPosts();
  const lowercaseQuery = query.toLowerCase();

  return posts.filter((post) => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

import { getAllPosts, getAllTags } from '../../lib/blog-server';
import BlogPageClient from './BlogPageClient';

export default function BlogPage() {
  const allPosts = getAllPosts();
  const allTags = getAllTags();

  return <BlogPageClient allPosts={allPosts} allTags={allTags} />;
}

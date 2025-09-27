import { getAllPosts } from '../lib/blog-server';
import HomeClient from './HomeClient';

export default function Home() {
  const blogPosts = getAllPosts();

  return <HomeClient blogPosts={blogPosts} />;
}

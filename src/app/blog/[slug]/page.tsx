import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '../../../lib/blog-server';
import { format } from 'date-fns';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { BlogCard } from '../../../components/blog/BlogComponents';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | SixtyPlusUSA Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/blog" 
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readingTime} min read
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  <Tag className="w-3 h-3 inline mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="bg-white rounded-lg shadow-md p-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{post.author}</p>
                  <p className="text-sm text-gray-500">Health & Wellness Expert</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Article
                </button>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Enjoyed This Article?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to get more health and wellness insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/30"
            />
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="text-xl font-bold">SixtyPlusUSA</h5>
                  <p className="text-sm text-gray-300">Health & Wellness Blog</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg">
                Your trusted source for health information and wellness guidance.
              </p>
            </div>
            
            <div>
              <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-lg">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-lg">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-lg font-semibold mb-4">Important Notice</h6>
              <p className="text-gray-300 text-lg">
                This blog is for informational purposes only and should not replace 
                professional medical advice. Always consult with your healthcare provider.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300 text-lg">
              © {new Date().getFullYear()} SixtyPlusUSA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

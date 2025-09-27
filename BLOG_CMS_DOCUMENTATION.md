# Blog CMS Documentation

This documentation covers the Frontmatter CMS implementation for the SixtyPlusUSA blog system.

## Overview

The blog system uses markdown files with frontmatter metadata to create a headless CMS experience. All blog content is stored in the `content/blog/` directory and automatically processed by Next.js.

## File Structure

```
content/
└── blog/
    ├── health-tips-seniors.md
    ├── medicare-guide-seniors.md
    └── exercise-routines-seniors.md

src/
├── lib/
│   └── blog.ts                 # Blog utilities and data processing
├── components/
│   └── blog/
│       └── BlogComponents.tsx  # Reusable blog components
└── app/
    ├── blog/
    │   ├── page.tsx           # Blog listing page
    │   └── [slug]/
    │       └── page.tsx       # Individual blog post page
    └── page.tsx               # Homepage with blog preview
```

## Frontmatter Format

Each blog post must include frontmatter metadata at the top of the markdown file:

```yaml
---
title: "Your Blog Post Title"
excerpt: "Brief description of the post content"
date: "YYYY-MM-DD"
author: "Author Name"
tags: ["Tag1", "Tag2", "Tag3"]
featured: true/false
published: true/false
---
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | The blog post title |
| `excerpt` | string | Yes | Short description for previews |
| `date` | string | Yes | Publication date (YYYY-MM-DD) |
| `author` | string | No | Author name (defaults to "SixtyPlusUSA") |
| `tags` | array | No | Array of tag strings |
| `featured` | boolean | No | Whether to feature this post |
| `published` | boolean | No | Whether post is published (defaults to true) |

## Creating Blog Posts

### 1. Create a New Markdown File

Create a new `.md` file in the `content/blog/` directory:

```bash
touch content/blog/my-new-post.md
```

### 2. Add Frontmatter

Add the required frontmatter to the top of your file:

```markdown
---
title: "My New Blog Post"
excerpt: "This is a brief description of my blog post content."
date: "2024-09-27"
author: "Your Name"
tags: ["Health", "Wellness", "Tips"]
featured: false
published: true
---

# My New Blog Post

Your blog content goes here...
```

### 3. Write Your Content

Use standard markdown syntax for your content:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point 1
- Bullet point 2

1. Numbered list item 1
2. Numbered list item 2

[Link text](https://example.com)

![Alt text](image-url)

> Blockquote

`Inline code`

```code block```
```

## Blog Features

### Automatic Features

- **Reading Time Calculation**: Automatically calculated based on word count
- **SEO Optimization**: Meta tags generated from frontmatter
- **Responsive Design**: Mobile-friendly layouts
- **Search Functionality**: Search posts by title, excerpt, and tags
- **Tag Filtering**: Filter posts by specific tags
- **Related Posts**: Automatically suggests related posts based on tags

### Blog Components

#### BlogCard
Displays a blog post preview with:
- Title and excerpt
- Publication date and reading time
- Author information
- Tags
- "Read More" link

#### BlogGrid
Renders a grid of blog post cards with responsive layout.

#### BlogFilters
Provides search and tag filtering functionality.

#### FeaturedPost
Special layout for featured blog posts with enhanced styling.

## API Functions

### `getAllPosts()`
Returns all published blog posts sorted by date (newest first).

### `getFeaturedPosts()`
Returns only posts marked as featured.

### `getPostBySlug(slug)`
Retrieves a specific blog post by its slug.

### `getPostsByTag(tag)`
Returns posts filtered by a specific tag.

### `getAllTags()`
Returns all unique tags from published posts.

### `getRelatedPosts(slug, limit)`
Returns related posts based on shared tags.

### `searchPosts(query)`
Searches posts by title, excerpt, and tags.

## Blog Pages

### Blog Listing Page (`/blog`)
- Displays all published blog posts
- Featured post section
- Search and filter functionality
- Newsletter signup
- Responsive grid layout

### Individual Post Page (`/blog/[slug]`)
- Full blog post content
- Author information
- Publication details
- Related posts
- Social sharing options
- Newsletter signup

### Homepage Integration
- Latest 3 blog posts preview
- Link to full blog section
- Responsive card layout

## Styling

The blog uses Tailwind CSS for styling with:
- Responsive grid layouts
- Hover effects and transitions
- Consistent color scheme
- Mobile-first design
- Accessibility features

## SEO Features

- Automatic meta tag generation
- Open Graph tags for social sharing
- Structured data for search engines
- Optimized URLs with slugs
- Reading time and author information

## Content Guidelines

### Writing Tips
1. **Clear Titles**: Use descriptive, SEO-friendly titles
2. **Compelling Excerpts**: Write engaging excerpts for previews
3. **Relevant Tags**: Use consistent, descriptive tags
4. **Proper Formatting**: Use markdown formatting consistently
5. **Regular Publishing**: Maintain a consistent publishing schedule

### Tag Conventions
Use consistent tags across posts:
- **Health Topics**: "Health Tips", "Senior Wellness", "Prevention"
- **Financial**: "Medicare", "Insurance", "Financial Planning"
- **Lifestyle**: "Exercise", "Nutrition", "Mental Health"
- **Resources**: "Guides", "Tutorials", "Resources"

## Deployment

The blog system works with static site generation:
1. Markdown files are processed at build time
2. Static pages are generated for each post
3. No database required
4. Fast loading times
5. Easy to deploy and maintain

## Maintenance

### Adding New Posts
1. Create markdown file in `content/blog/`
2. Add proper frontmatter
3. Write content using markdown
4. Commit and deploy

### Updating Existing Posts
1. Edit the markdown file
2. Update frontmatter if needed
3. Commit and deploy changes

### Managing Tags
- Keep tag names consistent
- Use title case for multi-word tags
- Avoid too many tags per post (3-5 recommended)

## Troubleshooting

### Common Issues

1. **Post Not Appearing**
   - Check `published: true` in frontmatter
   - Verify file is in `content/blog/` directory
   - Ensure proper markdown syntax

2. **Build Errors**
   - Check frontmatter syntax (YAML format)
   - Verify required fields are present
   - Check for special characters in content

3. **Styling Issues**
   - Ensure Tailwind classes are correct
   - Check responsive breakpoints
   - Verify component imports

### Debug Mode
Enable debug logging by checking the browser console for:
- Post loading information
- Search functionality
- Tag filtering results

## Future Enhancements

Potential improvements for the blog system:
- [ ] Comment system integration
- [ ] Author profiles and pages
- [ ] Advanced search with filters
- [ ] Newsletter integration
- [ ] Analytics tracking
- [ ] Content scheduling
- [ ] Multi-language support
- [ ] Content versioning

## Support

For questions or issues with the blog system:
1. Check this documentation
2. Review the code in `src/lib/blog.ts`
3. Test with sample posts
4. Check browser console for errors

The blog system is designed to be simple, maintainable, and scalable for the SixtyPlusUSA website.

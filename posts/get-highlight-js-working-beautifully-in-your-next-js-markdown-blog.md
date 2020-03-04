---
title: Get highlight.js working beautifully in your Next.js Markdown blog
date: 2020-03-04T05:00:00Z
subtitle: After some trial and error, I implemented a custom styled code block using
  TailwindCSS

---
It definitely took me way too long to get code blocks correctly highlighted on my blog. Next.js seems to have less tutorials out there in general, especially for specific use cases like these. I hope to fix that, at least a little bit, with my own blog. As I experience issues and overcome each challenge, my plan is to write up a post about it. Here's #1!

## Quick Background

As a starting point, I want to outline the architecture of my website. As Next.js goes, I have page components in the `/pages` directory. Blog posts are generated dynamically via the `/pages/blog/[slug].tsx` page, where the `getInitialProps` function pulls content from the `.md` files located in the `/posts` folder.

If this is new to you, there are tutorials that explain how this works (e.g. [Next.js docs](https://nextjs.org/learn/basics/create-dynamic-pages)). Feel free to also view the code on the [GitHub repo](https://github.com/perryraskin/raskin.me).

## Before highlight.js

For a visual, below is what the `BlogPostTemplate` component looked like before I did anything fancy. I will only include the relevant code to keep it short, but feel free to view the [entire file](https://github.com/perryraskin/raskin.me/blob/master/pages/blog/%5Bslug%5D.tsx) in the repo.

    <article className="mb-10 markdown">
      <header>
      	<h1 className="text-5xl">{frontmatter.title}</h1>
      </header>
        <div className="mb-5 my-auto text-sm font-semibold text-neutral-400">
        	{reformatDate(frontmatter.date)}
        </div>
      <div>
        <ReactMarkdown 
          source={markdownBody}
        />
      </div>
    </article>

Notice that this code simply applies a title, date, and the contents of the `.md` file. By default, inline code and code blocks were not nicely styled, and of course I wasn't satisfied with that. Luckily, `react-markdown` takes an optional parameter called `renderers` where we can provide a custom style to HTML tags of our choosing. This is where it got confusing - I had to dive into the [source code](https://github.com/rexxars/react-markdown/blob/master/src/renderers.js) to figure out what exactly I was supposed to pass it.
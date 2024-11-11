import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import path from "path";
import fs from 'fs';
import matter from "gray-matter"

export default component$(() => {
  const blogPath = "src/routes/blogs";
  const blogEntries = [];
  const blogDirs = fs.readdirSync(path.join(blogPath));

  console.log('blog Dirs: ', blogDirs);
  blogDirs.forEach((blog) => {
    const fileContents = fs.readFileSync(path.join(blogPath, blog, "index.mdx"));
    const { data, _ } = matter(fileContents);
    const title = data == undefined || data.title == undefined ? blog : data.title;
    blogEntries.push(<li><a href={"/blogs/" + blog} >{title}</a></li>)
  });
  return (
    <div>
      <h1>Hi 👋</h1>
      <div>
        <div>Blogposts..</div>
        <ul>
          {blogEntries}
        </ul>
      </div>
    </div >
  );
});

export const head: DocumentHead = {
  title: "Simple blog",
  meta: [
    {
      name: "description",
      content: "Just a simple blog with Markdown support",
    },
  ],
};

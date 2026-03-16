import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { getPostBySlug } from "../lib/api";
import { markdownToHtml } from "../lib/markdownToHtml";
import { Fade } from "@components/Animation/Fade";
import styles from "./blog-slug.module.css";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = getPostBySlug(params.slug, [
      "slug",
      "title",
      "createdAt",
      "content",
      "updatedAt",
      "tags",
    ]);
    if (!post?.slug) throw notFound();
    const content = await markdownToHtml(post.content as string);
    return { ...post, content };
  },
  notFoundComponent: () => <div>This Page is not found.</div>,
  component: Post,
});

function Post() {
  const post = Route.useLoaderData();
  useEffect(() => {
    document.title = post.title as string;
  }, [post.title]);

  return (
    <div className={styles.root}>
      <Fade>
        <main>
          <article>
            <h1 className={styles.title}>{post.title as string}</h1>
            <div>
              <p className={styles.date}>{`作成日：${post.createdAt}`}</p>
              {post.updatedAt ? (
                <p className={styles.date}>{`更新日：${post.updatedAt}`}</p>
              ) : (
                <></>
              )}
              <div dangerouslySetInnerHTML={{ __html: post.content as string }} />
            </div>
          </article>
        </main>
      </Fade>
    </div>
  );
}

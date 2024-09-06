import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

const posts = await getPosts();

export async function generateMetadata() {
  const numberPosts = posts.length;
  return {
    title: `Browse all our ${numberPosts} posts.`,
    description: "Browse all our posts.",
  };
}
export default async function FeedPage() {
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}

import { getPreviewPost } from "@lib/cms";

export default async function preview(req, res) {
  const { secret, slug } = req.query;

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Verifies if post exists
  const post = await getPreviewPost(slug);

  if (!post) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirects to post url
  const url = `/post/${slug}`;
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  );
  res.end();
}

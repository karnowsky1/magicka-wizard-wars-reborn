import React from "react";
import { BlogPostTemplate } from "../../templates/blog-post";

export interface BlogPostPreviewProps {
  entry: {
    getIn: (arr: string[]) => string | string[];
  };
  widgetFor: (str: string) => string;
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({
  entry,
  widgetFor
}) => {
  const description = entry.getIn(["data", "description"]);
  const tags = entry.getIn(["data", "tags"]);
  const title = entry.getIn(["data", "title"]);
  return (
    <BlogPostTemplate
      content={widgetFor("body")}
      description={typeof description === "string" ? description : ""}
      tags={typeof tags !== "string" ? tags : []}
      title={typeof title === "string" ? title : ""}
    />
  );
};

export default BlogPostPreview;

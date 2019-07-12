import React from "react";

export interface ContentProps {
  content?: string;
  className?: string;
}

export const HTMLContent: React.FC<ContentProps> = ({ content, className }) =>
  content ? (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <div className={className} />
  );

const Content: React.FC<ContentProps> = ({ content, className }) => (
  <div className={className}>{content}</div>
);

export default Content;

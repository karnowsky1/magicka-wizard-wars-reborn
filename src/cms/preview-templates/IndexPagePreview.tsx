import React from "react";
import { IndexPageTemplate, Frontmatter } from "../../templates/index-page";

export interface IndexPagePreviewProps {
  entry: {
    getIn: (arr: string[]) => { toJS: () => Frontmatter };
  };
  getAsset: (str: string) => string;
}

const IndexPagePreview: React.FC<IndexPagePreviewProps> = ({
  entry,
  getAsset
}) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;

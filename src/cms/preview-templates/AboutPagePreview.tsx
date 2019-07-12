import React from "react";
import { AboutPageTemplate } from "../../templates/about-page";

export interface AboutPagePreviewProps {
  entry: {
    getIn: (arr: string[]) => string;
  };
  widgetFor: (str: string) => string | undefined;
}

const AboutPagePreview: React.FC<AboutPagePreviewProps> = ({
  entry,
  widgetFor
}) => (
  <AboutPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

export default AboutPagePreview;

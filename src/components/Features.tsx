import React from "react";
import PreviewCompatibleImage, { ImageInfo } from "./PreviewCompatibleImage";

interface Item extends ImageInfo {
  text: string;
}

export interface FeatureGridProps {
  gridItems: Item[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: "240px",
                display: "inline-block"
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

export default FeatureGrid;

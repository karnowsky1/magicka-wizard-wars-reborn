import React from "react";
import { ProductPageTemplate } from "../../templates/product-page";

export interface ProductPagePreviewProps {
  entry: {
    getIn: (arr: string[]) => string;
  };
  getAsset: (str: string) => string;
}

const ProductPagePreview: React.FC<ProductPagePreviewProps> = ({
  entry,
  getAsset
}) => {
  const entryBlurbs = entry.getIn(["data", "intro", "blurbs"]);
  const blurbs = entryBlurbs ? (entryBlurbs as any).toJS() : [];

  const entryTestimonials = entry.getIn(["data", "testimonials"]);
  const testimonials = entryTestimonials
    ? (entryTestimonials as any).toJS()
    : [];

  const entryPricingPlans = entry.getIn(["data", "pricing", "plans"]);
  const pricingPlans = entryPricingPlans
    ? (entryPricingPlans as any).toJS()
    : [];

  return (
    <ProductPageTemplate
      image={entry.getIn(["data", "image"])}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
      intro={{ blurbs }}
      main={{
        heading: entry.getIn(["data", "main", "heading"]),
        description: entry.getIn(["data", "main", "description"]),
        image1: {
          image: getAsset(entry.getIn(["data", "main", "image1", "image"])),
          alt: entry.getIn(["data", "main", "image1", "alt"])
        },
        image2: {
          image: getAsset(entry.getIn(["data", "main", "image2", "image"])),
          alt: entry.getIn(["data", "main", "image2", "alt"])
        },
        image3: {
          image: getAsset(entry.getIn(["data", "main", "image3", "image"])),
          alt: entry.getIn(["data", "main", "image3", "alt"])
        }
      }}
      fullImage={entry.getIn(["data", "full_image"])}
      testimonials={testimonials}
      pricing={{
        heading: entry.getIn(["data", "pricing", "heading"]),
        description: entry.getIn(["data", "pricing", "description"]),
        plans: pricingPlans
      }}
    />
  );
};

export default ProductPagePreview;

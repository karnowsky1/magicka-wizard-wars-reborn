import React from "react";
import Img, { FluidObject } from "gatsby-image";

export interface PreviewCompatibleImageProps {
  imageInfo: ImageInfo;
}

export interface Image {
  childImageSharp?: ChildImageSharp;
}

export interface ImageInfo extends Image {
  alt?: string;
  image: Image | string;
  style?: object;
}

interface ChildImageSharp {
  fluid: FluidObject;
}

const PreviewCompatibleImage: React.FC<PreviewCompatibleImageProps> = ({
  imageInfo
}) => {
  const imageStyle = { borderRadius: "5px" };
  const { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && typeof image !== "string" && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    );
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }

  if (!!image && typeof image === "string")
    return <img style={imageStyle} src={image} alt={alt} />;

  return null;
};

export default PreviewCompatibleImage;

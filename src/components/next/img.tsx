import ExportedImage, { ExportedImageProps } from "next-image-export-optimizer";
import { basePath } from "@/../base-path.mjs";
import styles from "./img.module.css";

export type ImgProps = Omit<ExportedImageProps, "basePath">;

export function Img(props: ImgProps) {
  return (
    <ExportedImage
      {...props}
      basePath={basePath}
      className={styles.image}
    />
  );
}

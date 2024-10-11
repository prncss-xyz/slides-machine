import { Box } from "@radix-ui/themes";
import { Img } from "./next/img";

const side = 400;
const sidePx = `${side}px`;

export function QR({ name, src }: { name: string; src: string }) {
  return (
    <Box width={sidePx} height={sidePx}>
      <Img
        src={src}
        alt={name}
        width={400}
        height={400}
        unoptimized
      />
    </Box>
  );
}

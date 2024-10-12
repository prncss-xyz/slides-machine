import { Box } from "@radix-ui/themes";
import { Img } from "./next/img";

const side = 400;
const sidePx = `${side}px`;

export function QR({ name, src }: { name: string; src: string }) {
  return (
    <Box py="3">
      <Box width={sidePx} height={sidePx}>
        <Img src={src} alt={name} unoptimized />
      </Box>
    </Box>
  );
}

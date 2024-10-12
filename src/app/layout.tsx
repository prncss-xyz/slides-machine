import type { Metadata } from "next";
import localFont from "next/font/local";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Box, Container, Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import { KeyNav } from "@/slides/keynav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "State Machine Slides",
  description: "by Juliette Lamarche",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class">
          <Theme>
            <Container>
              <KeyNav>
                <Box m="5">{children}</Box>
              </KeyNav>
            </Container>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

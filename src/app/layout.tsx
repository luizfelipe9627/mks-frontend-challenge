import type { Metadata } from "next";
import { montserrat } from "@/utils/fontConfig";
import { Providers } from "@/context/Providers";

export const metadata: Metadata = {
  title: "MKS Sistemas",
  description:
    "MKS Sistemas é um teste, concorrendo a uma vaga de desenvolvedor front-end.",
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="pt-br">
        <body className={montserrat.className}>{children}</body>
      </html>
    </Providers>
  );
}

import type { Metadata } from "next";
import { montserrat } from "@/utils/fontConfig";
import { Providers } from "@/context/Providers";

export const metadata: Metadata = {
  title: "MKS Sistemas",
  description:
    "MKS Sistemas é uma vitrine de produtos com carrinho de compras, criado como teste para uma vaga de Desenvolvedor Front-end.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    images: [
      {
        type: "image/webp",
        url: "/og.webp",
        alt: "MKS Sistemas",
      },
    ],
  },
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

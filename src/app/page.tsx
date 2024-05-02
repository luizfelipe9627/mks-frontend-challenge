"use client";

import { GlobalStyles } from "@/styles/GlobalStyles";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Products from "@/components/Products/Products";
import Main from "@/components/Main/Main";
import Checkout from "@/components/Checkout/Checkout";

export default function Page() {
  return (
    <>
      <GlobalStyles />
      <Checkout />

      <Header />
      <Main>
        <Products />
      </Main>
      <Footer />
    </>
  );
}

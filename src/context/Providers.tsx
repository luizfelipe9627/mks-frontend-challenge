"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { CheckoutContextProvider } from "./CheckoutContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <CheckoutContextProvider>{children}</CheckoutContextProvider>
    </QueryClientProvider>
  );
};

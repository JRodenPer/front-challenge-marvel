"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function RegistryQuery({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

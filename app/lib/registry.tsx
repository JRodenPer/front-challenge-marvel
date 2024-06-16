"use client";

import React, { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

export default function StyleAndContextRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sheet] = useState(() => new ServerStyleSheet());
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
    </QueryClientProvider>
  );
}

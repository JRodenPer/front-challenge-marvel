// app/layout.tsx

import { ReactNode } from "react";
import StyleAndContextRegistry from "./lib/registry";
import Head from "./head";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <StyleAndContextRegistry>{children}</StyleAndContextRegistry>
      </body>
    </html>
  );
}

import { ReactNode, useState } from "react";
import RegistrySC from "./lib/registrySC";
import Head from "./head";
import RegistryQuery from "./lib/registryQuery";
import GlobalStyle from "./GlobalStyles";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <RegistrySC>
          <RegistryQuery>{children}</RegistryQuery>
        </RegistrySC>
      </body>
    </html>
  );
}

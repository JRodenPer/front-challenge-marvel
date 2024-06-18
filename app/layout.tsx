import { ReactNode, useState } from "react";
import RegistrySC from "./lib/registrySC";
import Head from "./head";
import RegistryQuery from "./lib/registryQuery";
import GlobalStyle from "./GlobalStyles";
import RegistryContext from "./lib/registryContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <RegistrySC>
          <RegistryContext>
            <RegistryQuery>{children}</RegistryQuery>
          </RegistryContext>
        </RegistrySC>
      </body>
    </html>
  );
}

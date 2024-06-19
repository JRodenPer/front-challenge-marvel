import { ReactNode, useState } from "react";
import RegistrySC from "./lib/registrySC";
import Head from "./head";
import RegistryQuery from "./lib/registryQuery";
import RegistryContext from "./lib/registryContext";
import Home from "./components/Home";
import MainTopbar from "./components/MainTopbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <RegistrySC>
          <RegistryContext>
            <RegistryQuery>
              <MainTopbar />
              {children}
            </RegistryQuery>
          </RegistryContext>
        </RegistrySC>
      </body>
    </html>
  );
}

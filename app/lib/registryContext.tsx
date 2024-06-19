"use client";

import React from "react";
import { LikesProvider } from "@/app/contexts/LikesContext";

export default function RegistryContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LikesProvider>{children}</LikesProvider>;
}

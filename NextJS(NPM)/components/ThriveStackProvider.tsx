// components/ThriveStackProvider.tsx
"use client";

import { useEffect } from "react";
import * as thrivestack from "@thrivestack/analytics-browser";

export default function ThriveStackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    thrivestack.init(
      "{api-key}",
      "marketing,product"
    );
  }, []);

  return <>{children}</>;
}
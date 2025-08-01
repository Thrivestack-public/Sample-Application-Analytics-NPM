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
      "{API_KEY}",
      "marketing,product"
    );
  }, []);

  return <>{children}</>;
}

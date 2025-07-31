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
      "z5CBiPKJOcjscD9ipLjYVyEWuWzBD1/142xgzV2myl0=",
      "marketing,product"
    );
  }, []);

  return <>{children}</>;
}

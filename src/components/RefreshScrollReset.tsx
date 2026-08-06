"use client";

import { useEffect } from "react";

export function RefreshScrollReset() {
  useEffect(() => {
    const navigationEntry = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;

    if (navigationEntry?.type !== "reload") {
      return;
    }

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
}

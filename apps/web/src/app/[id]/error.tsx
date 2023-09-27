"use client";
import { useEffect } from "react";

import { ErrorLayout } from "@/components/error";

export default function Error({ error }: { error: Error }) {
  useEffect(() => console.error(error), [error]);

  return <ErrorLayout />;
}

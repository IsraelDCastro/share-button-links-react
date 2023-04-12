import * as React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "@/routes";
import PageLayout from "@/layouts/pageLayout";

export default function App() {
  return (
    <PageLayout>
      <RouterProvider router={routes} />
    </PageLayout>
  );
}

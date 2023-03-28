import * as React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "@/routes";
import PageLayout from "@/layouts/pageLayout";

export default function App() {
  console.log(routes.routes)
  return (
    <PageLayout>
      {routes.routes.map((item, index) => (
        <h2>{item.path} - {item.name}</h2>
      ))}
      <RouterProvider router={routes} />
    </PageLayout>
  );
}

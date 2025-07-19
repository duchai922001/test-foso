import { lazy, Suspense } from "react";
import CommonLayout from "../layouts/CommonLayout";

const Home = lazy(() => import("@/pages/Home"));

const PublicRoutes = {
  path: "/",
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <CommonLayout />
    </Suspense>
  ),
  children: [{ index: true, element: <Home /> }],
};

export default PublicRoutes;

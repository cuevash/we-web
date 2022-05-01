// This page will show up at generic /page here

import {
  PlasmicRootProvider,
  PlasmicComponent,
} from "@plasmicapp/loader-react";
import { PLASMIC } from "../plasmic-init";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

// Fetch the data needed to render Plasmic pages or components, server-side.
export const loader = async ({ params }) => {
  const page = params["*"];
  // You can pass in multiple page paths or component names.
  const plasmicData = await PLASMIC.fetchComponentData(`/${page}`);
  return json(plasmicData)
    .json()
    .then((result) => ({ renderData: result, page }));
};

// Render the page or component from Plasmic.
export default function MyPage() {
  const { renderData: plasmicData, page } = useLoaderData();
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={`/${page}`} />
    </PlasmicRootProvider>
  );
}

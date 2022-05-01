import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "wx6aoo7FZEXNn8vLYsSQDm", // ID of a project you are using
      token:
        "39OfoCA8DpPRl77qnd0OaDy2KwrCTemIsjbkKs6nngQB5wbDSzIUVEdCS9uHoEAq22pzz4yysDLOMT7Uaw", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});

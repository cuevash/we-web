var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});

// ../../node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/hector/code_projects/WeWeb/we-web/packages/weweb-site/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/hector/code_projects/WeWeb/we-web/packages/weweb-site/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => MyPage,
  loader: () => loader
});
var import_loader_react2 = require("@plasmicapp/loader-react");

// app/plasmic-init.ts
var import_loader_react = require("@plasmicapp/loader-react");
var PLASMIC = (0, import_loader_react.initPlasmicLoader)({
  projects: [
    {
      id: "wx6aoo7FZEXNn8vLYsSQDm",
      token: "39OfoCA8DpPRl77qnd0OaDy2KwrCTemIsjbkKs6nngQB5wbDSzIUVEdCS9uHoEAq22pzz4yysDLOMT7Uaw"
    }
  ],
  preview: true
});

// route:/Users/hector/code_projects/WeWeb/we-web/packages/weweb-site/app/routes/index.tsx
var import_react3 = require("@remix-run/react");
var import_node = require("@remix-run/node");
var loader = async () => {
  const plasmicData = await PLASMIC.fetchComponentData("/");
  return (0, import_node.json)(plasmicData);
};
function MyPage() {
  const plasmicData = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_loader_react2.PlasmicRootProvider, {
    loader: PLASMIC,
    prefetchedData: plasmicData
  }, /* @__PURE__ */ React.createElement(import_loader_react2.PlasmicComponent, {
    component: "/"
  }));
}

// route:/Users/hector/code_projects/WeWeb/we-web/packages/weweb-site/app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => MyPage2,
  loader: () => loader2
});
var import_loader_react3 = require("@plasmicapp/loader-react");
var import_react4 = require("@remix-run/react");
var import_node2 = require("@remix-run/node");
var loader2 = async ({ params }) => {
  const page = params["*"];
  const plasmicData = await PLASMIC.fetchComponentData(`/${page}`);
  return (0, import_node2.json)(plasmicData).json().then((result) => ({ renderData: result, page }));
};
function MyPage2() {
  const { renderData: plasmicData, page } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ React.createElement(import_loader_react3.PlasmicRootProvider, {
    loader: PLASMIC,
    prefetchedData: plasmicData
  }, /* @__PURE__ */ React.createElement(import_loader_react3.PlasmicComponent, {
    component: `/${page}`
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "22816077", "entry": { "module": "/build/entry.client-HQBHXYW6.js", "imports": ["/build/_shared/chunk-C2BPGIMH.js", "/build/_shared/chunk-44I7NOWX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-JO63RMQP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$-T6WTGAI5.js", "imports": ["/build/_shared/chunk-7CIUZH3R.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-LJWGAHXG.js", "imports": ["/build/_shared/chunk-7CIUZH3R.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-22816077.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  let authHeader = event.headers["authorization"];
  let graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "production"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=server.js.map

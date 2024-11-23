import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BPC8NyBa.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_BCn1jvSO.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Proyectos/Astro/Porfolio_2024_v1/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index._tqYrhoZ.css"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index._tqYrhoZ.css"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Proyectos/Astro/Porfolio_2024_v1/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["C:/Proyectos/Astro/Porfolio_2024_v1/src/pages/es/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Proyectos/Astro/Porfolio_2024_v1/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Proyectos/Astro/Porfolio_2024_v1/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_MaWgT424.mjs","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index._tqYrhoZ.css","/favicon.svg","/icon_angular_black.svg","/icon_angular_white.svg","/icon_astro_dark.svg","/icon_astro_white.svg","/icon_cplusplus_black.svg","/icon_cplusplus_white.svg","/icon_csharp_black.svg","/icon_csharp_white.svg","/icon_css_black.svg","/icon_css_white.svg","/icon_cv_black.svg","/icon_cv_white.svg","/icon_c_black.svg","/icon_c_white.svg","/icon_github_black.svg","/icon_github_white.svg","/icon_git_black.svg","/icon_git_white.svg","/icon_html_black.svg","/icon_html_white.svg","/icon_java_black.svg","/icon_java_white.svg","/icon_js_black.svg","/icon_js_white.svg","/icon_laravel_black.svg","/icon_laravel_white.svg","/icon_linkedin_black.svg","/icon_linkedin_white.svg","/icon_link_black.svg","/icon_link_white.svg","/icon_mysql_black.svg","/icon_mysql_white.svg","/icon_nestjs_black.svg","/icon_nestjs_white.svg","/icon_nodejs_black.svg","/icon_nodejs_white.svg","/icon_php_black.svg","/icon_php_wihte.svg","/icon_postgresql_black.svg","/icon_postgresql_white.svg","/icon_spain.svg","/icon_sqlserver_black.svg","/icon_sqlserver_white.svg","/icon_tailwind_black.svg","/icon_tailwind_white.svg","/icon_typescript_black.svg","/icon_typescript_white.svg","/icon_usa.svg","/icon_vuejs_black.svg","/icon_vuejs_white.svg","/image.png","/Logo_1.svg","/Logo_2.svg","/profile.jpg","/_astro/client.5I5BMcNS.js"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["es","en"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"eM8oKylkI40RhM0BnITp/+nkFb/teQjXNmRzP+g7wjM=","experimentalEnvGetSecretEnabled":false});

export { manifest };

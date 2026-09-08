import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/hero_dark.svg";
const _imports_1 = "/hero_light.svg";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"title":""},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bash" tabindex="-1">BASH <a class="header-anchor" href="#bash" aria-label="Permalink to &quot;BASH&quot;">​</a></h1><p>Fundamentos teóricos</p><p>Administración de sistemas con BASH</p><p><img${ssrRenderAttr("src", _imports_0)} alt="BASH Scripting Fundamentos" class="hero-dark"><img${ssrRenderAttr("src", _imports_1)} alt="BASH Scripting Fundamentos" class="hero-light"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

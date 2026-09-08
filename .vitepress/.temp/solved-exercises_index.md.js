import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ejercicios resueltos","description":"","frontmatter":{},"headers":[],"relativePath":"solved-exercises/index.md","filePath":"solved-exercises/index.md"}');
const _sfc_main = { name: "solved-exercises/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ejercicios-resueltos" tabindex="-1">Ejercicios resueltos <a class="header-anchor" href="#ejercicios-resueltos" aria-label="Permalink to &quot;Ejercicios resueltos&quot;">​</a></h1><p>Próximamente: casos prácticos resueltos para fijar los conocimientos del lenguaje.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("solved-exercises/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

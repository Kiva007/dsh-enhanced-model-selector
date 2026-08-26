// Node-side entry point for dsh-enhanced-model-selector.
//
// This plugin is pure client-side: its browser bundle (lib/client.js) runs
// inside window.__ModuleLoader__.load() and registers React components.
// The Cordis loader imports this file on the Node side when it materializes
// the plugin row from cordis.patch.yml; we must not reference `window` here.
//
// The plugin contributes nothing on the host side — it only needs a loader
// entry/fiber so that client-modules recognizes the package and serves its
// client bundle at /plugins/dsh-enhanced-model-selector/client.js.

export function apply() {
  // No host-side contributions.
}

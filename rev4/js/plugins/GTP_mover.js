{
  $modLoader.pluginLocks.delete("DGT_YamlErrorDisambiguator");
  let gtpIndex = params.$plugins.findIndex(gPlugin => gPlugin.name === "GTP_OmoriFixes");
  params.$plugins.splice(gtpIndex, 0, {
      name: "DGT_YamlErrorDisambiguator",
      status: true,
      description: "Modded plugin",
      parameters: {}
  });
}

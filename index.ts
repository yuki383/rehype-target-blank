import type { Node } from "unist";
import visit from "unist-util-visit";
import is from "unist-util-is";

module.exports = attacher;

function attacher() {
  return transformer;

  function transformer(tree: Node) {
    visit(tree, visitor);

    function visitor(node: Node) {
      if (is(node, { tagName: "a" })) {
        Object.assign(node, {
          properties: {
            target: "_blank",
            rel: "noopener",
          },
        });
      }
    }
  }
}

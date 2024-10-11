// transform a list for sectoins seperated by <hr /> into 
// a list of sections wrapped in <slide>...</slide> elements

function slide(children) {
  return {
    type: "element",
    tagName: "slide",
    children,
  };
}

export default function rehypeSlides() {
  return function (tree) {
    let acc = [];
    let res = [];
    for (const child of tree.children) {
      if (child.type === "element" && child.tagName === "hr") {
        if (acc.length) {
          res.push(slide(acc));
          acc = [];
        }
        continue;
      }
      acc.push(child);
    }
    if (acc.length) res.push(slide(acc));
    tree.children = res;
  };
}

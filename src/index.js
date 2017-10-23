export default function _f(children) {
  const frag = document.createDocumentFragment();
  for (const child of children){
    frag.appendChild(child);
  }
  return frag;
}
function buildWrapper(arg) {
  const wrapper = function (input, attr = {}) {
    function replacer(line) {
      replaced = line
        .replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

      return replaced;
    }
    const inputFormatted = replacer(input);

    const attrFormatted = Object.keys(attr)
      .map((e) => ` ${e}='${replacer(attr[e])}'`)
      .toString()
      .replace(/,/g, '');

    const result = `<${arg}${attrFormatted}>${inputFormatted}</${arg}>`;
    return result;
  };
  return wrapper;
}

let wrapP = buildWrapper('P');
let wrapH1 = buildWrapper('H1');

console.log(wrapP('test string'));
console.log(wrapP('N<P'));
console.log(wrapP('test', { lang: 'ru' }));
console.log(
  wrapH1('СТИХИ', { align: 'center', title: "M&M's" }) ==
    "<H1 align='center' title='M&amp;M&apos;s'>СТИХИ</H1>"
);
console.log(wrapH1('СТИХИ', { align: 'center', title: "M&M's" }));

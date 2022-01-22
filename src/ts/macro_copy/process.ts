declare global {
  interface String {
    wlength(): number;
    wpadEnd(length: number, ch: string): string;
  }
}

String.prototype.wlength = function () {
  return Array.from(this).reduce(
    (acc, ch) => acc + (ch.match(/[ -~]/) ? 1 : 2),
    0
  );
};

String.prototype.wpadEnd = function (length: number, ch: string) {
  let str = this.slice();
  for (let i = length - str.wlength(); i > 0; i--) {
    str += ch;
  }
  return str;
};

export const trimHeader = (text: string): string => {
  return text
    .split("\n")
    .map((t) => t.slice(Math.max(t.indexOf(") "), t.indexOf("> ")) + 2))
    .join("\n");
};

export const addHeader = (head: string, text: string): string => {
  return text
    .split("\n")
    .map((t) => head + " " + t)
    .join("\n");
};

export const addFooter = (foot: string, text: string): string => {
  const maxLL = text
    .split("\n")
    .reduce((acc, t) => Math.max(acc, t.wlength()), 0);

  return text
    .split("\n")
    .map((t) => `${t.wpadEnd(maxLL, " ")} ${foot}`)
    .join("\n");
};

export const paginate = (text: string, linenum = 15): string[][] => {
  const texts = text.split("\n");
  const res = [];

  for (let i = 0; i < texts.length; i += linenum) {
    res.push(texts.slice(i, i + linenum));
  }

  return res;
};

const cache = {};

export default class Symbol {
  constructor(name = Symbol.random()) {
    this.name = name;

    if (cache[name]) {
      this.img = cache[name].cloneNode();
    } else {
      this.img = new Image();
      this.img.src = require(`../assets/symbols/${name}.jpg`).default;

      cache[name] = this.img;
    }
  }

  static preload() {
    Symbol.symbols.forEach((symbol) => new Symbol(symbol));
  }

  static get symbols() {
    return [
      "vw-1891-01-04-3-004-13",
      "vw-1891-01-04-3-008-37",
      "vw-1891-01-25-21-004-26",
      "vw-1891-01-25-21-012-78",
      "vw-1891-02-22-45-012-72",
      "vw-1891-03-22-69-012-54",
      "vw-1891-03-29-74-007-53",
      "vw-1891-03-29-74-008-6",
      "vw-1891-04-05-79-010-3",
      "vw-1891-04-05-79-011-27",
      "vw-1891-04-12-85-013-47",
      "vw-1891-05-03-102-011-45",
      "vw-1891-05-24-118-012-51",
      "vw-1891-05-24-118-012-64",
      "vw-1891-05-31-124-012-71",
      "vw-1891-07-19-166-008-16",
      "vw-1891-10-25-250-008-13",
      "vw-1891-11-08-262-010-2",
      "vw-1891-11-08-262-011-10",
      "vw-1891-11-15-268-008-5",
      "vw-1891-11-22-274-011-36",
      "vw-1891-11-29-280-011-5",
      "vw-1891-12-06-286-011-29",
      "vw-1891-12-13-292-004-13",
    ];
  }

  static random() {
    return this.symbols[Math.floor(Math.random() * this.symbols.length)];
  }
}

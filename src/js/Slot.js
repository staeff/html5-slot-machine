import Reel from "./Reel.js";
import Symbol from "./Symbol.js";

export default class Slot {
  constructor(domElement, config = {}) {
    Symbol.preload();

    this.currentSymbols = [
      [
        "vw-1891-11-08-262-011-10",
        "vw-1891-05-03-102-011-45",
        "vw-1891-07-19-166-008-16",
      ],
      [
        "vw-1891-11-08-262-011-10",
        "vw-1891-05-03-102-011-45",
        "vw-1891-07-19-166-008-16",
      ],
      [
        "vw-1891-11-08-262-011-10",
        "vw-1891-05-03-102-011-45",
        "vw-1891-07-19-166-008-16",
      ],
      [
        "vw-1891-11-08-262-011-10",
        "vw-1891-05-03-102-011-45",
        "vw-1891-07-19-166-008-16",
      ],
      [
        "vw-1891-11-08-262-011-10",
        "vw-1891-05-03-102-011-45",
        "vw-1891-07-19-166-008-16",
      ],
    ];

    this.nextSymbols = [
      [
        "vw-1891-11-08-262-011-10",
        "vw-1891-05-03-102-011-45",
        "vw-1891-07-19-166-008-16",
      ],
      [
        "vw-1891-11-08-262-011-10",
        "vw-1891-05-03-102-011-45",
        "vw-1891-07-19-166-008-16",
      ],
      [
        "vw-1891-11-08-262-011-10",
        "vw-1891-05-03-102-011-45",
        "vw-1891-07-19-166-008-16",
      ],
      [
        "vw-1891-11-08-262-011-10",
        "vw-1891-05-03-102-011-45",
        "vw-1891-07-19-166-008-16",
      ],
      [
        "vw-1891-11-08-262-011-10",
        "vw-1891-05-03-102-011-45",
        "vw-1891-07-19-166-008-16",
      ],
    ];

    this.container = domElement;

    this.reels = Array.from(this.container.getElementsByClassName("reel")).map(
      (reelContainer, idx) =>
        new Reel(reelContainer, idx, this.currentSymbols[idx])
    );

    this.spinButton = document.getElementById("spin");
    this.spinButton.addEventListener("click", () => this.spin());

    this.autoPlayCheckbox = document.getElementById("autoplay");

    if (config.inverted) {
      this.container.classList.add("inverted");
    }
  }

  spin() {
    this.onSpinStart();

    this.currentSymbols = this.nextSymbols;
    this.nextSymbols = [
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
    ];

    return Promise.all(
      this.reels.map((reel) => {
        reel.renderSymbols(this.nextSymbols[reel.idx]);
        return reel.spin();
      })
    ).then(() => this.onSpinEnd());
  }

  onSpinStart() {
    this.spinButton.disabled = true;

    console.log("SPIN START");
  }

  onSpinEnd() {
    this.spinButton.disabled = false;

    console.log("SPIN END");

    if (this.autoPlayCheckbox.checked) {
      return window.setTimeout(() => this.spin(), 200);
    }
  }
}

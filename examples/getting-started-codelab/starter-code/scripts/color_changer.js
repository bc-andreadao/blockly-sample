/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ColorChanger = {
  queue_: [],
  queueColor: function (colorHexCode) {
    this.queue_.push(colorHexCode);
  },
  colorChange: function (element) {
    const next = this.queue_.shift();
    if (next) {
      element.style.backgroundColor = next;
    }
  },
};

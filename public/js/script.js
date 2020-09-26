// Drum Arrays
const createArray = () => new Array(16).fill(false);

let kicks = createArray();
let snares = createArray();
let hiHats = createArray();
let rideCymbals = createArray();

const auxGetArray = (arr) => {
  switch (arr) {
    case "kicks":
      return kicks;
    case "snares":
      return snares;
    case "hiHats":
      return hiHats;
    case "rideCymbals":
      return rideCymbals;
    default:
      return;
  }
};

const toggleDrum = (arr, num) => {
  const instrument = auxGetArray(arr);
  if (!instrument || 0 > num || num > 15) {
    return;
  }

  instrument[num] = !instrument[num];
};

const clear = (arr) => {
  const instrument = auxGetArray(arr);
  if (instrument) {
    instrument.fill(false);
  }
};

const invert = (arr) => {
  const instrument = auxGetArray(arr);
  if (instrument) {
    for (let i = 0; i < instrument.length; i++) {
      instrument[i] = !instrument[i];
    }
  }
};

const checkOutsideRange = (coord, maxSize) => {
  return 0 <= coord && coord < maxSize;
};

const getNeighborPads = (x, y, size) => {
  if (!checkOutsideRange(x, size) || !checkOutsideRange(y, size)) {
    return [];
  }

  res = [];

  if (checkOutsideRange(x - 1, size)) {
    res.push([x - 1, y]);
  }

  if (checkOutsideRange(x + 1, size)) {
    res.push([x + 1, y]);
  }

  if (checkOutsideRange(y - 1, size)) {
    res.push([x, y - 1]);
  }

  if (checkOutsideRange(y + 1, size)) {
    res.push([x, y + 1]);
  }

  return res;
};

module.exports = (number) => {
  let floats = Number.parseFloat(number);

  if (floats.toString().indexOf(".") != -1) {
    let round = floats.toString().split(".")[0].length;
    return Number(floats.toFixed(17 - round > 0 ? 17 - round : 2));
  }

  return Number(floats);
};

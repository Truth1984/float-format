let op = (number) => {
  let floats = Number.parseFloat(number);

  if (floats.toString().indexOf(".") != -1) {
    let round = floats.toString().split(".")[0].length;
    return Number(floats.toFixed(17 - round > 0 ? 17 - round : 2));
  }

  return Number(floats);
};

/**
 *
 * @param {*} float1
 * @param {*} float2
 * @param {number | undefined} nearest if nearest is undefined, then use the one with closest precision, otherwise with given one
 *
 * @return {boolean}
 */
op.compare = (float1, float2, nearest) => {
  if (nearest == undefined) {
    let percision1 = float1.toString().split(".")[1] == undefined ? 0 : float1.toString().split(".")[1].length;
    let percision2 = float2.toString().split(".")[1] == undefined ? 0 : float2.toString().split(".")[1].length;
    let targetPercision = Math.min(percision1, percision2);
    return float1.toFixed(targetPercision) === float2.toFixed(targetPercision);
  }
  return float1.toFixed(nearest) === float2.toFixed(nearest);
};

module.exports = op;

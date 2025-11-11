/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const AX = secondPoint.X - firstPoint.X;
  const AY = secondPoint.Y - firstPoint.Y;
  const distance = Math.sqrt(AX * AX + AY * AY);
  return Math.round(distance * 100) / 100;
};

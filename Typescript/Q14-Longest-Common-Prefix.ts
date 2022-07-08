/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs: string[]): string {
  var len: number = strs[0].length;
  var res: string = "";
  for (let i = 0; i < len; i++) {
    for (const e of strs) {
      if (i == e.length || e[i] != strs[0][i]) {
        return res;
      }
    }
    res += strs[0][i];
  }
  return res;
};
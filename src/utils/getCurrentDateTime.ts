/**
 * 現在日時取得関数
 *
 * @return {string} 0000/01/01 01:01の形式で返す
 */
function getCurrentDateTime() {
  const now = new Date();
  const y = now.getFullYear();
  const m = ('00' + (now.getMonth() + 1)).slice(-2);
  const d = ('00' + now.getDate()).slice(-2);
  const h = ('00' + now.getHours()).slice(-2);
  const min = ('00' + now.getMinutes()).slice(-2);
  const s = ('00' + now.getSeconds()).slice(-2);
  const nowDateTime = y + '/' + m + '/' + d + ' ' + h + ':' + min;

  return nowDateTime;
}

export default getCurrentDateTime;

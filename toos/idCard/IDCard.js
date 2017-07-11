/**
 * Created by louiszhai on 17/7/11.
 * 中国公民身份证号码生成或验证
 */

/**
 * 18位身份证号依次包含: 6位地区码 + 8位生日码 + 3位顺序码 + 1位校验码. 校验码生成规则如下:
 *
 * 1、将前面的身份证号码17位数分别乘以不同的系数. 从第一位到第十七位的系数分别为：7－9－10－5－8－4－2－1－6－3－7－9－10－5－8－4－2.
 * 2、将这17位数字和系数相乘的结果相加.
 * 3、用加出来和除以11，看余数是多少.
 * 4、余数只可能有0－1－2－3－4－5－6－7－8－9－10这11个数字. 其分别对应的最后一位身份证的号码为1－0－X －9－8－7－6－5－4－3－2.
 * 5、如果对应的数字是0, 身份证的最后一位号码就是数字1.
 *
 * @param cardId
 * @returns {boolean}
 */
function verify(cardId) {
  var weightingFactor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], // 加权因子
      checkCodes = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]; // 校验码

  if (/^\d{17}(\d|x)$/i.test(cardId)) { // 判断身份证格式是否正确
    var year = cardId.substr(6, 4),
        month = cardId.substr(10, 2),
        day = cardId.substr(12, 2),
        array = [year, month, day];

    if (date2String(new Date(array.join('-'))) === array.join('')) { // 判断生日码是否正确
      var k, sum = 0, cardIds = cardId.split('');
      for(var i = 0; i < cardIds.length - 1; i++){
        sum += +cardIds[i] * weightingFactor[i]; // 对前17位数字与权值乘积求和
      }
      // 计算模
      k = sum % 11;
      // 判断第18位是否与校验码相等
      return cardIds[17].toUpperCase() == checkCodes[k];
    }
  }
  return false;
}

function date2String(date) {
  var year = date.getFullYear(),
      month = (date.getMonth() + 1 + 100 + '').substr(1),
      day = (date.getDate() + 100 + '').substr(1);
  return year + month + day;
}
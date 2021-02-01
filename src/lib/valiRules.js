export const emailPattern = /^([a-z0-9A-Z_]+[-|\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/
export const phonePattern = /^1[3456789]\d{9}$/

//验证手机号码
export function checkMobilePhone(str) {
    var reg = phonePattern;
    return reg.test(str);
};

// 邮箱的校验
export function isEmail(str) {
    var reg = emailPattern;
    // var repeatCheck = str.split('.net').length - 1 < 2 && str.split('.cn').length - 1 < 2 && str.split('.com').length - 1 < 2 && str.split('.org').length - 1 < 2;

    return reg.test(str);
};

// 与团险交互邮箱校验

export function isTXEmail(str) {
    var reg = /^[A-Za-z0-9]+@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

    var repeatCheck = str.split('.net').length - 1 < 2 && str.split('.cn').length - 1 < 2 && str.split('.com').length - 1 < 2 && str.split('.org').length - 1 < 2;

    return reg.test(str) && repeatCheck;
};

// 验证是否为整数
export function checkNumber(str) {
    var reg = /\D/;
    return reg.test(str);
};
// 验证VinCode
export function checkVinCode(sVIN) {
    var sKYZF = "ABCDEFGHJKLMNPRSTUVWXYZ1234567890";
    var sJYW = '';
    var bl = false;
    var blKYZF = false;
    if (sVIN.length === 17) {
        var iJQS = 0, intTemp = 0;
        var ht = [];
        var htZM = [];
        ht['A'] = 1;
        ht['B'] = 2;
        ht['C'] = 3;
        ht['D'] = 4;
        ht['E'] = 5;
        ht['F'] = 6;
        ht['G'] = 7;
        ht['H'] = 8;
        ht['J'] = 1;
        ht['K'] = 2;
        ht['L'] = 3;
        ht['M'] = 4;
        ht['N'] = 5;
        ht['P'] = 7;
        ht['R'] = 9;
        ht['S'] = 2;
        ht['T'] = 3;
        ht['U'] = 4;
        ht['V'] = 5;
        ht['W'] = 6;
        ht['X'] = 7;
        ht['Y'] = 8;
        ht['Z'] = 9;
        ht['1'] = 1;
        ht['2'] = 2;
        ht['3'] = 3;
        ht['4'] = 4;
        ht['5'] = 5;
        ht['6'] = 6;
        ht['7'] = 7;
        ht['8'] = 8;
        ht['9'] = 9;
        ht['0'] = 0;
        htZM[1] = 8;
        htZM[2] = 7;
        htZM[3] = 6;
        htZM[4] = 5;
        htZM[5] = 4;
        htZM[6] = 3;
        htZM[7] = 2;
        htZM[8] = 10;
        htZM[9] = 0;
        htZM[10] = 9;
        htZM[11] = 8;
        htZM[12] = 7;
        htZM[13] = 6;
        htZM[14] = 5;
        htZM[15] = 4;
        htZM[16] = 3;
        htZM[17] = 2;
        try {
            for (var i = 0; i < sVIN.length; i++) {
                if (sKYZF.indexOf(sVIN.substr(i, 1)) !== -1) {
                    blKYZF = true;
                    iJQS = iJQS + parseInt(ht[sVIN.substr(i, 1)]) * parseInt(htZM[(i + 1)]);
                } else {
                    blKYZF = false;
                    break;
                }
            }
            if (blKYZF) {
                intTemp = iJQS % 11;
                if (intTemp === 10) {
                    sJYW = "X";
                } else {
                    sJYW = intTemp.toString();
                }
                if (sJYW === sVIN.substr(8, 1)) bl = true;
            } else {
                bl = false;
            }
        } catch (err) {
            bl = false;
        }
    }
    return bl;
};
/** 验证中文姓名*/
export function getRealName(str) {
    var reg = /^[\u4e00-\u9FCB|\u3400-\u4DB5]+$/;
    return str.match(reg);
};

/** 姓名含有·的校验*/
export function getSpecialName(str) {
    if (str.length < 2) {
        return false
    }
    let reg1 = /^[\u4E00-\u9FA5A-Za-z]+$/;
    //let reg2 = /^[\u4E00-\u9FA5]+$/;
    // if (type == '1') {
    //     return reg1.test(str)
    // } else {
    //     return reg2.test(str)
    // }
    return reg1.test(str)
};
//判断是否整数 true是
export function isDigit(str) {
    return /^\d+$/.test(str)
}
/**
----------------证件号码校验------------------------------------
 */
// 校验身份证号码
export function checkIdCardNo(idNo) {
    let idcard = idNo.toUpperCase();
    let area = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        83: "台湾",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外",
    };
    let ereg, eregNow;
    if (area[parseInt(idcard.substr(0, 2))] === null) {
        // 身份证地区-身份证地区不正确
        return false;
    }
    // 身份证末尾校验
    function jxIdCardLastCheck(code) {
        code = code.split("");
        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        var parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
        var sum = 0;
        var ai = 0;
        var wi = 0;
        for (var i = 0; i < 17; i++) {
            ai = code[i];
            wi = factor[i];
            sum += ai * wi;
        }
        var last = parity[sum % 11];

        return last.toString() === code[17];
    }
    switch (idcard.length) {
        case 18:
            if (
                parseInt(idcard.substr(6, 4)) % 4 === 0 ||
                (parseInt(idcard.substr(6, 4)) % 100 === 0 &&
                    parseInt(idcard.substr(6, 4)) % 4 === 0)
            ) {
                ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; // 闰年出生日期的合法性正则表达式
                eregNow = /^[1-9][0-9]{5}20[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; // 闰年出生日期的合法性正则表达式
            } else {
                ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; // 平年出生日期的合法性正则表达式
                eregNow = /^[1-9][0-9]{5}20[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; // 平年出生日期的合法性正则表达式
            }
            if (ereg.test(idcard) || eregNow.test(idcard)) {
                // 身份证号码末尾校验
                if (jxIdCardLastCheck(idcard)) {
                    return true; // 校验通过
                } else {
                    return false;//身份证号码末尾校验不通过
                }
            } else {
                return false; // 身份证号码出生日期超出范围或含有非法字符
            }
        default:
            return false; // 身份证号码位数不对
    }
}
// 校验护照
export function checkPassportNo(val) {
    if (val.length < 5) {
        return false
    } else {
        return true
    }
}
// 证件号码综合校验
export function checkID(value,type){
    if (type == "身份证") {
        return checkIdCardNo(value)
    } else if(type=="护照"){
        return checkPassportNo(value)
    }
}
/**
----------------姓名校验------------------------------------
 */
export function checkName(theName){
    if (theName.length < 2) {
        return false
    }
    let reg1 = /^[\u4E00-\u9FA5A-Za-z]+$/;
    return reg1.test(theName)
}

/**
----------------价格（保留小数点后两位）------------------------------------
 */
export function checkPrice(val) {
    return /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/.test(val);
}
export function checkLoanAmount(val) {
        let errorMsg = '';
         if (!val) {
           return /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/.test(val);
         } else {
          errorMsg = "保额不能为0"
           return false;
         }
       }

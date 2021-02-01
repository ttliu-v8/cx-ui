/** 与证件号码相关的验证提示语 */
export const IDCARD_MSG = '您录入的证件号码有误，身份证的证件号码应为18位且符合编码规则，请检查证件号码是否有误'
export const PASSWORD_MSG = "您录入的证件号码有误，护照号码应不少于5个字符"
export function getCheckIdMsg(type){
    if (type == "身份证") {
        return IDCARD_MSG
    } else if(type=="护照"){
        return PASSWORD_MSG
    }
}

/** 姓名校验提示语 */
export const NAME_MSG = "姓名长度必须大于等于两个字符,且不得含有特殊字符、不得含有数字"

/** 手机号码校验提示语 */
export const MOBILEPHONE_MSG = "您录入的手机号码格式错误！"

/** 电子邮箱校验提示语 */
export const EMAIL_MSG = "您录入的电子邮箱格式错误！"
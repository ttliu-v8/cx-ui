import { checkID, checkName, checkMobilePhone } from "@/lib/valiRules.js";
const bankMap={
    "001": "中国工商银行",
    "002": "中国建设银行",
    "004": "中国邮政储蓄银行",
    "005": "中国农业银行",
    "006": "中国民生银行",
    "007": "招商银行",
    "008": "兴业银行",
    "009": "中国银行",
    "010": "中信实业银行",
    "012": "交通银行",
    "013": "上海浦东发展银行",
    "014": "深圳发展银行",
    "015": "中国光大银行",
    "016": "华夏银行",
    "018": "广东发展银行",
    "025": "平安银行",
    "027": "上海银行",
    "030": "农信湖南",
    "044": "大连银行",
    "046": "东莞银行",
    "050": "乐山商行",
    "051": "贵阳银行",
    "052": "北京银行",
    "053": "宁波银行",
    "054": "南京银行",
    "055": "郑州银行",
    "056": "南昌银行",
    "057": "泉州银行",
    "058": "绵阳商行",
    "059": "枣庄银行",
    "060": "农信山东",
    "061": "农信安徽",
    "062": "农信福建",
    "063": "农信江西",
    "064": "农信湖北",
    "066": "农信内蒙",
    "067": "农商重庆"
}
const demoMap = {
    formConfig: {
        submitText: "下一步"
    },
    elementMap: {
        fullName: {
            label: "姓名",
            name: "fullName",
            value: "",
            required: true,
            eleType: "input",
            inputType: "text",
            maxlength: 50,
            placeholder: "请输入投保人姓名",
            rules: [
                { required: true, message: "" },
                { validator: checkName, message: "您录入的姓名格式错误" }
            ]
        },
        idTypeAndCode: {
            // 证件类型，证件号码，生日，性别联动控件
            label: "",
            eleType: "idTypeAndCard",
            name: "idTypeAndCode",
            value: "",
            childMap: {
                idType: {
                    label: "证件类型",
                    name: "idType",
                    value: "身份证",
                    required: true,
                    colon: true,
                    eleType: "commPicker",
                    columns: ["身份证", "护照"],
                    rightIcon: "triangle"
                },
                idCard: {
                    label: "证件号码",
                    name: "idCard",
                    value: "",
                    required: true,
                    eleType: "input",
                    inputType: "text",
                    maxlength: 18,
                    placeholder: "请输入证件号码",
                    rules: [
                        { required: true, message: "" },
                        {
                            validator: value => {
                                let idType = demoMap.elementMap.idTypeAndCode.value.split("$")[0];
                                return checkID(value, idType);
                            },
                            message: "您录入的证件号码格式错误"
                        }
                    ]
                },
                birthday: {
                    label: "出生日期",
                    name: "birthday",
                    value: "",
                    required: true,
                    eleType: "datetimePicker",
                    currentDate: new Date(1990, 0, 1),
                    minDate: new Date(1900, 0, 1),
                    maxDate: new Date(2100, 11, 31),
                    placeholder: "请选择出生日期",
                    visible: false,
                    rightIcon: "calendar",
                    rules: [{ required: true, message: "", trigger: "onChange" }]
                },
                gender: {
                    label: "性别",
                    name: "gender",
                    value: "",
                    required: true,
                    eleType: "commPicker",
                    columns: ["男", "女"],
                    placeholder: "请选择性别",
                    visible: false,
                    rightIcon: "triangle",
                    rules: [{ required: true, message: "", trigger: "onChange" }]
                }
            }
        },
        mobilePhoneNumber: {
            label: "手机号码",
            name: "mobilePhoneNumber",
            value: "",
            required: true,
            eleType: "input",
            inputType: "tel",
            maxlength: 11,
            placeholder: "请输入您的手机号码",
            rules: [
                { required: true, message: "" },
                { validator: checkMobilePhone, message: "您录入的手机号码格式错误" }
            ]
        },
        address: {
            label: "地址",
            name: "address",
            value: "",
            required: false,
            eleType: "addressPicker",
            placeholder: "请选择省、市、区",
            rightIcon: "triangle",
            addressValue: "",
            provinceCode: "430000",
        },
        branchBankName: {
            label: "机构名称",
            labelWidth: "100px",
            name: "branchBankName",
            value: "",
            placeholder: "请选择机构名称",
            clearable:true,
            eleType: "autocomplete",
            required: false,
            rightIcon: "triangle",
            dataMap:bankMap
        },
        recommender: {
            // 自定义控件
            label: "推荐人",
            name: "recommender",
            value: "",
            eleType: "customer",
            required: false,
            childMap: {
                jobNumber: {
                    label: "",
                    name: "jobNumber",
                    value: "",
                    required: false,
                    eleType: "input",
                    inputType: "text",
                    maxlength: 20,
                    border: false,
                    placeholder: "请输入工号"
                },
                jobName: {
                    label: "",
                    name: "jobName",
                    value: "",
                    required: false,
                    eleType: "input",
                    inputType: "text",
                    maxlength: 20,
                    border: false,
                    placeholder: "请输入姓名"
                }
            }
        }

    },
    
}
export default demoMap
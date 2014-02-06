

var table = "<table></table>";


var personalInfoButtonContent = "<i class='fa fa-user'></i>"+"</br>"+"个人信息";
var personalInfoButton = createModalButton($("#personalInfoButtonDiv"), "personalInfoModal", personalInfoButtonContent);


var nimoInfoButtonContent = "<i class='fa fa-users'></i>"+"</br>"+"楼内网管";
var nimoInfoButton = createModalButton($("#nimoInfoButtonDiv"), "nimoInfoModal", nimoInfoButtonContent);


var readMeButtonContent = "<i class='fa fa-exclamation-triangle'></i>"+"</br>"+"投诉须知";
var readMeButton = createModalButton($("#readMeButtonDiv"), "readMeModal", readMeButtonContent);


var contactButtonContent = "<i class='fa fa-pencil-square-o'></i>"+"</br>"+"我有话说";
var contactButton = createModalButton($("#contactButtonDiv"), "contactModal", contactButtonContent);


var personalInfoBody = createModal($(".container"), "personalInfoModal", "个人信息", table);
personalInfoBody = personalInfoBody.children("table").last();
personalInfoBody.css("text-align", "center");
personalInfoBody.attr("cellpadding", 2);
addRow(personalInfoBody, "学号", "5120379052");
addRow(personalInfoBody, "姓名", "郑阳");
addRow(personalInfoBody, "班级", "F1203702");
addRow(personalInfoBody, "学院", "软件学院");
addRow(personalInfoBody, "房间", "S19-114");
addRow(personalInfoBody, "电话", "18818212254");
addRow(personalInfoBody, "MAC地址", "00-00-00-00-00-00");
addRow(personalInfoBody, "IP地址", "000.000.000.000");
addRow(personalInfoBody, "子网掩码", "255.255.255.128");
addRow(personalInfoBody, "网关", "000.000.000.000");
addRow(personalInfoBody, "DNS", "000.000.000.000");
addRow(personalInfoBody, "备用DNS", "000.000.000.000");
addRow(personalInfoBody, "状态", "正常");
addRow(personalInfoBody, "服务说明", "无");


var nimoInfoBody = createModal($(".container"), "nimoInfoModal", "楼内网管", table);
nimoInfoBody = nimoInfoBody.children("table").last();
nimoInfoBody.css("text-align", "center");
nimoInfoBody.attr("cellpadding", 5);
nimoInfoBody.prepend("<tr><th>姓名</th><th>电话</th><th>寝室</th></tr>");
addRow(nimoInfoBody, "郑阳", "18818212254", "S19-114");
addRow(nimoInfoBody, "只是测试", "18818212254", "S19-114");


var readmeContent = "<div>"+"正文写在这里"+"</div>";
var readMeBody = createModal($(".container"), "readMeModal", "投诉须知", readmeContent);
readMeBody = readMeBody.children("div").last();
readMeBody.attr("cellpadding", 5);


var contactContent = "<div id='formDiv'></div>";
var contactBody = createModal($(".container"), "contactModal", "我有话说", contactContent);
contactBody = contactBody.children('div').last();
contactBody.attr("cellpadding", 5);
var form = createForm($("#formDiv"));
addInput(form, '姓名', 'userName', 'Enter Your Name');
addInput(form, '联系方式', 'userEmail', 'Email or Mobile');
addTextArea(form, 3);
addEndButton(form);
form.attr("onsubmit", "return checkform()");
form.attr("action", "#");
form.attr("method", "post");


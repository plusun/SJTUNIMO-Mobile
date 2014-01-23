var info = "学号: <br />姓名: 郑阳<br />班级: F1203702<br />" +
    "学院: 软件学院<br />房间: S19-114<br />电话: 18818212254<br />MAC地址: <br />" +
    ": <br />: <br />网关: 000.000.000.000<br />" +
    "DNS: 202.120.2.101<br />备用DNS: 202.120.2.100<br />状态: 正常<br />服务说明: 无<br />";

var table = "<table></table>";


var dutyButtonContent = "<i class='fa fa-home'></i>"+"</br>"+"值班";
var dutyButton = createModalButton($("#dutyButtonDiv"), "duty", dutyButtonContent);


var repairButtonContent = "<i class='fa fa-wrench'></i>"+"</br>"+"报修";
var drepairButton = createModalButton($("#repairButtonDiv"), "repair", repairButtonContent);


var ant1ButtonContent = "标题甲"+"</br></br>"+"用户甲";
var ant1Button = createModalButton($("#ant1ButtonDiv"), "antModal1", ant1ButtonContent);


var ant2ButtonContent = "标题乙"+"</br></br>"+"用户乙";
var ant2Button = createModalButton($("#ant2ButtonDiv"), "antModal2", ant2ButtonContent);


var ant3ButtonContent = "标题丙"+"</br></br>"+"用户丙";
var ant3Button = createModalButton($("#ant3ButtonDiv"), "antModal3", ant3ButtonContent);


var infoBody = createModal($(".container"), "infoModal", "个人信息", table);
infoBody = infoBody.children("table").last();
infoBody.css("text-align", "center");
infoBody.attr("cellpadding", 2);
attachModal($("#information"), "infoModal");
addRow(infoBody, "学号", "5120379052");
addRow(infoBody, "姓名", "郑阳");
addRow(infoBody, "班级", "F1203702");
addRow(infoBody, "学院", "软件学院");
addRow(infoBody, "房间", "S19-114");
addRow(infoBody, "电话", "18818212254");
addRow(infoBody, "MAC地址", "00-00-00-00-00-00");
addRow(infoBody, "IP地址", "000.000.000.000");
addRow(infoBody, "子网掩码", "255.255.255.128");
addRow(infoBody, "网关", "000.000.000.000");
addRow(infoBody, "DNS", "000.000.000.000");
addRow(infoBody, "备用DNS", "000.000.000.000");
addRow(infoBody, "状态", "正常");
addRow(infoBody, "服务说明", "无");


var nimoerBody = createModal($(".container"), "nimoerModal", "楼内网管", table);
attachModal($("#nimoer"), "nimoerModal");
nimoerBody = nimoerBody.children("table").last();
nimoerBody.css("text-align", "center");
nimoerBody.attr("cellpadding", 5);
nimoerBody.prepend("<tr><th>姓名</th><th>电话</th><th>寝室</th></tr>");
addRow(nimoerBody, "郑阳", "18818212254", "S19-114");
addRow(nimoerBody, "只是测试", "18818212254", "S19-114");


var dutyImage = '【待完善】';
var dutyBody = createModal($(".container"), "duty", "值班表", dutyImage);


var repairImage = '【待完善】';
var repairBody = createModal($(".container"), "repair", "报修表", repairImage);


var antBody1 = createModal($(".container"), "antModal1", "详细资料", table);
antBody1 = antBody1.children("table").last();
antBody1.css("text-align", "center");
antBody1.attr("cellpadding", 5);
addRow(antBody1, "姓名", "用户甲");
addRow(antBody1, "寝室", "寝室甲");
addRow(antBody1, "手机", "手机甲");
addRow(antBody1, "IP地址", "IP地址甲");
addRow(antBody1, "mac地址", "mac地址甲");
addRow(antBody1, "问题描述", "问题描述甲");


var antBody2 = createModal($(".container"), "antModal2", "详细资料", table);
antBody2 = antBody2.children("table").last();
antBody2.css("text-align", "center");
antBody2.attr("cellpadding", 5);
addRow(antBody2, "姓名", "用户乙");
addRow(antBody2, "寝室", "寝室乙");
addRow(antBody2, "手机", "手机乙");
addRow(antBody2, "IP地址", "IP地址乙");
addRow(antBody2, "mac地址", "mac地址乙");
addRow(antBody2, "问题描述", "问题描述乙");


var antBody3 = createModal($(".container"), "antModal3", "详细资料", table);
antBody3 = antBody3.children("table").last();
antBody3.css("text-align", "center");
antBody3.attr("cellpadding", 5);
addRow(antBody3, "姓名", "用户丙");
addRow(antBody3, "寝室", "寝室丙");
addRow(antBody3, "手机", "手机丙");
addRow(antBody3, "IP地址", "IP地址丙");
addRow(antBody3, "mac地址", "mac地址丙");
addRow(antBody3, "问题描述", "问题描述丙");



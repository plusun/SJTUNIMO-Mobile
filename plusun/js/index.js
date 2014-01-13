var info = "学号: <br />姓名: 郑阳<br />班级: F1203702<br />" +
    "学院: 软件学院<br />房间: S19-114<br />电话: 18818212254<br />MAC地址: <br />" +
    ": <br />: <br />网关: 000.000.000.000<br />" +
    "DNS: 202.120.2.101<br />备用DNS: 202.120.2.100<br />状态: 正常<br />服务说明: 无<br />";

var table = "<table></table>";

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

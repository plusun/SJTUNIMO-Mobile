/*
 * Create modal in 'object'(jQuery).
 *   Arguements:
 *     'id': modal's id,
 *     'title': modal's title,
 *     'content': modal's title.
 *   Note: Once this modal is created, it's hidden.
 */
function createModal(object, id, title, content)
{
    var label = id + "_label";
    var divStr = "<div></div>";
    var buttonStr = "<button type='button'></button>"
    var headingStr = "<h4 class='headings'></h4>"

    object.append(divStr); /* Insert a basic div */

    /* Modal div */
    var modal = object.children("div").last(); /* Get this div just inserted */
    modal.attr("id", id);
    modal.attr("class", "modal fade"); /* Make it a modal */
    modal.attr("tabindex", "-1");
    modal.attr("role", "dialog");
    modal.attr("aria-labelledby", label);
    modal.attr("aria-hidden", "true"); /* Hide it at first */
    modal.append(divStr);

    /* Dialog div */
    modal = modal.children("div").last();
    modal.attr("class", "modal-dialog");
    modal.append(divStr);

    /* Content div */
    modal = modal.children("div").last();
    modal.attr("class", "modal-content");

    /* Create header */
    modal.append(divStr);
    var header = modal.children("div").last();
    header.attr("class", "modal-header");
    header.append(buttonStr);
    var times = header.children("button").last();
    times.attr("class", "close");
    times.attr("data-dismiss", "modal");
    times.attr("aria-hidden", "true");
    times.html("&times;");
    header.append(headingStr);
    var heading = header.children(".headings").last();
    heading.attr("class", "modal-title");
    heading.attr("id", label);
    heading.html(title);

    /* Create body */
    modal.append(divStr);
    var body = modal.children("div").last();
    body.attr("class", "modal-body");
    body.html(content);

    /* Create footer */
    modal.append(divStr);
    var footer = modal.children("div").last();
    footer.attr("class", "modal-footer");
    footer.append(buttonStr);
    var button = footer.children("button").last();
    button.attr("class", "btn btn-default");
    button.attr("data-dismiss", "modal");
    button.html("关闭");
	
    return body;
}

/*
 * Create a button and associate it with a modal
 * Arguements:
 *   'object': jQuery element,
 *   'id': modal's id,
 *   'name': button's name(content).
 * Return value:
 *   A button object(jQuery element).
 */
function createModalButton(object, id, name)
{
    object.append("<button></button>");
    var button = object.children("button").last();
    button.attr("class", "btn btn-primary btn-lg btn-block");
    button.attr("data-toggle", "modal");
    button.attr("data-target", "#" + id);
    button.html(name);
    return button;
}

/*
 * Attach an object(jQuery) to a modal
 * Arguements:
 *   'object': the object which is attached,
 *   'id': modal's id.
 */
function attachModal(object, id)
{
    object.attr("data-toggle", "modal");
    object.attr("data-target", "#" + id);
}

/*
 * Description:
 *   Add row into table
 * Arguements:
 *   table: jQuery element of table,
 *   The rest: three datas
 */
function addRow(table, first, second, third)
{
    if (third === undefined)
	row = "<tr><td>" + first + "</td>" + "<td>" + second + "</td></tr>";
    else
	row = "<tr><td>" + first + "</td>" + "<td>" + second + "</td>" +
	"<td>" + third + "</td>" + "</tr>";
    table.append(row);
}

 /*
 * Create form in 'object'(jQuery) 
 * Arguements:
 *   'object': jQuery element,
 * Return value:
 *   A form object(jQuery element).
 */
function createForm(object)
{
	var divStr = "<div></div>";
	var form = '<form role="form"></form>';
	
	object.append(form);
	
	var form = object.children("form").last();
	
	return form;
}

 /*
 * Add inputLine to 'object'(jQuery) 
 * Arguements:
 *   'object': jQuery element,
 *   'content': inputLine's title.
 *   'id': inputLine's id,
 *   'placeHolder': place holder in the inputLine.
 */
function addInput(object, content, id, placeHolder)
{
	var divStr = "<div></div>";
	var labelStr = '<label></label>';
	var inputStr = '<input class="form-control">';
	
	object.append(divStr);
	var row = object.children('div').last();
	row.attr("class","form-group");
	row.append(labelStr);
	row.append(inputStr);
	
	var label = row.children('label').last();
	label.attr('for', id);
	label.html(content);
	
	var input = row.children('input').last();
	input.attr('id', id);
	input.attr('type','text');
	input.attr('placeholder', placeHolder);
}

 /*
 * Add textArea to 'object'(jQuery) 
 * Arguements:
 *   'rows': number of rows of the textArea,
 */
function addTextArea(object, rows)
{
	var divStr = "<div></div>";
	var textAreaStr = '<textarea class="form-control"></textarea>';
	
	object.append(divStr);
	var row = object.children('div').last();
	row.append(textAreaStr);
	var textArea = row.children('textarea').last();
	textArea.attr('rows',rows);
}

 /*
 * Add subitButton to 'object'(jQuery) 
 * Arguements:
 *   'object': jQuery element,
 */
function addEndButton(object)
{
	var buttonStr = '<button type="submit" class="btn btn-default"></button>';
	
	object.append(buttonStr);
	var button = object.children('button').last();
	button.html('提交');
}

function checkform()
{
	$userName = document.getElementById("userName").value;
	$userEmail = document.getElementById("userEmail").value;
	if($userName=='')
	{
		alert("用户名不能为空");
		return false;
	}
	if($userEmail=='')
	{
		alert("联系方式不能为空");
		return false;
	}
	return true;
}
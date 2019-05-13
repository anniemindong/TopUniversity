$(init);

function init()
{
    $("h1").addClass("ui-widget-header");
    $("#tabs").tabs();
    $("#datePicker").datepicker();
    $("#dialog").dialog();
    $("#dialog").dialog("close");    
}

function openDialog()
{
    $("#dialog").dialog("open");
} 

function closeDialog()
{
    $("#dialog").dialog("close");
}
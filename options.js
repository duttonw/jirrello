function init(){
	$('#jiraBaseUrl').on("keypress", function(e) {if (e.keyCode == 13) {save()}});

	var bg = chrome.extension.getBackgroundPage().settings;
	$("#jiraBaseUrl").val(bg.get('jiraBaseUrl'));

	$('#note').click(function(e){$("#jiraBaseUrl").val("https://jira.atlassian.com")});
}
function save(){
	var bgSettings = chrome.extension.getBackgroundPage().settings;
	bgSettings.set('jiraBaseUrl',jQuery('#jiraBaseUrl').val());
}
		
window.addEventListener("load", init);
document.getElementById("save").addEventListener("click",save);

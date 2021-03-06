function() {
	var form = $(this);
	var app = $$(form).app;
	var fdoc = form.serializeObject();
	
	// commit new document
	var doc = {};
	
	doc.title = basename(fdoc.title);
	
	if ( doc.title == "" ) {
		alert('Source Name is required.');
		return false;
	}
	
	doc.type = "item";	
	doc.created_at = new Date();
	doc.updated_at = new Date();
	doc.edit_by = $$("#profile").profile || {};

	// create doc.id
	doc._id = fdoc.path || '/'; //default path is / root
	doc._id += fdoc.title;

	$$(this).app.db.saveDoc(doc, {
		success : function() {
			form.trigger('navimessage', 'create successfully. ' + fdoc.path + fdoc.title);
			form.trigger('inproject');
		}
	});
	
	return false;
}

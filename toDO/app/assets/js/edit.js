$.get("task/"+id+"", function(task){
    $('<div class="container">').append('<div class="row">'+
      '<div class="col-sm-4">'+
        '<div class="form-group">'+
          '<label for="date">Titel :</label>'+
          '<input type="text" value='+task.name+' class="form-control" id="usr">'+
        '</div>'+
      '</div>'+
      '<div class="col-sm-4">'+
       '<form role="form">'+
        '<div class="form-group">'+
          '<label for="aufgabe"> Datum :</label>'+
          '<input type="text" value='+task.datum+' class="form-control" id="usr">'+
        '</div>'+
      '</form>'+
    '</div>'+
    '<div class="col-sm-4">'+
      '<div class="form-group">'+
        '<label for="progress">Status(in %) :</label>'+
        '<input type="text" value='+task.process+' class="form-control" id="usr">'+
      '</div>'+
    '</div>'+
  '</div>'+
  '<div>'+
    '<div class="form-group">'+
      '<label for="progress">Aufgabe :</label>'+
      '<textarea class="form-control" rows="5" id='+task.inhalt+'> </textarea>'+
    '</div>'+
    '<button class="btn btn-primary btn-md">Änderung speichern</button>'+
  '</div>');
 });
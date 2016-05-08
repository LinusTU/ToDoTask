
 
         
$.get("/tasks", function(tasks) {
     $.each(tasks, function(home,task){
       $("tbody").append(
        '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>'+
        '<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>'+
        '<div class=main>'+    
         '<tr>'+
            '<td>'+
                '<div class="row">'+ 
                    '<div class="col-sm-6">'+
                        '<h3>'+task.name+'</h3>'+
                    '</div>'+
                     '<div class="col-sm-6" align="right">'+
                         '<h3>'+task.datum+'</h3>'+
                     '</div>'+
                 '</div>'+
             '<div class="row">'+
                '<div class="col-md-12"> '+
                 '<p>'+task.inhalt+
                '</div> '+
             '</div> '+
            '<div class="row">'+
                '<div class="col-md-12"> '+
                    '<div class="progress"> '+
                        '<div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:'+task.process+'%">'+
                        '</div> '+
                    ' </div> '+
                 '</div> '+
            ' </div> '+
            '<div class="row">'+
                '<div class="col-xs-6"> '+
                    '<a role="button" href="toDoEdit.html" class="btn btn-success">Edit</a>'+
                '</div>'+
                '<div class="col-xs-6" align="right"> '+
                    '<button type="button" onclick="delete()" class="btn btn-danger">Delete</button> '+
                '</div> '+
            ' </div> '+
        '</td> '+
       '</tr>'+
       '</div>'+
      '<hr noshade size="1">');
    });
    }); 

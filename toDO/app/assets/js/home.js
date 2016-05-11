
$.get("/tasks", function(tasks) {
     $.each(tasks, function(home,task){
       $("tbody").append(
        '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>'+
        '<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>'+
         '<tr>'+
            '<td>'+
                '<div class="row">'+ 
                    '<div class="col-sm-6">'+
                        '<h3>&nbsp;&nbsp;'+task.name+'</h3>'+
                    '</div>'+
                     '<div class="col-sm-6" align="right">'+
                         '<h3>'+task.datum+'&nbsp;&nbsp;</h3>'+
                     '</div>'+
                 '</div>'+
             '<div class="row">'+
                '<div class="col-md-12"> '+
                 '<p>&nbsp;&nbsp;'+task.inhalt+
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
                    '<button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal'+task.id+'">Edit</button>'+
                '</div>'+
                '<div class="col-xs-6" align="right"> '+
                    '<Form action="/delete/'+task.id+'" method="post"><button class="btn btn-danger">Delete</button></form> '+
                '</div> '+
            ' </div> '+
        '</td> '+
       '</tr>'+
      '<hr noshade size="1">'+
      '<div id="myModal'+task.id+'" class="modal fade" role="dialog">'+
            '<div class="modal-dialog">'+
                    '<div class="modal-content">'+
                    '<form action="/edit/'+task.id+'" method="post">'+
                        '<div class="modal-header">'+
                                    '&nbsp;&nbsp;<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                                     '<h4 class="modal-title">Änder deine Todos</h4>'+
                        '</div>'+
                        '<div class="modal-body">'+
                               '<div class="row">'+
                                  '<div class="col-sm-4">'+
                                    '<div class="form-group">'+
                                        '<label for="date">Titel :</label>'+
                                        '<input type="text" value='+task.name+' class="form-control" name="name">'+
                                    '</div>'+
                                  '</div>'+
                                  '<div class="col-sm-4">'+
                                    '<form role="form">'+
                                        '<div class="form-group">'+
                                            '<label for="aufgabe"> Datum :</label>'+
                                            '<input type="text" name="datum" value='+task.datum+' class="form-control">'+
                                        '</div>'+
                                     '</form>'+
                                    '</div>'+
                                '<div class="col-sm-4">'+
                                  '<div class="form-group">'+
                                        '<label for="progress">Status(in %) :</label>'+
                                        '<input type="text" name="process" value='+task.process+' class="form-control">'+
                                  '</div>'+
                                '</div>'+
                              '</div>'+
                                '<div class="form-group">'+
                                  '<label for="progress">Aufgabe :</label>'+
                                  '<textarea name="inhalt" class="form-control" rows="5">'+task.inhalt+'</textarea>'+
                                '</div>'+
                                '<button class="btn btn-default">Edit</button>&nbsp;&nbsp;'+
                            '</form>'+
                    '</div>'+
             '</div>'+
        '</div>');
    });
    }); 

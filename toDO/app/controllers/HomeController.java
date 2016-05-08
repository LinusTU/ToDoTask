package controllers;

import java.util.*;
import play.mvc.*;
import play.*;
import models.Task;
import play.data.Form;
import views.html.*;
import play.db.ebean.*;
import static play.libs.Json.toJson;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {
        return ok(index.render("Your new application is ready."));
    }
    
    public Result createToDO() {
        return ok(createToDO.render());
    }
    
    public Result home() {
        return ok(home.render());
    }

    public Result addTask() {
        Task task = Form.form(Task.class).bindFromRequest().get();
        task.save();
        return redirect(routes.HomeController.createToDO());
        
        
    }
    
    public Result getTasks() {
       List<Task> tasks = new Model.Finder(long.class,Task.class).all();
       return ok(toJson(tasks));
    }
    
}


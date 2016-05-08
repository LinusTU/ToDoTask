package models;

import java.util.*;

import play.db.ebean.*;
import javax.persistence.*;

import java.util.Date;


@Entity
public class Task extends Model {

    private static final long serialVersionUID = 1L;

    @Id
    public Long id;

    public String name;
    
    public String datum;
    
    public String inhalt;
    
    public int process;
    
 

    public Task() {}

    public Task(String datum,String name,String inhalt,Long id) {
        this.name = name;
        this.inhalt = inhalt;
        this.datum = datum;
        this.process = process;
        this.id = id;
    }
    
    public static void delete(Long id) {
        Finder<Long,Task> find = new Finder(Long.class, Task.class);
        find.ref(id).delete();
    }
 
}
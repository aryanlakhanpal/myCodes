import java.util.ArrayList;
import java.util.Collections;

public class arraylist {
    public static void main(String[] args) {
        ArrayList<Integer>  al = new ArrayList<>();
        al.add(55);
        al.add(5);
        al.add(10);
        al.add(5);
        al.add(5);
        al.add(15);
        al.add(5);
        ArrayList<String> bl = new ArrayList<>();
        bl.add("we");
        bl.add("wm");
        bl.add("q");
       bl.remove(0);

//        bl.removeIf(n->(n.equals("we")));
        System.out.println(bl);

    }
}

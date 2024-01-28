import java.util.*;
class main{
    public static void main(String[] args) {

        // Object Creation
        Scanner sc = new Scanner(System.in);
        Solutions ans = new Solutions();

//        array Creation
        int []arr= {0,-3,-4,0,-2,0,-3,-4};

//        Printing Array before operation
        System.out.println("Array before operation ::");
        for (int k:arr) {
            System.out.print(k+" ");
        }
        System.out.println();
        System.out.println("After operation :: ");


//        calling function

       int   lrr = ans.maxsum(arr,3);

//       printing after operation


            System.out.print(lrr+" ");



    }
}
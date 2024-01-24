import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
 {
 public static void main (String[] args)
 {
     
     Scanner sc = new Scanner(System.in);
     int t = sc.nextInt();
     while(t-->0)
     {
         int n = sc.nextInt();
         int arr[]= new int[n];
        int c = 0;
        for(int i=1;i<n;i++)
        {   int prev = arr[i-1];
            int curr = arr[i];
            int diff = curr-prev;
            if(diff==1)
            c++;
        }
        System.out.println(c);
         
     }

 }
}
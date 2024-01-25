public class Solutions {

//    Leaders in an array
    public static void leaders(int arr[])
    {
        int n = arr.length;
        int leader = arr[n - 1];

        System.out.print(leader+" ");

        for(int i=n-2; i>=0;i--)
        {
            if(leader < arr[i])
            {   leader = arr[i];
                System.out.print(leader+" ");
            }
        }
    }





}

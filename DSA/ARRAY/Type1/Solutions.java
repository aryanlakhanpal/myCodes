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

//    Frequency of elements in an array

    static void freqElement(int arr[])
    {
        int n = arr.length;
        int freq = 1, i = 1;
        while(i < n)
        {   while(i < n && arr[i] == arr[i - 1])
            {   freq++;
                i++;}
            System.out.println(arr[i - 1] + " -> " + freq);
            i++;
            freq = 1;
        }
        if(n==1 || arr[n-1]!=arr[n-2])
            System.out.println(arr[n-1]+" -> "+ 1) ;
    }


//    push zeros to end

static int[] pushZerosToEnd(int arr[])
{
    int count = 0;
    int n= arr.length;
    for (int i = 0; i < n; i++)
        if (arr[i] != 0)
            arr[count++] = arr[i];
    while (count < n)
        arr[count++] = 0;
    return  arr;
}

// Stock buy and sell
//    i/p : 1,5,3,8,12
//    o/p : 13

//    Trapping rain water
//    i/p : 3,0,1,2,5
//    o/p : 6

//    Maximum sub array sum

    int maxsum (int arr[] ,int k){

        int maxi=0,n=arr.length;
        for(int i=0;i<k;i++)
        {
            maxi+=arr[i];
        }
        int curr= maxi;

        for(int i=k;i<n;i++)
        {
            curr+=arr[i]-arr[i-k];
            maxi=Math.max(maxi,curr);
        }
        return maxi;

    }


}

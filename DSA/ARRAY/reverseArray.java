public class reverseArray {
    public void revArr(int arr[])
    {
        int n= arr.length;
        int s=0,e=n-1;
        while(s<=e)
        {
            int k = arr[s];
            arr[s]=arr[e];
            arr[e]=k;
            s++;
            e--;
        }

    }
}

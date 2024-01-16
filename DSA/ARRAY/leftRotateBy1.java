public class leftRotateBy1 {
    public void lefRot1(int arr[])
    {
        int n = arr.length, ele = arr[n-1];
        for(int i=n-1;i>=1;i--)
        {
            arr[i]= arr[i-1];
        }
        arr[0]= ele;
    }
}

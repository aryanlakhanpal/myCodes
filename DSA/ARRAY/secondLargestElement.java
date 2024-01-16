public class secondLargestElement {
    public int secLarEle(int arr[])
    {
        int l = arr[0],sl = arr[0];
        for(int i=0;i<arr.length;i++)
        {
            if(l<arr[i])
            {
                sl = l;
                l=arr[i];
            }
            else if (sl<arr[i]&&arr[i]<l)
            {
                sl = arr[i];
            }
        }
        return sl;

    }
}

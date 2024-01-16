

public class Codes {
//*************Left Rotate Element by 1 ***************************

    public void lefRot1(int arr[])
    {
        int n = arr.length, ele = arr[n-1];
        for(int i=n-1;i>=1;i--)
        {
            arr[i]= arr[i-1];
        }
        arr[0]= ele;
    }

//******************************************************************


// *************Left Rotate Element by D ***************************

    public void swapping(int arr[] ,int s , int e){

        while (s<=e)
        {
            int k = arr[s];
            arr[s]= arr[e];
            arr[e]=k;
            s++;
            e--;
        }
    }
    public void lefRotD(int []arr,int d)
    {
        int n= arr.length;
        swapping(arr,0,d);
        swapping(arr,d+1,n-1);
        swapping(arr,0,n-1);
    }


//******************************************************************


//*********Reverse Array ****************
public void ReverseArray(int arr[])
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
//****************************


//***************Second largest element ***************
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
//    *********************************************
}

public class Heart {
    public static void main(String[] args) {
        removeDuplicateElements rde = new removeDuplicateElements();
        secondLargestElement sle = new secondLargestElement();
        reverseArray ra = new reverseArray();
        leftRotateBy1 lr1 = new leftRotateBy1();
        int arr[]={0,1,-2,-3,-4};
        int brr[]={5,6,7,-8,9};
        lr1.lefRot1(brr);
        for(int i=0 ;i<arr.length;i++)
        {
            System.out.println(brr[i]);
        }
    }
}

import java.util.Arrays; //import
class Task1
{
	public static void main(String[] args)
	{
		int[] array = new int[100];
		int count =0;
		int insert=0;
		while(count<100) //while loop
		{
			array[count]=insert;
			count++;
			insert=insert+2;
		}
		System.out.println(Arrays.toString(array));
	}
}

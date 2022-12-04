// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "raceCAR" among others.
 // convert the string to an array . 
  // 1. can check the lenght of the string then create an array
  //element of that length then add each element to it by using for loop and charAt method.
  //racecar >> ["r", "a","c","e","c","a","r"];
  // check first index with n-1-i if it is == print palindrome else not 

function palindrome(str) {
  
int n =str.length(); 
// // System.out.println(n);   //7
		int[] arr = new int[n];
		for(int i=0; i<n; i++){
			arr[i]=str.charAt(i);
		}
		// System.out.println(Arrays.toString(arr));  //[114, 97, 99, 101, 99, 97, 114]

		for(int j=0; j<n;j++){
			if(arr[j]!=arr[n-1-j]){
				return false;
			}
		}
	return true;
	}
module.exports = palindrome;


















// public static void main (String[] args) throws java.lang.Exception
// 	{
// 		String str = "racecar";
// 		System.out.println(palindrome(str));
		
// }

// 	public static boolean palindrome(String str) {
//   // convert the string to an array . 
//   // 1. can use chatAt method or check the lenght of the string then create an array
//   //element of that length then add each element to it by using charAt method. Lets do this 
//   //racecar >> ["r", "a","c","e","c","a","r"];
//   // check first index with n-1-i if it is == print palindrome else not 
//   //output >> true;
// int n =str.length(); 
// // System.out.println(n);   //7

// 		int[] arr = new int[n];
// 		for(int i=0; i<n; i++){
// 			arr[i]=str.charAt(i);
// 		}
// 		// System.out.println(Arrays.toString(arr));  //[114, 97, 99, 101, 99, 97, 114]

// 		for(int j=0; j<n;j++){
// 			if(arr[j]!=arr[n-1-j]){
// 				return false;
// 			}
// 		}
// 	return true;
// 	}

/* Exercise # 1 */

var txt1 = "Enter A Number!";

var promptex1 = prompt(txt1);

var outputex1 = 0

for (var counterex1=0; counterex1<=promptex1; counterex1++) {
  outputex1+=counterex1;
}

console.log(outputex1)

/* Exercise # 2 */

var txt2_1 = "Do you want to play?"

var txt2_2 = "Enter a word."

var txt2_3 = "Do you want to play again?"

var promptex2_1 = prompt(txt2_1)

var promptex2_2 = ""

var output2 = ""

if (promptex2_1 == "yes") {
	do promptex2_2 = prompt(txt2_2), output2+=promptex2_2+" ";
    while (prompt(txt2_3) == "yes");
	console.log(output2);
}

/* Exercise # 3 */

var txt3_1 = "Please enter your name.";

var txt3_2 = "Would you like to print your name?";

var txt3_3 = "Would you like to print this again?";

var promptex3_1 = prompt(txt3_1);

var promptex3_2 = prompt(txt3_2);

var output3 = "Hello. My name is "+promptex3_1;

if (promptex3_2 == "yes") {
	console.log(output3);
    while (prompt(txt3_3) == "yes") {
      output3+="!", console.log(output3);
  }
}

/* Exercise # 4 */

var txt4_1 = "What time of day is it?"

var txt4_2 = "Since it is morning, you should be eating breakfast. We suggest eggs and toast."

var txt4_3 = "Since it is noon, you should be eating lunch. We suggest a salad."

var txt4_4 = "Since it is evening, you should be eating dinner. We suggest chicken and rice."

var txt4_5 = "I'm sorry, my responses are limited. You must input the right information."

var promptex4 = prompt(txt4_1)

if (promptex4 == "morning") {
	console.log(txt4_2)
}
else if (promptex4 == "noon") {
	console.log(txt4_3)
}
else if (promptex4 == "evening") {
	console.log(txt4_4)
}
else {
	console.log(txt4_5)
}
/* Exercise # 1 */

var txt1 = "Input some digits!";

var promptex1 = prompt(txt1);

var outputex1 = 0

for (var counterex1=0; counterex1<=promptex1; counterex1++) {
  outputex1+=counterex1;
}

console.log(outputex1)

/* Exercise # 2 */

var txt2_1 = "~Do you want to build a stri-ing?~"

var txt2_2 = "~Type out a word!~"

var txt2_3 = "~Do we need to make it longer?~"

var promptex2_1 = prompt(txt2_1)

var promptex2_2 = ""

var output2 = ""

if (promptex2_1 == "yes") {
	do promptex2_2 = prompt(txt2_2), output2+=promptex2_2+" ";
    while (prompt(txt2_3) == "yes");
	console.log(output2);
}

/* Exercise # 3 */

var txt3_1 = "Please assign me a designation.";

var txt3_2 = "Would you like me to introduce myself?";

var txt3_3 = "Do you need me to say that louder?";

var promptex3_1 = prompt(txt3_1);

var promptex3_2 = prompt(txt3_2);

var output3 = "Greetings human, my designation is "+promptex3_1;

if (promptex3_2 == "yes") {
	console.log(output3);
    while (prompt(txt3_3) == "yes") {
      output3+="!", console.log(output3);
  }
}

/* Exercise # 4 */

var txt4_1 = "What is the current time of day?"

var txt4_2 = "Many people partake of a meal known as breakfast in the morning. In some parts of the world, a typical breakfast would consist of eggs and toast."

var txt4_3 = "At midday, it is common for people to eat a meal referred to as lunch. A salad is an oft recommended choice for lunch."

var txt4_4 = "During the evening many households gather to consume nutrients together, a meal known as dinner. One of the most widely availible dinners combines some rice and chicken meat into a single meal."

var txt4_5 = 'ERROR. INPUTS LIMITED. PLEASE INPUT ONE OF THE FOLLOWING WITHOUT QUOTATION MARKS: "morning" "noon" OR "evening" THANK YOU, AND HAVE A GOOD TIME.'

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
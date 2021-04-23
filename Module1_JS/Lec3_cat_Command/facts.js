// Cat Commands

// cat f1.txt => shows the content of f1.txt
// cat f1.txt f2.txt => shows the content of f1 and f2

// flags => -s , -b , -n

// -s flag

// cat -s f1.txt => removes new lines 

// output =>
// hi i am f1
// 
// hi i am going !

// -b flag

// cat -s -b f1.txt => add line number to non empty lines

// output =>
// 1 hi i am f1 ajksbfjka akjjshfkja akjsf

// 2 hi i am going !

// -n flag

// cat -s -n -b f1.txt => add line number to each line of file

// 1 hi i am f1 ajksbfjka akjjshfkja akjsf
// 2
// 3 hi i am going !


// -b and -n mutially exclusive
/**

The Reading List
Keep track of which books you've read and which books you want to read!

=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 books

=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you have read it yet or not. 

If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien', 
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/

let books = [{
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    read: true,
}, {
    title: "The Chronicles of Narnia (Chronicles of Narnia, #1-7)",
    author: "C.S. Lewis",
    read: false,
}, {
    title: "Harry Potter and the Goblet of Fire (Harry Potter, #4)",
    author: "J.K. Rowling",
    read: true,
}, {
    title: `Alice's Adventures in Wonderland / Through the Looking-Glass`,
    author: "Lewis Carroll",
    read: false,
}, {
    title: "The Hobbit: Graphic Novel",
    author: "Chuck Dixon",
    read: true,
}, {
    title: "Harry Potter and the Deathly Hallows (Harry Potter, #7)",
    author: "J.K. Rowling",
    read: false,
}, 

];


books.forEach(book => {
    if(book.read === true) {
        console.log(`I've already read ${book.title} by ${book.author}`);
    }else {
        console.log(`I still need to read ${book.title} by ${book.author}`);
    }
})
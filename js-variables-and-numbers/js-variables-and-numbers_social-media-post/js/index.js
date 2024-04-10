console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const postTitle = "My first post";
const postText = "This is gonna be the text for this post.";
let postLikes = 10;
const isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log("Post Title: ", postTitle);
console.log("Post Text: ", postText);
console.log("Is reported: ", isReported);

console.log("Post Likes: ", postLikes);
postLikes += 1;
console.log("Post Likes: ", postLikes);
postLikes += 1;
console.log("Post Likes: ", postLikes);

// --^-- write your code here --^--

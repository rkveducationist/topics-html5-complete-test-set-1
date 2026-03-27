const questions = [

/* =========================
MCQ QUESTIONS (HTML SAFE)
========================= */

{
type:"mcq",
question:"What does HTML stand for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Tool Markup Language",
"Home Tool Markup Language"
],
answer:"Hyper Text Markup Language",
hint:"Standard web language"
},

{
type:"mcq",
question:"Which tag is used to define HTML document?",
options:["&lt;html&gt;","&lt;head&gt;","&lt;body&gt;","&lt;title&gt;"],
answer:"&lt;html&gt;",
hint:"Root element"
},

{
type:"mcq",
question:"Which tag is used for main content?",
options:["&lt;body&gt;","&lt;head&gt;","&lt;html&gt;","&lt;meta&gt;"],
answer:"&lt;body&gt;",
hint:"Visible content"
},

{
type:"mcq",
question:"Which tag is used for largest heading?",
options:["&lt;h1&gt;","&lt;h6&gt;","&lt;p&gt;","&lt;head&gt;"],
answer:"&lt;h1&gt;",
hint:"Biggest heading"
},

{
type:"mcq",
question:"Which tag is used for paragraph?",
options:["&lt;p&gt;","&lt;h1&gt;","&lt;div&gt;","&lt;span&gt;"],
answer:"&lt;p&gt;",
hint:"Text content"
},

{
type:"mcq",
question:"Which tag is used to create link?",
options:["&lt;a&gt;","&lt;link&gt;","&lt;href&gt;","&lt;nav&gt;"],
answer:"&lt;a&gt;",
hint:"Anchor tag"
},

{
type:"mcq",
question:"Which attribute is used in anchor tag?",
options:["href","src","link","url"],
answer:"href",
hint:"Link address"
},

{
type:"mcq",
question:"Which tag is used to display image?",
options:["&lt;img&gt;","&lt;image&gt;","&lt;src&gt;","&lt;pic&gt;"],
answer:"&lt;img&gt;",
hint:"Image tag"
},

{
type:"mcq",
question:"Which attribute is used for image path?",
options:["src","href","link","path"],
answer:"src",
hint:"Source"
},

{
type:"mcq",
question:"Which list shows numbered items?",
options:["&lt;ol&gt;","&lt;ul&gt;","&lt;dl&gt;","&lt;li&gt;"],
answer:"&lt;ol&gt;",
hint:"Ordered list"
},

{
type:"mcq",
question:"Which list shows bullet points?",
options:["&lt;ul&gt;","&lt;ol&gt;","&lt;dl&gt;","&lt;li&gt;"],
answer:"&lt;ul&gt;",
hint:"Unordered list"
},

{
type:"mcq",
question:"Which tag is used for table?",
options:["&lt;table&gt;","&lt;tr&gt;","&lt;td&gt;","&lt;th&gt;"],
answer:"&lt;table&gt;",
hint:"Table structure"
},

{
type:"mcq",
question:"Which element is semantic?",
options:["&lt;header&gt;","&lt;div&gt;","&lt;span&gt;","&lt;b&gt;"],
answer:"&lt;header&gt;",
hint:"Meaningful element"
},

{
type:"mcq",
question:"Which is inline element?",
options:["&lt;span&gt;","&lt;div&gt;","&lt;section&gt;","&lt;article&gt;"],
answer:"&lt;span&gt;",
hint:"Inline display"
},

{
type:"mcq",
question:"Which tag is used for video?",
options:["&lt;video&gt;","&lt;media&gt;","&lt;movie&gt;","&lt;play&gt;"],
answer:"&lt;video&gt;",
hint:"HTML5 media"
},

{
type:"mcq",
question:"Which input type is used for email?",
options:["email","text","mail","input"],
answer:"email",
hint:"HTML5 validation"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Create a basic HTML5 document structure",

required:["html","head","body"],

hint:"Basic structure",

solution:`<!DOCTYPE html>
<html>
<head>
<title>My Page</title>
</head>
<body>

<h1>Hello World</h1>

</body>
</html>`
},

{
type:"code",
question:"Create a webpage with heading, paragraph and link",

required:["h1","p","a","href"],

hint:"Use anchor tag",

solution:`<!DOCTYPE html>
<html>
<body>

<h1>Welcome</h1>
<p>This is a paragraph</p>

<a href="https://google.com">Visit Google</a>

</body>
</html>`
},

{
type:"code",
question:"Create ordered and unordered lists",

required:["ol","ul","li"],

hint:"List tags",

solution:`<!DOCTYPE html>
<html>
<body>

<h2>Ordered List</h2>
<ol>
<li>Item 1</li>
<li>Item 2</li>
</ol>

<h2>Unordered List</h2>
<ul>
<li>Item A</li>
<li>Item B</li>
</ul>

</body>
</html>`
},

{
type:"code",
question:"Create a form with input, label and button",

required:["form","input","label","button"],

hint:"Basic form",

solution:`<!DOCTYPE html>
<html>
<body>

<form>

<label>Name:</label>
<input type="text">

<button>Submit</button>

</form>

</body>
</html>`
},

{
type:"code",
question:"Create a simple portfolio page with image and table",

required:["img","table","tr","td"],

hint:"Use image and table",

solution:`<!DOCTYPE html>
<html>
<body>

<h1>My Portfolio</h1>

<img src="profile.jpg" width="100">

<table border="1">
<tr>
<td>Name</td>
<td>Ravi</td>
</tr>
<tr>
<td>Skill</td>
<td>HTML</td>
</tr>
</table>

</body>
</html>`
}

]
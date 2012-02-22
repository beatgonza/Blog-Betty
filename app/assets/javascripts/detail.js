// // JavaScript Document for Home

// //var divCounter = 0; // Controls that each generated div has a different ID

// window.onload=function(){
		
// 	document.title = "Article Detail";
	
// 	loadCategories();			
// 	getData();
	
// }

// // Data for the form from the DB
// function getData(){

// 	var currentTime = new Date();
// 	setData(1, "Title1", "Tennis", currentTime, "Betty", 0, "../Images/flower.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
	
// 	// Add all comments for this post
// 	addDiv(1, "George Washington", currentTime, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloreagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.");
	
// 	addDiv(2, "Benjamin Franklin", currentTime, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.");
	
// 	addDiv(3, "Barack Obama", currentTime, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.");
	
// }

// // Data for the form from the DB
// function setData(postID, postTitle, postCat, postDate, postUser, postComments, postImage, postInfo){
	
// 	var editPage = "Editor.html";
// 	var commentsSection = "comments";
	
// 	var mainDiv = document.getElementById('articleSec');
	
// 	var article = document.createElement('article');
// 	article.className = 'blogPost';
	
// 	var header = document.createElement('header');
	
// 	// Title of the post
// 	var title = document.createElement('h2');
// 	var titleText = document.createTextNode(postTitle);
// 	title.appendChild(titleText);
	
// 	// Date
// 	var headerContent = document.createElement('p');
	
// 	//var currentTime = new Date();
// 	var month = postDate.getMonth() + 1;
// 	var day = postDate.getDate();
// 	var year = postDate.getFullYear();
	
// 	headerContent.innerHTML = "Posted on <time datetime = " + postDate + ">" + month + "/" + day + "/" + year + "</time> by " +  postUser + " - <a href=#" + commentsSection + ">" + postComments + " comments </a> | <a href=" + editPage + "?id=" + postID + "> Edit </a>";
	
// 	header.appendChild(title);
// 	header.appendChild(headerContent);
	
// 	var postContentDiv = document.createElement('div');
	
// 	// Image
// 	var image = document.createElement("img");
// 	image.setAttribute('src', postImage);
// 	image.setAttribute('alt', postTitle);
	
// 	postContentDiv.appendChild(image);
	
// 	// Information
// 	var postContent = document.createElement('p');
// 	postContent.innerHTML =  postInfo;
	
// 	postContentDiv.appendChild(postContent);
	
// 	article.appendChild(header);
// 	article.appendChild(postContentDiv);
	
// 	mainDiv.appendChild(article);
// }


// // Adds a new comment from GUI
// function addComment(name, email, website, comment){
	
// 	var currentTime = new Date();
	
// 	// Save in the DB
// 	addDiv(4, name, currentTime, comment);
// }

// // Adds divs for comments
// function addDiv(commentID, commentUser, commentDate, commentInfo){
	
// 	var formSection = "form";
	
// 	var mainDiv = document.getElementById('allComments');
	
// 	var commentDiv = document.createElement('div');
// 	commentDiv.className = 'commentsDivs';
// 	commentDiv.id = 'comment' + commentID;
	
// 	var article = document.createElement('article');
	
// 	var header = document.createElement('header');
	
// 	// User and date
// 	//var currentTime = new Date();
// 	var month = commentDate.getMonth() + 1;
// 	var day = commentDate.getDate();
// 	var year = commentDate.getFullYear();
// 	var hour = commentDate.getHours();
// 	var minute = commentDate.getMinutes();
	
// 	header.innerHTML = "<a href=#>" + commentUser + "</a> on <time datetime = " + commentDate + ">" + month + "/" + day + "/" + year + " at " + hour + ":" + minute + "</time>";
	
// 	//header.innerHTML = "<a href=\'#\'>" + commentUser + "</a>";
	
// 	// Comment
// 	var commentContent = document.createElement('p');
// 	commentContent.innerHTML = commentInfo + "<br /> <a href=#" + formSection + "> Answer </a> |";
	
// 	// Link to delete div
// 	var delLink = document.createElement('a');
// 	delLink.name = commentDiv.id;	// The same as the id, to find it and delete it
// 	delLink.href = '#';
// 	delLink.onclick = deleteSelected;
// 	delLink.innerHTML = ' Delete';
	
// 	commentContent.appendChild(delLink);
	
// 	article.appendChild(header);
// 	article.appendChild(commentContent);
	
// 	commentDiv.appendChild(article);
	
// 	mainDiv.appendChild(commentDiv);
	
// }

// // Loads the blog categories
// function loadCategories(){
	
// 	var homePage = "Home.html";
	
// 	// Get categories from DB
// 	var catArray = new Array("Tennis", "Soccer", "Golf", "Baseball");
	
// 	var catList = document.getElementById("categoriesList");
	
// 	for (var index = 0; index < catArray.length; index++){						  
		
// 		var option = document.createElement('li');
		
// 		var optionLink = document.createElement('a');
// 		optionLink.name = catArray[index];
// 		optionLink.href = homePage;
// 		optionLink.innerHTML = catArray[index];
	
// 		option.appendChild(optionLink);

// 		catList.appendChild(option);
// 	}
	
// }

// // Deletes Div of comment
// deleteSelected = function (evt){
	
//    try {
	   
// 	   evt = eventFunc(evt);
// 	   element = rObj(evt);
// 	   div = document.getElementById(element.name);
// 	   div.parentNode.removeChild(div);
   
//    }catch(e) {
// 		alert(e);
// 	}
// }
	
// // Retrieves an instance of the object that triggered the event
// rObj = function (evt) { 
//    return evt.srcElement ?  evt.srcElement : evt.target;
// }

// // Returns the event that triggers
// eventFunc = function (evt) { 	
// 	return (!evt) ? event : evt;
// }
	


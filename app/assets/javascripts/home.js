// // JavaScript Document for Home

// window.onload=function(){
		
// 	document.title = "Blog Home";
	
// 	loadCategories();				
// 	getData();
	
// }

// // Data for the form from the DB
// function getData(){

// 	var currentTime = new Date();
// 	// For all register, add div
// 	addDiv(1, "Title1", "Tennis", currentTime, "Betty", 0, "../Images/flower.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
// 	addDiv(2, "Title2", "Tennis", currentTime, "Betty", 0, "../Images/flower.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

// }

// // Adds a div containing the post information
// function addDiv(postID, postTitle, postCat, postDate, postUser, postComments, postImage, postInfo){
	
// 	// Counter for the divs with the post information
// 	var divCounter = 0;
// 	var visualizePage = "Detail.html";
// 	var editPage = "Editor.html";
// 	var commentsSection = "comments";
	
// 	var mainDiv = document.getElementById('allPosts');
	
// 	var postsDiv = document.createElement('div');
// 	postsDiv.className = 'posts';
// 	postsDiv.id = "post" + (++divCounter);
	
// 	var article = document.createElement('article');
	
// 	var header = document.createElement('header');
	
// 	// Title of the post
// 	var title = document.createElement('h3');
// 	var titleText = document.createTextNode(postTitle);
// 	title.appendChild(titleText);
	
// 	// Date
// 	var headerContent = document.createElement('p');
	
// 	//var currentTime = new Date();
// 	var month = postDate.getMonth() + 1;
// 	var day = postDate.getDate();
// 	var year = postDate.getFullYear();
	
// 	headerContent.innerHTML = "Posted on <time datetime = " + postDate + ">" + month + "/" + day + "/" + year + "</time> by " +  postUser + " - <a href=" + visualizePage + "?id="  + postID + "#" + commentsSection + ">" + postComments + " comments </a> | <a href=" + editPage + "?id=" + postID + "> Edit </a>";
	
// 	header.appendChild(title);
// 	header.appendChild(headerContent);
	
// 	var postContentDiv = document.createElement('div');
// 	postContentDiv.className = 'postContent';
	
// 	// Image
// 	var image = document.createElement("img");
// 	image.setAttribute('src', postImage);
// 	image.setAttribute('alt', postTitle);
	
// 	postContentDiv.appendChild(image);
	
// 	// Information
// 	var postContent = document.createElement('p');
// 	postContent.innerHTML =  postInfo + "<br /> <a href=" + visualizePage + "?id=" + postID + "> Read more... </a>";
	
// 	postContentDiv.appendChild(postContent);
	
// 	article.appendChild(header);
// 	article.appendChild(postContentDiv);
	
// 	postsDiv.appendChild(article);
	
// 	mainDiv.appendChild(postsDiv);	
			
	
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
// // JavaScript Document for Editor

// window.onload=function(){
		
// 	document.title = "Blog Editor";
	
// 	//<![CDATA[
// 	bkLib.onDomLoaded(function() { nicEditors.allTextAreas() });
// 	//]]>
							
// 	loadCategories();
	
// 	// If edit post
// 	getData();
	
// }

// // Data for the form from the DB
// function getData(){

// 	setData("Title 1", "Tennis", "Data");

// }

// // Data for the form from the DB
// function setData(postTitle, postCat, postInfo){
	
// 	document.getElementById("titleTxt").value = postTitle;
// 	document.getElementById("categoryCbo").value = postCat;
// 	document.getElementById("dataTxt").value = postInfo;
	
// }


// function gup( name )
// {
//   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
//   var regexS = "[\\?&]"+name+"=([^&#]*)";
//   var regex = new RegExp( regexS );
//   var results = regex.exec( window.location.href );
//   if( results == null )
//     return "";
//   else
//     return results[1];
// }

// // Buttons Actions
// function saveBtnAction(){
	
// 	// Save data in the DB
// }

// // Publish Button
// function publishBtnAction(){
	
// 	var visualizePage = "Detail.html";
	
// 	// Save data in the DB, and get the ID
// 	var postID = 1;
// 	var url = visualizePage + "?id=" + postID;
// 	window.open(url, '_self', false);
	
// }

// // Save Button

// // All Posts Button
// function allPostsBtnAction(){
	
// 	var allPostsPage = "AllPosts.html";
// 	window.open(allPostsPage, '_self', false);
	
// }

// // Loads the blog categories
// function loadCategories(){
	
// 	// Get categories from DB
// 	var catArray = new Array("Tennis", "Soccer", "Golf", "Baseball");
	
// 	var comboBox = document.getElementById("categoryCbo");
	
// 	for (var index = 0; index < catArray.length; index++){						  
		
// 		var option = document.createElement('option');
// 		option.text = option.value = catArray[index];
	
// 		try {
// 			comboBox.add(option, null); //Standard
// 		}catch(error) {
// 			comboBox.add(option); // IE only
// 		}
// 	}
	
// 	comboBox.selectedIndex = 1;
// }


// JavaScript Document for AllPosts

var pager = new Pager('resultsTable', 2);

 window.onload=function(){
		
// 	document.title = "All Posts";
	
// 	getData();
	
// 	//var pager = new Pager('resultsTable', 2);
// 	pager.init();
// 	pager.showPageNav('pager', 'navigationDiv');
// 	pager.showPage(1);
		
 }

// // Data for the results table
// function getData(){
	
// 	// For all register, add row
// 	addRow(1, "Title1", 0, "12/02/2012");
// 	addRow(2, "Title2", 2, "12/02/2012");
// 	addRow(3, "Title3", 0, "12/02/2012");
// 	addRow(4, "Title4", 2, "12/02/2012");

// }

// // Adds a row to the table
// function addRow(postID, postTitle, postComments, postDate){
	
// 	var table = document.getElementById('resultsTable');
 
//  	var editPage = "Editor.html";
// 	var visualizePage = "Detail.html";
	
// 	var rowCount = table.rows.length;
// 	var row = table.insertRow(rowCount);
//  	var cellCounter = 0;
	
//  	// Checkbox of the row
// 	var cellCheck = row.insertCell(cellCounter);
// 	var elementCheck = document.createElement('input');
// 	elementCheck.type = "checkbox";
// 	cellCheck.appendChild(elementCheck);
 
//  	// Title of the post
//  	var cellTitle = row.insertCell(cellCounter += 1);
// 	var elementTitle = document.createElement('a');
// 	elementTitle.name = postTitle;
// 	elementTitle.href = editPage + "?id=" + postID;
// 	elementTitle.innerHTML = postTitle;
// 	cellTitle.appendChild(elementTitle);
	
// 	// Edit/Visualize/Delete options
// 	var cellOptions = row.insertCell(cellCounter += 1);
// 	var elementOptions = document.createElement('label');
// 	var cellHTML = "<a href=" + editPage + "?id=" + postID + "> Edit </a> | <a href=" +  visualizePage + "?id=" + postID + "> Visualize </a> | <a href=\'#\' onclick=\'deleteSelected(this.parentNode.parentNode.parentNode)\'> Delete </a>";
// 	elementOptions.innerHTML = cellHTML;
// 	cellOptions.appendChild(elementOptions);
	
// 	// Number of comments
// 	var cellComments = row.insertCell(cellCounter += 1);
// 	var elementComments = document.createElement('label');
// 	elementComments.innerHTML = postComments;
// 	cellComments.appendChild(elementComments);
	
// 	// Date
// 	var cellDate = row.insertCell(cellCounter += 1);
// 	var elementDate = document.createElement('label');
// 	elementDate.innerHTML = postDate;
// 	cellDate.appendChild(elementDate);
			
// }

// // Selects or deselects all posts
// function selectDeselect(tableID){
	
// 	try {
// 		var table = document.getElementById(tableID);
// 		var isChecked = document.getElementById('selectAllChk').checked;
// 		var rowCount = table.rows.length;
		
// 		for(var index = 0; index < rowCount; index++) {
			
// 			var row = table.rows[index];
// 			var chkbox = row.cells[0].childNodes[0];
			
// 			if(chkbox != null && isChecked != null) {
// 				chkbox.checked = isChecked;
// 			}
		
// 		}
// 	}catch(e) {
// 		alert(e);
// 	}
// }

// // Deletes all selected rows
// function deleteRow(tableID){
	
// 	try {
// 		var table = document.getElementById(tableID);
// 		var rowCount = table.rows.length;
		
// 		for(var index = 0; index < rowCount; index++) {
			
// 			var row = table.rows[index];
// 			var chkbox = row.cells[0].childNodes[0];
// 			if(chkbox != null && chkbox.checked == true) {
// 				table.deleteRow(index);
// 				rowCount--;
// 				index--;
// 			}
		
// 		}
// 	}catch(e) {
// 		alert(e);
// 	}
	
// }

// // Deletes the selected row
// function deleteSelected(row){
	
// 	try {
// 		row.parentNode.removeChild(row);
		
// 	}catch(e) {
// 		alert(e);
// 	}
// }

// Pager for posts
function Pager(tableName, itemsPerPage) {
    this.tableName = tableName;
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
    this.pages = 0;
    this.inited = false;
    
    this.showRecords = function(from, to) {        
        var rows = document.getElementById(tableName).rows;
        // i starts from 1 to skip table header row
        for (var i = 1; i < rows.length; i++) {
            if (i < from|| i > to)  
                rows[i].style.display = 'none';
            else
                rows[i].style.display = '';
        }
    }
    
    this.showPage = function(pageNumber) {
		
    	if (! this.inited) {
    		alert("Error 1 !");
    		return;
    	}

        var oldPageAnchor = document.getElementById('pg'+this.currentPage);
        oldPageAnchor.className = 'pg-normal';
        this.currentPage = pageNumber;
        var newPageAnchor = document.getElementById('pg'+this.currentPage);
        newPageAnchor.className = 'pg-selected';
        
        var from = (pageNumber - 1) * itemsPerPage + 1;
        var to = from + itemsPerPage - 1;
        this.showRecords(from, to);
    }   
    
    this.prev = function() {
        if (this.currentPage > 1)
            this.showPage(this.currentPage - 1);
    }
    
    this.next = function() {
        if (this.currentPage < this.pages) {
            this.showPage(this.currentPage + 1);
        }
    }                        
    
    this.init = function() {
        var rows = document.getElementById(tableName).rows;
        var records = (rows.length - 1); 
        this.pages = Math.ceil(records / itemsPerPage);
        this.inited = true;
    }

    this.showPageNav = function(pagerName, positionId) {
    	if (! this.inited) {
    		alert("Error 2 !");
    		return;
    	}
    	var element = document.getElementById(positionId);
    	
    	var pagerHtml = '<span onclick="' + pagerName + '.prev();" class="pg-normal" style="size:12px;" onmouseover="this.style.cursor=\'pointer\'"> &#171 Prev </span> | ';
        for (var page = 1; page <= this.pages; page++) 
            pagerHtml += '<span id="pg' + page + '" class="pg-normal" onclick="' + pagerName + '.showPage(' + page + ');"  style="size:12px;" onmouseover="this.style.cursor=\'pointer\'">' + page + '</span> | ';
        pagerHtml += '<span onclick="'+pagerName+'.next();" class="pg-normal" style="size:12px;" onmouseover="this.style.cursor=\'pointer\'"> Next &#187;</span>';            
        
        element.innerHTML = pagerHtml;
    }
}
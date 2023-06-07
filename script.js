const userName = document.getElementById("userName");
const requestInput = document.getElementById("requestInput");
const imageInput = document.getElementById("imageInput");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
let imagePreview = document.getElementById("imagePreview");
let commentSection= document.getElementById("comment-section");


btn.onclick = (e) => {
	e.preventDefault();
	imageInput.click();
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	inputValidation();
});

imageInput.addEventListener("change", ()=> {
	displayImage();
});

function inputValidation() {
	let username = userName.value.trim();
	let textarea = requestInput.value.trim()
	let image = imageInput.files[0];
	
	if ( imageInput.files.length ==0 ){
		alert("Please select an image")
   } else {
     	
          handleInput()
     userName.value=" ";
     requestInput.value = "";
     }
}

function displayImage() {
	let image = imageInput.files[0];
	let reader = new FileReader();
	
	reader.onload= function () {
		imagePreview.src = reader.result
		setTimeout (() => {
       alert ("Image has been updated..")
      }, 1000)
		
}
reader.readAsDataURL(image);
}


let comments = [ ];

function handleInput(){
	comments.push({
		username: userName.value,
		comment: requestInput.value,
		image: imageInput.files[ 0 ] 
});
localStorage.setItem("comments", JSON.stringify(comments));
console.log(comments[0]);
renderComments()
}

function renderComments() {
	commentSection.innerHTML = " ";
	
	
	comments.map(comment => {
		return commentSection.innerHTML += `
		   
       	  <div class ="card">
       	     <div id = "displayProfileImage">
       	          <img id ="commentPhoto" src=${comment.image}/>
               </div>
                <div class ="commentInfo">
                    <div>
       	            <h5 id = "displayName">${comment.username}</h5>
                    </div>
                    
                    <div>
       	           <p id = "displayTime">22:03</p>
                   </div>
                   
                   <div>
       	              <p id = "displayComment">${comment.comment}</p>
                  </div>
                  
                  <div>
       	                 <img id ="postPhoto" src=${ comment.image } />
                 </div>
                 
               </div>
            </div> <br>
            </div>
                                                       `
})
return commentSection;
}


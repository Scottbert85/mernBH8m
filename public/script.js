  function addProfile(e) {
    e.preventDefault();
  
    let profile = {
      userID: document.getElementById("userid").value,
      fName: document.getElementById("fname").value,
      lName: document.getElementById("lname").value,
      name: fName + " " + lName,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      avatar: document.getElementById("avatar").value,
      githubUrl: document.getElementById("githuburl").value,
      twitterUrl: document.getElementById("twitterurl").value,
      bio: document.getElementById("bio").value,
      
    };
  
    console.log(profile);
  
    let xhrPost = new window.XMLHttpRequest();
    xhrPost.open("POST", "http://localhost:5000/api/profiles");
    xhrPost.setRequestHeader("Content-Type", "application/json");
    xhrPost.send(JSON.stringify(profile));
  }
class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } 
    else if(response.status == 403){
        return 403;
    }
    else if(response.status == 404){
      return 404;
  }
    else {
      throw new HttpError(response);      
    }
  }
  
  async function demoGithubUser() {
    let url = "https://api.github.com/users/"
    let user;
    let repos;
    
    let name = document.getElementById("gitName").value;

    try {
      user = await loadJson(url + name);
      
      if(user != 403){
        document.getElementById("resultDiv").style.display = "block";
        document.getElementById("imageId").src = user.avatar_url;
        document.getElementById("first").innerHTML = "Public Repos: " + user.public_repos;
        document.getElementById("second").innerHTML = "Public Gists: " + user.public_gists;
        document.getElementById("third").innerHTML = "Followers: " + user.followers;
        document.getElementById("forth").innerHTML = "Following: " + user.following;

        let login = user.login; 
    
        repos = await loadJson(url + login + "/repos");     
        console.log(repos);
        if(repos != 403 && repos != 404 && repos.length > 0){
          document.getElementById("fTd").innerHTML = repos[repos.length-3].name;   
          document.getElementById("sTd").innerHTML = repos[repos.length-2].name;
          document.getElementById("tTd").innerHTML = repos[repos.length-1].name;
        }
      }

      if(user == 404 || repos == 404){
        document.getElementById("resultDiv").style.display = "none";
        document.getElementById("div403").style.display = "none";
        document.getElementById("div404").style.display = "block";
      }
      else if(user == 403 || repos == 403){
        document.getElementById("resultDiv").style.display = "none";
        document.getElementById("div404").style.display = "none";
        document.getElementById("div403").style.display = "block";
      }
      else{        
        document.getElementById("div404").style.display = "none";
        document.getElementById("div403").style.display = "none";
      }

    } catch(err) {
      if (err instanceof HttpError) {
        document.getElementById("resultDiv").style.display = "none";
        document.getElementById("div403").style.display = "none";
        document.getElementById("div404").style.display = "none";
      } else {
        // 알 수 없는 에러는 다시 던져집니다.
        throw err;
      }
    }  
 
    return user;
  }
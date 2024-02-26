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
   //     console.log("403");
        return 0;
    }
    else {
      throw new HttpError(response);      
    }
  }
  
  // 유효한 사용자를 찾을 때까지 반복해서 username을 물어봄
  async function demoGithubUser() {
  
    let user;
    let followers;
    let following;
    while(true) {
      let name = document.getElementById("gitName").value;
   //  let name = prompt("GitHub username을 입력하세요.", "iliakan");
   console.log(name);
  
      try {
        user = await loadJson(`https://api.github.com/search/users?q=${name}`);
   //     console.log(user);
        if(user != 0){
            document.getElementById("resultDiv").style.display = "block";
            document.getElementById("imageId").src = user.items[0].avatar_url;
            let login = user.items[0].login;
            console.log(user);
            console.log(user.items[0].login);
        
            //    followers = await loadJson(user.items[0].followers_url);
                followers = await loadJson(`https://api.github.com/users/${login}/followers`) == 0 ? 0 : 1;
                following = await loadJson(`https://api.github.com/users/${login}/following`) == 0 ? 0 : 1;
                if(followers != 0) {
                    
                    document.getElementById("third").innerHTML = "Followers: " + followers.length;
                    
                } 
                if(following != 0 ) {
                    
                    document.getElementById("forth").innerHTML = "Following: " + following.length;
                }
        }
        break; // 에러가 없으므로 반복문을 빠져나옵니다.
      } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
            document.getElementById("resultDiv").style.display = "none";
          // 얼럿 창이 뜬 이후에 반복문은 계속 돕니다.
       //   alert("일치하는 사용자가 없습니다. 다시 입력해 주세요.");
        } else {
          // 알 수 없는 에러는 다시 던져집니다.
          throw err;
        }
      }
    }
  
  
 //   alert(`이름: ${user.name}.`);
    return user;
  }
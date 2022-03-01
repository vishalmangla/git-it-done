var gitHubUrl = "https://api.github.com/users/vishalmangla/repos";
var getUserRepos = function(){
    console.log("function was called");
    fetch(gitHubUrl)
        .then (function(response){
            console.log(response);
        })
};

getUserRepos();

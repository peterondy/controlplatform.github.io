/*Start Login Page Script*/
    const loginBtn = document.getElementById("login-btn");//Get login button
    loginBtn.addEventListener("click", ()=>{//onclick for button even€€€t
        login();
    });

    const user = document.getElementById("username");
    const pass = document.getElementById("password");

    user.addEventListener("keyup", (e)=>{
        if (e.code === 'Enter'){
            e.preventDefault();
            pass.focus();
        }
    })

    pass.addEventListener("keyup", (e)=>{
        if (e.code === 'Enter'){
            e.preventDefault();
            loginBtn.click();
        }
    })


    function login(){
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        fetch("./json/login.json")
        .then((response) => {
        return response.json();
        })
        .then( (login)=> {
                if(username == login.login.osama.username && password == login.login.osama.password){
                    //Go to home page with user is Osama
                    document.location.href = "https://peterondy.github.io/controlplatform.github.io/home.html?user=" + username;
                }else if(username == login.login.ziad.username && password == login.login.ziad.password){
                    //Go to home page with user is Ziad
                    document.location.href = "https://peterondy.github.io/controlplatform.github.io/home.html?user=" + username;
                }else{
                    //Refresh the page
                    document.getElementById("al").innerHTML = "<h1 class='alert alert-danger mt-5 fs-1' id='alert'>Username Or Password Are Not Correct</h1>";
                }
            }
        );
    }
/*End Login Page Script*/

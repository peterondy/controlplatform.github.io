/*Start Home Page Script*/

    fetch("./json/login.json")
    .then((response) => {
    return response.json();
    })
    .then( (login)=> {
            if(document.location.search == `?user=${login.login.osama.username}`){
                //Go to home page with user is Osama
                const tbody = document.getElementById("tbody");
                fetch("./json/sessions.json")
                .then((response) => {
                return response.json();
                })
                .then((sessions)=>{
                    if(sessions.sessions.length > 0){
                        //alert(sessions.sessions.length)
                        let time = 0;
                        for (let index = 0; index < sessions.sessions.length; index++) {
                            let i = index;
                            time += parseFloat(sessions.sessions[index].time);
                            tbody.innerHTML += `
                                <tr>
                                    <th scope="row">${i+1}</th>
                                    <td>${sessions.sessions[index].date}</td>
                                    <td>${sessions.sessions[index].time} Hours</td>
                                    <td>${sessions.sessions[index].name}</td>
                                </tr>
                            `;
                        }
                        document.getElementById("first").innerText = time * 3 + " €";
                        document.getElementById("last").innerText = time + " Hours";
                    }else{
                        console.log('No Data Found');
                        tbody.innerHTML += `
                                <tr>
                                    <h1 class="text-center p-3">No Data Found</h1>
                                </tr>
                            `;
                    }
                    
                    
                })


            }else if(document.location.search == `?user=${login.login.ziad.username}`){
                //Go to home page with user is Osama
                const tbody = document.getElementById("tbody");
                fetch("./json/sessions.json")
                .then((response) => {
                return response.json();
                })
                .then((sessions)=>{
                    if(sessions.sessions.length > 0){
                        //alert(sessions.sessions.length)
                        let time = 0;
                        for (let index = 0; index < sessions.sessions.length; index++) {
                            let i = index;
                            time += parseFloat(sessions.sessions[index].time);
                            tbody.innerHTML += `
                                <tr>
                                    <th scope="row">${i+1}</th>
                                    <td>${sessions.sessions[index].date}</td>
                                    <td>${sessions.sessions[index].time} Hours</td>
                                    <td>${sessions.sessions[index].name}</td>
                                </tr>
                            `;
                        }
                        document.getElementById("first").innerText = time * 3 + " €";
                        document.getElementById("last").innerText = time + " Hours";
                    }else{
                        console.log('No Data Found');
                        tbody.innerHTML += `
                                <tr>
                                    <h1 class="text-center p-3">No Data Found</h1>
                                </tr>
                            `;
                    }
                    
                    
                })
            }else{
                document.location.href = "https://peterondy.github.io/controlplatform.github.io/index.html";
            }
        }
    );

/*End Home Page Script*/

async function fetchData(){
    console.log("async function executed")
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log("async function complete", data)

}



// function fetchData(){
//     console.log("hello world")
//     let d= null;
//     fetch('https://jsonplaceholder.typicode.com/users');
//     .then(function(data){
//         console.log("Promise success", data);
//         return data.json()
//     })
//     .then(function(data)
//     {
//         console.log("final data [0].username ",data[0].username );
//         let para = document.getElementById('username')
//         for(let i=0; i< data.length; i++){
//             let eachuser = document.createElement('h6')
//             eachuser.innerHTML = "Welcome"  + data[i].username.toUpperCase()
//         para.appendChild(eachuser)
//         }
//         para.style.color = "blue"
//         d=data;
//     })
//     .catch(function(error){
//         console.log("Promise failed",error)
    
//     })
//     console.log(d)
// }

// let timerInSeconds = 130;

// function updatetimar(){
//     if(timerInSeconds < 0){
//      clearInterval(interval);
//      alert('Bom!!!')
//    }
//     else{
//        const minuts = Math.floor(timerInSeconds/60);
//        const seconds = timerInSeconds%60;
//        const formttedTime = (minuts + ":" + seconds );
//        document.getElementById('timebomb').innerHTML = formttedTime;
//        document.getElementById('timebomb').style.color = 'red';
//        timerInSeconds = timerInSeconds-1;

//     }
// }
// interval = setInterval(updatetimar,1000);
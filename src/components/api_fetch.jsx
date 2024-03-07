//La API se encuentra funcionando pero solo de forma local

export default function APIFecth(){
    const options = {
        method: 'GET',
        };
    fetch('https://intent-smoothly-collie.ngrok-free.app/Noeru/recent-posts/', options).then((res)=>res.json()).then((json)=>console.log(json))
}
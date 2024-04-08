function addDate(){
    let fecha = new Date();
    let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    section = document.getElementById("date");
    section.innerHTML = fecha.toLocaleDateString('es-ES', opciones);
}

document.addEventListener("submit", async (event) => {
    event.preventDefault();
    let form = document.forms["form"];
    let fd = new FormData(form);
    let datas = {};
    for (let [key, prop] of fd) {
      datas[key] = prop;
    }
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datas)
    };
    fetch('http://localhost:5500/subscribe', options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error de red');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        document.getElementById("message").innerHTML = "¡Solicitud enviada!"
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });

  
  
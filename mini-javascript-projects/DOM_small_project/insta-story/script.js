let images = [
  {
    dp: "https://imgs.search.brave.com/-ROiZ9NiFI1d70xPN8fZM2nhxzXvYec17jOH1TUTgLQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmV4dC5jby51ay9j/bXMvcmVzb3VyY2Uv/YmxvYi8xMTEwMzUw/LzQ3YTg4Mzc0ODdi/MjA5NDQ1MWMwMDMy/YjEyZjM3Mzc5LzI3/LTA2LTI1LWZlYXR1/cmVkLTEtbWVucy1k/YXRhLmpwZw",
    story:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww",
  },
  {
    dp: "https://imgs.search.brave.com/mknRkmJ_fxv8Zw5XBKel9vECI4fAAGc4axllNTpEdns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQwLzJh/L2Y1LzQwMmFmNWNk/MjQ3MWIxMjI5OGQ1/NDZjODJiMjAxOTg4/LmpwZw",
    story:
      "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww",
  },
  {
    dp: "https://imgs.search.brave.com/awksT_Zoh8G9Qn5d-CbZP4gAPcl0EDxLP0J88fgAnB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg3/ODA1MTU2L3ZlY3Rv/ci9wcm9maWxlLXBp/Y3R1cmUtdmVjdG9y/LWlsbHVzdHJhdGlv/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Z2t2TERDZ3NI/SC04SGVRZTdKc2po/bE9ZNnZSQkprX3NL/VzlseWFMZ21Mbz0",
    story:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://imgs.search.brave.com/u4XxpySxDkbBtBopawSC9ksFGJ0uhxDxMxDVDaZR37I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29v/bC1wcm9maWxlLXBp/Y3R1cmVzLXBhbmRh/LW1hbi1nc2wybnRr/amozaHJrODRzLmpw/Zw",
    story:
      "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://imgs.search.brave.com/6FDTZxQBmUaGKEQ2Ipsm-SHaLOzW_yez1ICK3eoW-TQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFHT05Z/TEVYYnMvMi8wLzE2/MDB3L2NhbnZhLW5l/b24tcHVycGxlLXBp/eGVscy1jcmVhdGl2/ZS1pbmR1c3RyeS1w/cm9mZXNzaW9uYWwt/bGlua2VkaW4tcHJv/ZmlsZS1waWN0dXJl/LXlFaGNVNU5CQmZN/LmpwZw",
    story:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://imgs.search.brave.com/WsqTJBgEx8WDh_a6Sp3yBEHhGTrUyucs6a5yjU_g4-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/ODI1Mzc4Mi9waG90/by9wb3NpdGl2ZS1z/dWNjZXNzZnVsLW1p/bGxlbm5pYWwtYnVz/aW5lc3MtcHJvZmVz/c2lvbmFsLW1hbi1o/ZWFkLXNob3QtcG9y/dHJhaXQud2VicD9h/PTEmYj0xJnM9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUNZdE5BeDcw/alFFaTcxcXl6bzZD/dzFib1RXM2JwTGN3/UWZYWm15NUl4VzQ9",
    story:
      "https://images.unsplash.com/photo-1562038969-e85c13ecb2ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://imgs.search.brave.com/Ab8MlXFkPzbPtJkU5zuEmqsTB42Iri0batNqp9JrHyo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGdW1k/eWpPSTQvMS8wLzE2/MDB3L2NhbnZhLWJs/YWNrLWFuZC13aGl0/ZS1zaW1wbGUteW91/dHViZS1wcm9maWxl/LXBpY3R1cmUtbDkw/T1dCWGI1akkuanBn",
    story:
      "https://images.unsplash.com/photo-1578100044626-110806c15b00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

let space = "";
images.forEach((val, idx) => {
  space += `<div class="story">
    <img id="${idx}" src="${val.dp}" alt="">
    </div>`;
});
// console.log(space);

let stories = document.querySelector(".stories");
stories.innerHTML = space;

stories.addEventListener("click", (e) => {
  document.querySelector(".full-screen").style.display = "block";
  document.querySelector(".full-screen").style.backgroundImage = `url(${
    images[e.target.id].story
  })`;
  setTimeout(() => {
    document.querySelector(".full-screen").style.display = "none";
  }, 3000);
});

const card = [
    {
        equipo: "Qatar",
        precio: "USD 30.00",
        img: "https://todosobrecamisetas.com/wp-content/uploads/camisetas-mundial-qatar-2022-catar-1.jpg",
        dataCategory: "Asia",
    },
    {
        equipo: "Holanda",
        precio: "USD 40.00",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/744/products/zsvdfdgfh1-ae83d6f3f105beb94f16675102027549-1024-1024.webp",

        dataCategory: "Europa"
    },
    {
        equipo: "Holanda",
        precio: "USD 35.00",
        img: "https://acdn.mitiendanube.com/stores/001/312/744/products/9cvqcxwx_drr1-e214fe06e73691d49616675872689251-640-0.png",
        dataCategory: "Europa"
    },
    {
        equipo: "Senegal",
        precio: "USD 33.00",
        img: "https://todosobrecamisetas.com/wp-content/uploads/senegal-2022-puma-home-kit-2.jpg",
        dataCategory: "Africa",

    },
    {
        equipo: "Senegal",
        precio: "USD 33.00",
        img: "https://todosobrecamisetas.com/wp-content/uploads/camiseta-suplente-puma-senegal-2022-3.jpg",
        dataCategory: "Africa"
    },
    {
        equipo: "Ecuador",
        precio: "USD 32.00",
        img: "https://todosobrecamisetas.com/wp-content/uploads/camisetas-mundial-qatar-2022-ecuador-2.jpg",
        dataCategory: "America"

    },

]

const container = document.getElementById("filterable-cards")
card.map(x => {
    container.innerHTML += ` 
<div class="card" style="width: 18rem;" data-category = ${x.dataCategory}>
  <img src="${x.img}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${x.equipo}</h5>
    <p class="card-text">${x.precio}</p>
    <a href="#" class="btn btn-primary">View More</a>
  </div>
</div>
    
    `
})




document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll("#filter-buttons button");
    const cards = document.querySelectorAll("#filterable-cards .card");


    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filterValue = this.dataset.filter;

            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            cards.forEach(card => {
                const category = card.dataset.category;

                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

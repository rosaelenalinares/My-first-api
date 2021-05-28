let input = document.getElementById('mysearch')
const search = document.querySelector('.btn')
search.addEventListener('click', publication);



function publication() {
  fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${input.value}.json?api-key=pVkPx1LtoePFAHcgAkxwdwTmxCNqLB7w`)
    .then(response => response.json())
    .then((data) => {


      const container = document.querySelector('.card')
      container.innerHTML = ""
      data.results.books.forEach((books) => {

        const card = `<div class="post">
                      <div class="first">
                        <div class="rank">
                          <div class="number" title="Ranking">${books.rank}</div>
                        </div>
                        <img src="${books.book_image}"></img>
                      </div>
                      <div class="second"
                        <h1>${books.title}</h1>
                        <h3>${books.author}</h3>
                        <p>${books.description}</p>
                        <button class="buy"><a href="${books.amazon_product_url}" target="_blank" title="Buy">Buy</a></button>
                      </div>`
        container.insertAdjacentHTML('beforeend', card)
      })


    })
};




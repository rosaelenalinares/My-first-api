const publication = () => {
  fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pVkPx1LtoePFAHcgAkxwdwTmxCNqLB7w')
    .then(response => response.json())
    .then((data) => {
      console.log(data.results);

      const container = document.querySelector('.card')

      data.results.books.forEach((books) => {
        const card = `<div class="post">
                    <div class="rank">${books.rank}</div><h1>${books.title}</h1>
                    <img src="${books.book_image}"></img>
                    <h3>${books.author}</h3>
                    <p>${books.description}</p>
                    <button class="buy"><a href="${books.amazon_product_url}">Buy</a></button>
                    </div>`
        container.insertAdjacentHTML('beforeend', card)
      })

      const search = document.querySelector('.btn')
      search.addEventListener('click', event => {
        let input = document.getElementById('mysearch')
        console.log(input.value)
        publication(input.value)
      })
    })
};
publication()

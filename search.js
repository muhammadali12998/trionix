
  document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll('.productHolder .card');

    cards.forEach(card => {
      let categoryText = card.querySelector('.categoryText').textContent.toLowerCase();
      let brandText = card.querySelector('.brandtext').textContent.toLowerCase();

      if (categoryText.includes(filter) || brandText.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });

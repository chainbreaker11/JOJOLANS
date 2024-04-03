document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const additionalInfo = card.querySelector('.additional-info');
      additionalInfo.classList.toggle('show');
    });
  });
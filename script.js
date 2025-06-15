let pattern = document.querySelector('.bg');

let containerTop = document.getElementById('containerTop');

window.addEventListener('scroll', () => {
    pattern.style.backgroundPosition = window.scrollY + 'px'; 
})


let leaf = document.getElementById('leaf');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    containerTop.style.marginTop = `${value * 2.5}px`;
})


document.querySelectorAll('.cardSkills a[href="#"]').forEach((link, index) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const title = this.closest('.contentSkills').querySelector('h2').innerText;
      const content = this.closest('.contentSkills').querySelector('h3').innerText;

      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalText').innerText = content;
      document.getElementById('modal').classList.remove('hidden');
    });
  });

  document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('modal').classList.add('hidden');
  });

  window.addEventListener('click', function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });
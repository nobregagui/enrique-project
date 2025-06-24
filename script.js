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

// Mobile menu functionality - wrapped in DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navigation = document.querySelector('.navigation');
    const listNavBar = document.querySelector('.listNavBar');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');

    // Debug: verificar se os elementos foram encontrados
    console.log('Mobile close button:', mobileCloseBtn);
    console.log('Navigation:', navigation);

    if (mobileMenuToggle && navigation && mobileCloseBtn) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navigation.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
        });

        // Close menu when clicking on close button
        mobileCloseBtn.addEventListener('click', (e) => {
            console.log('Close button clicked!');
            e.preventDefault();
            e.stopPropagation();
            mobileMenuToggle.classList.remove('active');
            navigation.classList.remove('active');
            mobileOverlay.classList.remove('active');
        });

        // Close menu when clicking on a link
        listNavBar.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                mobileMenuToggle.classList.remove('active');
                navigation.classList.remove('active');
                mobileOverlay.classList.remove('active');
            }
        });

        // Close menu when clicking on overlay
        mobileOverlay.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navigation.classList.remove('active');
            mobileOverlay.classList.remove('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navigation.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                navigation.classList.remove('active');
                mobileOverlay.classList.remove('active');
            }
        });
    } else {
        console.error('Some mobile menu elements not found:', {
            mobileMenuToggle: !!mobileMenuToggle,
            navigation: !!navigation,
            mobileCloseBtn: !!mobileCloseBtn
        });
    }
});

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

// Artigos: manipular clique e exibir conteúdo na seção de contato

document.querySelectorAll('.linkCard').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // Salva os dados do artigo no localStorage
    localStorage.setItem('artigoTitle', this.getAttribute('data-title'));
    localStorage.setItem('artigoContent', this.getAttribute('data-content'));
    // Redireciona para a página de artigo
    window.location.href = 'artigo.html';
  });
});

window.addEventListener('DOMContentLoaded', function() {
  const artigoTitle = localStorage.getItem('artigoTitle');
  const artigoContent = localStorage.getItem('artigoContent');
  if (window.location.hash === '#contato' && artigoTitle && artigoContent) {
    // Mostra o artigo
    document.getElementById('artigoBox').style.display = 'block';
    document.getElementById('artigoTitle').textContent = artigoTitle;
    document.getElementById('artigoContent').textContent = artigoContent;
    // Troca o título "Contato" por "ARTIGOS"
    const contatoTitle = document.querySelector('#contato .contentContactBody h2');
    if (contatoTitle) contatoTitle.textContent = 'ARTIGOS';
    // Limpa o localStorage para não repetir na próxima vez
    localStorage.removeItem('artigoTitle');
    localStorage.removeItem('artigoContent');
  }
});
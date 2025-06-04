document.addEventListener('DOMContentLoaded', function () { 

  
  /*** CHAOS CREW MODALS WITH SPOTLIGHT EFFECT ***/
  function closeAllCrewModals() {
    document.body.classList.remove('modal-open');
    document.querySelectorAll('.crew-card.open').forEach(card => card.classList.remove('open'));
  }

  document.querySelectorAll('.crew-card').forEach(card => {
    card.addEventListener('click', function(e) {
      // If this card is NOT open already, open ONLY this one and close the rest
      if (!card.classList.contains('open')) {
        closeAllCrewModals();
        card.classList.add('open');
        document.body.classList.add('modal-open');
      }
      e.stopPropagation();
    });
    card.querySelector('.close-modal').addEventListener('click', function(e) {
      card.classList.remove('open');
      document.body.classList.remove('modal-open');
      e.stopPropagation();
    });
  });

  // Clicking outside closes ALL modals and removes the modal-open class
  document.addEventListener('click', function() {
    closeAllCrewModals();
    // Also close the penguin popup if open
    if (typeof penguinPopup !== 'undefined' && penguinPopup) {
      penguinPopup.style.display = 'none';
    }
  });

  // Prevent click INSIDE modal from closing it
  document.querySelectorAll('.crew-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });

  document.querySelectorAll('.read-more').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = this.getAttribute('href').replace('#', '');
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'block';
  });
});

document.querySelectorAll('.close-blog-modal').forEach(btn => {
  btn.addEventListener('click', function() {
    this.closest('.blog-modal').style.display = 'none';
  });
});

window.addEventListener('click', function(e) {
  document.querySelectorAll('.blog-modal').forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
});

function submitGossip() {
  const input = document.getElementById("gossip-input");
  const gossip = input.value.trim();

  if (gossip) {
    const feed = document.getElementById("gossip-feed");
    const entry = document.createElement("div");
    entry.className = "gossip-entry";
    entry.innerHTML = `<span class="gossip-author">👀 Anonymous:</span>
                       <span class="gossip-quote">“${gossip}”</span>`;
    feed.prepend(entry); // Adds to top of feed
    input.value = "";
  }
}


  /*** PENGUIN CONTACT POPUP ***/
  const penguinButton = document.getElementById('penguinButton');
  const penguinPopup = document.getElementById('penguinPopup');
  if (penguinButton && penguinPopup) {
    penguinButton.addEventListener('click', function(e) {
      if (
        e.target.classList.contains('penguin') ||
        e.target.classList.contains('chat-bubble')
      ) {
        penguinPopup.style.display =
          penguinPopup.style.display === 'flex' ? 'none' : 'flex';
      }
      e.stopPropagation();
    });
    penguinPopup.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  
  /*** FALLING STARS ***/
  function createFallingStar() {
    const star = document.createElement('div');
    star.className = 'falling-star';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.setProperty('--drift', (Math.random() - 0.5) * 100 + 'px');
    star.style.animationDelay = Math.random() * 2 + 's';

    document.querySelector('.stars-container').appendChild(star);
    star.addEventListener('animationend', () => {
      star.remove();
    });
  }
  setInterval(createFallingStar, 400);
});
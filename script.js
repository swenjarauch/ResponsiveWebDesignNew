document.addEventListener('DOMContentLoaded', (event) => {
    const videoWrappers = document.querySelectorAll('.video-wrapper');
  
    videoWrappers.forEach(wrapper => {
      const video = wrapper.querySelector('.hover-video');
      const img = wrapper.querySelector('.card-img-top');
      let hoverTimeout;

      img.addEventListener('mouseover', () => {
        hoverTimeout = setTimeout(() => {
        video.style.display = 'block';
        video.play();
      }, 250); // 1 Sekunde Delay
      });
  
      img.addEventListener('mouseout', () => {
        clearTimeout(hoverTimeout);
        video.style.display = 'none';
        video.pause();
        video.currentTime = 0; // Optional: Setzt das Video zurück zum Start
      });
    });
  });

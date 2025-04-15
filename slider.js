function initSlideshow() {
    const images = [
    { src: "images/image8.jpg", text: "Riviera shqiptare është një zonë bregdetare në Qarkun e Vlorës përgjatë Detit të Jonit nën Malësinë e Llogarasë në jug të Shqipërisë." },
    { src: "images/image2.jpg", text: "Kalaja e Beratit eshte ngritur në një kodër 187 metra të lartë, në të majtë të grykës së lumit Osum." },
    { src: "images/image3.jpg", text: "Tirana, është kryeqendra e qarkut dhe rrethit me të njëtin emër dhe kryeqyteti i Republikës së Shqipërisë." },
    { src: "images/image4.jpg", text: "Durrësi është qyteti i dytë më i madh në Shqipëri. Shtrihet në pjesën qendrore të Ultësirës Perëndimore shqiptare." },
    { src: "images/image11.jpg", text: "Kalaja e Shkodrës që mban emrin Rozafa është një monument mijëvjeçar i ngritur ne një kodër shkëmbore në hyrje të qytetit të Shkodrës." },
    { src: "images/image7.jpg", text: "Butrinti ashtu si shumë qendra të tjera të rëndësishme arkeologjike në Shqipëri, u shpall Monument Kulture, që në vitin 1948." },
    { src: "images/image9.jpg", text: "Dhërmiu është fshati i dytë i krahinës së Himarës. Ai ndodhet buzë detit Jon dhe pranë shpateve të maleve 'Vetëtimë Pritëse'." },
    { src: "images/image10.jpg", text: "Butrinti është një vend arkeologjik i rëndësishëm në Shqipëri, ku në shekullin e 14-të u ndërtua mbi rrënojat antike të qytetërimit greko-romak." },
  
    ];
  
    const track = document.getElementById("slider-track");
    const captionEl = document.getElementById("caption");
    let current = 0;
    let intervalId;
  
    const extendedImages = [...images, images[0]];
  
    track.innerHTML = extendedImages.map(img => `<img src="${img.src}" alt="">`).join('');
    track.style.width = `${extendedImages.length * 100}%`;
  
    document.querySelectorAll("#slider-track img").forEach(img => {
      img.style.width = `${100 / extendedImages.length}%`;
      img.style.objectFit = "cover";
    });
  
    function updateCaption() {
      const realIndex = current === images.length ? 0 : current;
      captionEl.textContent = images[realIndex].text;
    }
  
    function slideTo(index) {
      track.style.transition = "transform 0.5s ease-in-out";
      track.style.transform = `translateX(-${(100 / extendedImages.length) * index}%)`;
      updateCaption();
    }
  
    function jumpToStart() {
      track.style.transition = "none";
      current = 0;
      track.style.transform = `translateX(0%)`;
      updateCaption();
    }
  
    function nextSlide() {
      current++;
      slideTo(current);
  
      if (current === extendedImages.length - 1) {
        // Stop the interval while jumping
        clearInterval(intervalId);
  
        // Wait for transition, then jump and resume
        setTimeout(() => {
          jumpToStart();
          // Resume interval after short delay
          intervalId = setInterval(nextSlide, 8000);
        }, 500); // Wait for slide transition to finish
      }
    }
  
    function prevSlide() {
      current--;
      if (current < 0) {
        track.style.transition = "none";
        current = images.length - 1;
        track.style.transform = `translateX(-${(100 / extendedImages.length) * current}%)`;
        void track.offsetWidth;
        slideTo(current);
      } else {
        slideTo(current);
      }
    }
  
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
  
    updateCaption();
  
    // Start auto sliding
    intervalId = setInterval(nextSlide, 8000);
  }
  
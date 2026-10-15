var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: .15 });
document.querySelectorAll('.rv').forEach(function (element) {
  io.observe(element);
});

var mb = document.getElementById('mb');
var lk = document.getElementById('lk');
mb.onclick = function () {
  mb.setAttribute('aria-expanded', lk.classList.toggle('open'));
};
lk.onclick = function () {
  lk.classList.remove('open');
};

var titles = ['Software Engineer', 'Tech Entrepreneur'];
var titleIndex = 0;
var titleCharacter = 0;
var deletingTitle = false;
var titleElement = document.getElementById('ty');
(function typeTitle() {
  var title = titles[titleIndex];
  if (!deletingTitle) {
    titleCharacter++;
    titleElement.textContent = title.slice(0, titleCharacter);
    if (titleCharacter === title.length) {
      deletingTitle = true;
      return setTimeout(typeTitle, 1500);
    }
    setTimeout(typeTitle, 100);
  } else {
    titleCharacter--;
    titleElement.textContent = title.slice(0, titleCharacter);
    if (titleCharacter === 0) {
      deletingTitle = false;
      titleIndex = (titleIndex + 1) % titles.length;
      return setTimeout(typeTitle, 400);
    }
    setTimeout(typeTitle, 50);
  }
})();

var aboutText = 'Visionary | An Exceptional Technopreneur | Unique Blend of Technical Expertise | Entrepreneurial Vision | Relentless Drive for Innovation in Financial Markets | Software Engineer';
var aboutCharacter = 0;
var aboutElement = document.getElementById('aty');
(function typeAbout() {
  if (aboutCharacter <= aboutText.length) {
    aboutElement.textContent = aboutText.slice(0, aboutCharacter++);
    setTimeout(typeAbout, 40);
  }
})();

var slides = document.querySelectorAll('.slide');
var dots = document.getElementById('dots');
var slideIndex = 0;
var hoveringSlides = false;
var focusingSlides = false;
slides.forEach(function (_, index) {
  var dot = document.createElement('i');
  dot.onclick = function () {
    goToSlide(index);
  };
  dots.appendChild(dot);
});
function goToSlide(index) {
  slideIndex = (index + slides.length) % slides.length;
  slides.forEach(function (slide, slideNumber) {
    slide.classList.toggle('on', slideNumber === slideIndex);
    dots.children[slideNumber].classList.toggle('on', slideNumber === slideIndex);
  });
}
goToSlide(0);
document.getElementById('pv').onclick = function () {
  goToSlide(slideIndex - 1);
};
document.getElementById('nx').onclick = function () {
  goToSlide(slideIndex + 1);
};
var slideContainer = document.getElementById('sl');
slideContainer.onmouseenter = function () {
  hoveringSlides = true;
};
slideContainer.onmouseleave = function () {
  hoveringSlides = false;
};
slideContainer.onfocusin = function () {
  focusingSlides = true;
};
slideContainer.onfocusout = function (event) {
  if (!slideContainer.contains(event.relatedTarget)) {
    focusingSlides = false;
  }
};
setInterval(function () {
  if (!hoveringSlides && !focusingSlides && document.visibilityState === 'visible') {
    goToSlide(slideIndex + 1);
  }
}, 5000);

var sections = document.querySelectorAll('section[id]');
addEventListener('scroll', function () {
  var currentSection = 'home';
  sections.forEach(function (section) {
    if (section.getBoundingClientRect().top < 140) {
      currentSection = section.id;
    }
  });
  lk.querySelectorAll('a').forEach(function (link) {
    link.classList.toggle('on', link.getAttribute('href') === '#' + currentSection);
  });
});

document.getElementById('f').onsubmit = function (event) {
  event.preventDefault();
  var message = "Hi Eng Lui, I'm " + document.getElementById('n').value + ' (' +
    document.getElementById('e').value + ').\n\n' + document.getElementById('m').value;
  location.href = 'https://wa.me/263737964298?text=' + encodeURIComponent(message);
};

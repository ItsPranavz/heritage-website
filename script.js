const u = document.getElementById('up');
const d = document.getElementById("down");
const div1 = document.getElementById('one');

div1.addEventListener('mouseover', function() {
  if (this.contains(event.target)) {
    u.textContent = 'Taj Mahal';
    d.textContent = "If you consider the top 10 historical places in India, Taj Mahal of Agra will always be ranking high in the list. Explore the ultimate epitome of love, the Taj Mahal, whose grandeur remains unmatched in history and today this is one of the weekend getaways from Delhi.";
  }
});

div1.addEventListener('mouseout', function() {
  if (this.contains(event.target)) {
    u.textContent = 'Historical Places in India';
    d.textContent = "By Pranav Sharma"
  }
});

const div2 = document.getElementById('two');

div2.addEventListener('mouseover', function() {
  if (this.contains(event.target)) {
    u.textContent = 'Agra Fort';
    d.textContent = "To get a sense of the rich history of the Mughal era, visit the walled palatial Agra Fort of Uttar Pradesh, one of the famous historical places in India built entirely of red sandstone. Built in 1565 by Akbar, this historical tourist place in India has two ornately designed gates: the Amar Singh Gate and the Delhi Gate.";
  }
});

div2.addEventListener('mouseout', function() {
  if (this.contains(event.target)) {
    u.textContent = 'Historical Places in India';
    d.textContent = "By Pranav Sharma"
  }
});

const div3 = document.getElementById('three');

div3.addEventListener('mouseover', function() {
  if (this.contains(event.target)) {
    u.textContent = 'Red Fort';
    d.textContent = "One of the historical tourist places in India, the Red Fort of Delhi was constructed over ten years from 1638 to 1648. This fort was constructed when Shah Jahan shifted the capital from Agra to Delhi and it was then known as the Qila-e-Mubarak.";
  }
});

div3.addEventListener('mouseout', function() {
  if (this.contains(event.target)) {
    u.textContent = 'Historical Places in India';
    d.textContent = "By Pranav Sharma"
  }
});

const div4 = document.getElementById('four');

div4.addEventListener('mouseover', function() {
  if (this.contains(event.target)) {
    u.textContent = 'Qutub Minar';
    d.textContent = "Regarded as the site of the first Muslim kingdom in northern India, the Qutub Minar of Delhi is definitely one of the most historical sites in India. It is one of the finest examples of Indo-Muslim architecture with its intricate red sandstone storeys.";
  }
});

div4.addEventListener('mouseout', function() {
  if (this.contains(event.target)) {
    u.textContent = 'Historical Places in India';
    d.textContent = "By Pranav Sharma"
  }
});

const div5 = document.getElementById('five');

div5.addEventListener('mouseover', function() {
  if (this.contains(event.target)) {
    u.textContent = 'Hamuyun\'s Tomb';
    d.textContent = "A beautiful synthesis of Indian and Persian architecture, Humayun’s Tomb of Delhi is one of the most famous and important places in India. Humayun’s wife Hamida Banu Begum commissioned the building of this tomb for her husband in the 15th century.";
  }
});

div5.addEventListener('mouseout', function() {
  if (this.contains(event.target)) {
    u.textContent = 'Historical Places in India';
    d.textContent = "By Pranav Sharma"
  }
});

const div6 = document.getElementById('six');

div6.addEventListener('mouseover', function() {
  if (this.contains(event.target)) {
    u.textContent = 'Fatehpur Sikri';
    d.textContent = "The royal city of Fatehpur Sikri in Uttar Pradesh was once the capital of the Mughal era during Akbar’s reign. This royal city is one of the historical tourist places in India and once had palaces, public buildings, mosques, quarters for the king, the army as well as the servants.";
  }
});

div6.addEventListener('mouseout', function() {
  if (this.contains(event.target)) {
    u.textContent = 'Historical Places in India';
    d.textContent = "By Pranav Sharma"
  }
});
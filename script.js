/*
(NOTE: This is the bad evil version that I might desperatly need one day. If you're trying to read my code for some unfanthomable reason, ignore this.)

const headers = document.querySelectorAll("h1, h2, h3, h4");
  
headers.forEach((header) => {
  const text = header.textContent;
  header.textContent = "";

  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      header.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100); // Adjust the speed here
    }
  }

  typeWriter();
});*/

const headers = document.querySelectorAll("h1, h2, h3, h4");

headers.forEach((header) => {
  const text = header.textContent;
  header.textContent = "";

  let index = 0;
  let speed = 100; // Default speed for non-<h4> elements

  if (header.tagName === "H4") {
    speed = 50; // Speed for <h4> elements
  }

  function typeWriter() {
    if (index < text.length) {
      header.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
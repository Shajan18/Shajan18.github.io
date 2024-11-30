// Save username and password in localStorage after login
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Save login info to localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  
  // Redirect to notes page after successful login
  window.location.href = 'notes.html';
});

// Check if user is logged in on the Notes page
if (window.location.pathname.endsWith('notes.html')) {
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');
  
  // If no stored login, redirect to login page
  if (!storedUsername || !storedPassword) {
    window.location.href = 'index.html';
  }
}

// Function to wrap text to 51 characters per line and copy text with Ctrl+C
document.getElementById('inputText').addEventListener('input', function() {
  const inputText = this.value;
  const wrappedText = wrapText(inputText, 51);
  document.getElementById('outputText').value = wrappedText;
});

// Function to wrap text to a fixed number of characters per line
function wrapText(text, lineLength) {
  const words = text.split(' ');
  let line = '';
  let wrappedText = '';

  words.forEach(word => {
    if (line.length + word.length + 1 <= lineLength) {
      line += (line.length > 0 ? ' ' : '') + word;
    } else {
      wrappedText += line + '\n';
      line = word;
    }
  });

  wrappedText += line; // Add remaining line
  return wrappedText;
}

// Allow the entire line to be copied with a single click (Ctrl+C)
document.getElementById('outputText').addEventListener('click', function() {
  this.select();
  document.execCommand('copy');
});

// Handle auto-dictionary functionality (a simple version using JavaScript)
document.getElementById('inputText').addEventListener('blur', function() {
  const inputText = this.value;
  const words = inputText.split(' ');

  words.forEach(word => {
    if (!isValidWord(word)) {
      alert(`The word "${word}" is not valid!`);
    }
  });
});

function isValidWord(word) {
  // A simple dictionary check for demonstration purposes
  const dictionary = ['hello', 'world', 'good', 'morning', 'example'];
  return dictionary.includes(word.toLowerCase());
}

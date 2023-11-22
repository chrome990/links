let mail = document.getElementById('mail');
let disc = document.getElementById('disc');

mail.addEventListener('click', function() {
    event.preventDefault(); // Prevent the default behavior of the link (e.g., navigating to a URL)

    const textToCopy = "cnefzi05@gmail.com";
  
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
  
    textarea.select();
    document.execCommand('copy');
  
    // Remove the temporary textarea
    document.body.removeChild(textarea);
    alert('Succefully Copied the Chrome Email')
})

disc.addEventListener('click', function() {
    alert('Working On It ;)')
})
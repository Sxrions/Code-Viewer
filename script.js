document.getElementById('highlight-style').href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css';
document.getElementById('theme-selector').addEventListener('change', function() {
    let theme = this.value;
    console.log(theme);
    document.getElementById('highlight-style').href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/' + theme + '.min.css';
    hljs.highlightAll();
});
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

editor.addEventListener('input', () => {
  const code = editor.value;
  preview.srcdoc = code;
});

function downloadHTML() {
  const blob = new Blob([editor.value], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "index.html";
  a.click();
}
window.addEventListener('DOMContentLoaded', () => {
  preview.srcdoc = editor.value;
});

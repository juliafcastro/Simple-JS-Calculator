function add(value) {
  document.getElementById('display').value += value;
}

function clean() {
  document.getElementById('display').value = '';
}

function erase() {
  var display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calc() {
  var display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Erro";
  }
}
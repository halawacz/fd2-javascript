function revString(w) {
  if (w == '') {
    return '';
  } else {
    return revString(w.substr(1)) + w.charAt(0);
  }
}
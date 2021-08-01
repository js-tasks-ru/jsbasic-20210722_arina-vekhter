function truncate(str, maxlength) {
  return (str.lenght > maxlength) ? 
  str.slice(0, maxlength -1) + '...': str;
}

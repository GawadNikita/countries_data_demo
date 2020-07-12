function changeTheme(event){
  var element = document.getElementsByClassName('label-name');
  if (event.target.checked == true){
    element.innerHTML = "light theme";
    document.body.setAttribute('data-page-theme', 'dark')
  }else{
    element.innerHTML = "dark theme";
    document.body.removeAttribute('data-page-theme');
  }
}
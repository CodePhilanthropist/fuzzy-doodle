const changeProfileInfo = () => {
  fullName = "Nair Yer Cajes";
  picture = "https://avatars.githubusercontent.com/u/43643225?v=4";
  position = "Web Developer";
  address = "San Carlos, Talibon, Bohol";

  document.getElementById("fullName").innerHTML = fullName;
  document.getElementById("profilePicture").src = picture;
  document.getElementById("bgImage").style.backgroundImage = "url('images/code.jpg')";
  document.getElementById("position").innerHTML = position;
  document.getElementById("address").innerHTML = address;
};

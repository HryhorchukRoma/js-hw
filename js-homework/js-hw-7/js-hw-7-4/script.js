document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("dropdown");
  const removeButton = document.getElementById("removeButton");

  removeButton.addEventListener("click", function () {
    const selectedIndex = dropdown.selectedIndex;
    dropdown.remove(selectedIndex);
  });
});

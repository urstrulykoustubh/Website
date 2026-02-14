const proposal = document.getElementById("proposal");
const loveLetter = document.getElementById("loveLetter");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noDialog = document.getElementById("noDialog");
const closeDialog = document.getElementById("closeDialog");
const couplePhoto = document.getElementById("couplePhoto");
const photoHint = document.getElementById("photoHint");

function showLoveLetter() {
  proposal.classList.add("hidden");
  loveLetter.classList.remove("hidden");
}

yesBtn.addEventListener("click", showLoveLetter);

noBtn.addEventListener("click", () => {
  noDialog.showModal();
});

closeDialog.addEventListener("click", () => {
  noDialog.close();
  showLoveLetter();
});

couplePhoto.addEventListener("error", () => {
  couplePhoto.classList.add("hidden");
  photoHint.classList.remove("hidden");
});

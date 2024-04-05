document.addEventListener("DOMContentLoaded", function () {
  const cardForm = document.getElementById("cardForm");
  const modal = document.getElementById("modal");
  const certificateContent = document.getElementById("certificateContent");
  const closeModal = document.querySelector(".close");

  // Hide the modal initially
  modal.style.display = "none";

  cardForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // 🚨 Get input values
    const studentNameInput = document.getElementById("studentName");
    const personalMessageInput = document.getElementById("personalMessage"); // Get personal message input
    const courseNameInput = document.getElementById("courseName"); // Get course name input

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

    if (studentName.trim() === "" || personalMessage.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    // 🚨 Generate certificate content dynamically
    const certificateHTML = `
      <div style="width: 75%; margin: auto;">
        <h3 style="text-align: center;">Certificate of Completion</h3>
        <p>This is to certify that ${studentName} has successfully completed the course ${courseName}.</p>
        <p>Personal Message: ${personalMessage}</p>
        <div style="text-align: center;">
          <img src="logo.png" alt="Logo" style="max-width: 100%; height: auto;">
        </div>
      </div>
    `;

    // Set the certificate content
    certificateContent.innerHTML = certificateHTML;

    // Clear form inputs
    studentNameInput.value = "";
    personalMessageInput.value = "";
    if (courseNameInput) courseNameInput.value = "";

    // Show the modal
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", function () {
    // Hide the modal when close button is clicked
    modal.style.display = "none";
  });
});

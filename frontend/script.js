const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const API_URL = "https://student-management-system-3lpo.onrender.com";
let editId = null;

// --- 1. DISPLAY LOGIC ---
async function displayStudents() {
  try {
    const response = await fetch(`${API_URL}/students`)
    const students = await response.json();

    result.innerHTML = "";

    students.forEach((student) => {
      result.innerHTML += `
<div class="student-card">

    <p>ID : ${student.id}</p>
    <h3>${student.name}</h3>
    <p>${student.email}</p>

    <button onclick="editStudent(${student.id})">
        EDIT
    </button>

    <button onclick="deleteStudent(${student.id})">
        DELETE
    </button>

</div>
<hr>
`;
    });
  } catch (error) {
    console.error("Could not fetch students:", error);
  }
}

// Fetch the list right away when the window opens
displayStudents();

// --- 2. ADD LOGIC ---
async function addStudent() {
  const name = nameInput.value;
  const email = emailInput.value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      displayStudents();

      nameInput.value = "";
      emailInput.value = "";

      alert("Student Added Successfully");
    } else {
      alert("Something went wrong on the server");
    }
  } catch (error) {
    console.error("Network error:", error);
    alert("Cannot connect to server. Is your backend running?");
  }
}

async function deleteStudent(id) {
  const response = await fetch(`${API_URL}/students/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    displayStudents();
  }
}

async function editStudent(id) {
  const response = await fetch(`${API_URL}/students/${id}`);

  const student = await response.json();

  // Fill the input boxes
  nameInput.value = student.name;
  emailInput.value = student.email;

  // Remember which student is being edited
  editId = student.id;

  // Change button text
  submitBtn.innerText = "UPDATE STUDENT";
}

async function updateStudent() {
  const name = nameInput.value;
  const email = emailInput.value;

  const response = await fetch(`${API_URL}/students/${editId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  });

  if (response.ok) {
    alert("Student Updated Successfully");

    displayStudents();

    // Clear the form
    nameInput.value = "";
    emailInput.value = "";

    // Reset edit mode
    editId = null;

    submitBtn.innerText = "ADD STUDENT";
  }
}

// --- 3. EVENT LISTENER ---
// submitBtn.addEventListener("click", addStudent);
submitBtn.addEventListener("click", () => {
  if (editId === null) {
    addStudent();
  } else {
    updateStudent();
  }
});

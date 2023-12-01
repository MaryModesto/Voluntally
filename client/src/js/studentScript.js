const API_URL = "http://localhost:3000";

function renderStudents(students) {
  const tbody = $("#studentsTable tbody");
  tbody.empty(); // Clear the table body

  students.forEach((student) => {
    const row = $("<tr></tr>");
    row.append(`<td class="Table__data">${student.IDnumber}</td>`);
    row.append(`<td class="Table__data">${student.name}</td>`);
    row.append(`<td class="Table__data">${student.course}</td>`);
    row.append(`<td class="Table__data">${student.year}</td>`);
    row.append(`<td class="Table__data">${student.department}</td>`);
    
    const actionsCell = $("<td class='Table__data'></td>");
    actionsCell.append(`<span id="points" class="Points">${student.points}</span>`);
    actionsCell.append(`<button class="subtract-points-button MinusButton" data-id="${student.id}" ">–</button>`);
    actionsCell.append(`<button class="add-points-button PlusButton" data-id="${student.id}"">➕</button>`);
    actionsCell.append(`<button class="delete-button DeleteButton" data-id="${student.id}">✕</button>`);

    row.append(actionsCell);
    
    tbody.append(row);
  });
}

function fetchStudents() {
  $.get(`${API_URL}/students`, (data) => {
    renderStudents(data);
  });
}

$("#newStudent").on("submit", (e) => {
  e.preventDefault();
  const IDnumber = $("#FormIDnumber").val();
  const studentName = $("#FormFullName").val();
  const course = $("#FormCourse").val();
  const year = $("#FormYear").val();

  $.ajax({
    url: `${API_URL}/students`,
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ IDnumber, name: studentName, course, year }),
    success: (data) => {
      fetchStudents();
      location.href = "admin-students.html";
    },
  });
});

$("body").on("click", ".update-button", function () {
  const id = $(this).data("id");
  const content = $(this).closest("tr").find(".note-content").prop("value");

  $.ajax({
    url: `${API_URL}/students/${id}`,
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify({ content }),
    success: () => {
      fetchStudents();
    },
  });
});

$("body").on("click", ".delete-button", function () {
  const id = $(this).data("id");

  $.ajax({
    url: `${API_URL}/students/${id}`,
    type: "DELETE",
    success: () => {
      fetchStudents();
    },
  });
});

$("body").on("click", ".add-points-button", function () {
  const id = $(this).data("id");

  $.ajax({
    url: `${API_URL}/students/${id}`,
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify({ operation: "add" }),
    success: () => {
      fetchStudents();
    },
  });
});

$("body").on("click", ".subtract-points-button", function () {
  const id = $(this).data("id");

  $.ajax({
    url: `${API_URL}/students/${id}`,
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify({ operation: "subtract" }),
    success: () => {
      fetchStudents();
    },
  });
});

fetchStudents();

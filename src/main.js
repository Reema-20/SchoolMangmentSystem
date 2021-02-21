var students = [];

document.getElementById('submit').addEventListener('click', (ev) => {
	ev.preventDefault();
    let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');

	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// Show success message
	showMessage('success');

   listStudents(nameInputEl.value, idInputEl.value, gdpaInputEl.value);
});

function inputValidation(name, id, gdpa) {
	// check for the value of each element
    let x = 30;

	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}
}

function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(student);
    console.log('students array: ', students);
}

function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!')
    }else{
        alert('Faild to add student')
    }
}

function listStudents()
{
    var newStuInfoRow="";
    for(i in students)
    {
        newStuInfoRow+=`<tr>
                <td>`+students[i].name+`</td>
                <td>`+students[i].id+`</td>
                <td>`+students[i].gdpa+`</td>
                <td><button onclick='updateStu(`+i+`)' class='btn btn-warning'>Update</button></td>
                <td><button onclick='deleteStu(`+i+`)' class='btn btn-danger'>Delete</button></td>
            </tr>`;
    }
    document.getElementById('tableBody').innerHTML=newStuInfoRow;
}


function deleteStu(listIndex)
{
    students.splice(listIndex,1);
    listStudents();
}


function updateStu(listIndex)
{
	var updateName = prompt("Please enter the updated Name");
	var updateID = prompt("Please enter the updated ID");
	var updateGdpa = prompt("Please enter the updated GDPA");

	if(updateName !== null)
		{students[listIndex].name=updateName;}

	if(updateID !== null)
		{students[listIndex].id=updateID;}

	if(updateGdpa !== null)
		{students[listIndex].gdpa=updateGdpa;}

}


// This week task:
// Show list of students 
// Update student
// Delete student

// 10 marks
// 1) based on the follwoing:
// a) easy to use  and prettyu look 3
// b) resposnive design 2

// c) clean code 2
// d) show list for the user 1
// e) update 1
// f) delete 1

// Deeadline: 20/2, on github.

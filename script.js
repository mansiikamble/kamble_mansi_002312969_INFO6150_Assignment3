function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}



let studentCount = 3; 

function addNewRow() {
  studentCount++;
    const table = document.getElementById('myTable');
    const newRow = table.insertRow(table.rows.length - 1); 
    newRow.innerHTML = `<td><input type="checkbox" onclick="SelectBox(this)" /><br /><br /><img src="down.png" width="25px" onclick="Down(this)" /></td>
        <td>Student ${studentCount}</td>
        <td>Teacher ${studentCount}</td>
        <td>Approved</td>
        <td>Fall</td>
        <td>TA</td>
        <td>${Math.floor(Math.random() * 100000)}</td> <!-- Random Budget Number -->
        <td>100%</td>
        <td><button onclick="rowDelete(this)" >Delete</button><button onclick="editNew(this)">Edit</button></td>`;

    const dropDownRow = table.insertRow(table.rows.length - 1);
    dropDownRow.className = "dropDownTextArea";
    dropDownRow.innerHTML = `<tr><td colspan="8" style="display:none;">
            Advisor:<br /><br />
            Award Details<br />
            Summer 1-2014(TA)<br />
            Budget Number: <br />
            Tuition Number: <br />
            Comments:<br /><br /><br />
            Award Status:<br /><br /><br />
        </td></tr>`;

  alert(`Student ${studentCount} record added`);
}

document.querySelectorAll('.dropDownTextArea').forEach(row => {
  row.style.display = 'none';
});

function Down(img) {
  const row = img.closest('tr').nextElementSibling;
  if (row && row.classList.contains('dropDownTextArea')) {
      row.style.display = row.style.display === 'none' || row.style.display === '' ? 'table-row' : 'none';
  }
}

function updatesubmitButtonState()
{

}
function editNew(button)
{
  const row = button.closest('tr');
  const number = row.cells[1].textContent;
  

    const details = `
        Edit details of ${number}<br />
        Student: ${row.cells[1].textContent}<br />
        Advisor: ${row.cells[2].textContent}<br />
        Award Status: ${row.cells[3].textContent}<br />
        Semester: ${row.cells[4].textContent}<br />
        Type: ${row.cells[5].textContent}<br />
        Budget #: ${row.cells[6].textContent}<br />
        Percentage: ${row.cells[7].textContent}<br />
    `;
    var message = " Click OK to update or Cancel to dismiss "
    function createPopup() {
      
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      overlay.style.zIndex = '999';
      document.body.appendChild(overlay);
  
      
      const popup = document.createElement('div');
      popup.style.position = 'absolute';
      popup.style.left = '50%';
      popup.style.top = '20px'; 
      
      popup.style.padding = '20px';
      popup.style.backgroundColor = 'white';
      popup.style.borderRadius = '8px';
      popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
      popup.style.zIndex = '1000';
      overlay.appendChild(popup);
  
      
      const title = document.createElement('h2');
      title.textContent = ` ${number} record details`;
      popup.appendChild(title);
  
      
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = ' ';
      popup.appendChild(input);
  
      
      const okayButton = document.createElement('button');
      okayButton.textContent = 'Update';
      okayButton.onclick = () => {
          const userInput = input.value;
          alert(`Student ${studentCount} data updated successfully`);
          document.body.removeChild(overlay);
      };
      popup.appendChild(okayButton);
  
      
      const cancelButton = document.createElement('button');
      cancelButton.textContent = 'Cancel';
      cancelButton.onclick = () => {
          document.body.removeChild(overlay);
      };
      popup.appendChild(cancelButton);
  }
  
  createPopup();
}

function rowDelete(button) {
  const row = button.closest('tr');
  const studentCount = row.cells[1].textContent;
  row.nextElementSibling.remove();
  row.remove();

  alert(`${studentCount} Record Succesfully Deleted`);
  updatesubmitButtonState();
}

function SelectBox(checkbox) {
  const row = checkbox.closest('tr');
  const submitButton = document.getElementById('submitButton');

  if (checkbox.checked) {
      row.style.backgroundColor = 'yellow';
      submitButton.style.backgroundColor = 'orange';

  } else {
      row.style.backgroundColor = '';
      submitButton.style.backgroundColor = '';
  }
}







var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");
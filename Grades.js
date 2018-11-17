var overall_grade = 0;
var avg_mark = 0;
var total_marks = 0;
var grade;
var mark;
var grade_table = document.getElementById("z_a");
var col_length = grade_table.tBodies.item(0).rows[0].cells.length;

for(i = 0; i < grade_table.tBodies.item(0).rows[0].cells.length; i++){
  if(grade_table.tBodies.item(0).rows[0].cells[i].innerText == "Weight Achieved"){
    var weight_index = i;
  }
}

for(i = 1; i < grade_table.tBodies.item(0).rows.length - 1; i++){
  grade = grade_table.tBodies.item(0).rows[i].cells[weight_index].innerText;
  mark = parseFloat(grade.slice(0, grade.indexOf('/')));
  
  if(!isNaN(mark)){
    overall_grade += mark;
    if(mark != 0){
      avg_mark += mark;
      total_marks += parseFloat(grade.slice(grade.indexOf('/')+1, grade.length));
    }
  }
}

//var overall_mark_row = grade_table.insertRow(0);
//var overall_mark_text = overall_mark_row.insertCell(0);
//var overall_mark_num = overall_mark_row.insertCell(1);

//overall_mark_text.innerHTML = "Total Grade Overall Achieved:";
//overall_mark_text.setAttribute("colspan", col_length - 1);
//overall_mark_num.innerHTML = overall_grade.toFixed(2) + "%";
var average_mark_row = grade_table.insertRow(0); // set to 1 when overall is fixed
var average_mark_text = average_mark_row.insertCell(0);
if(total_marks > 0){
  var average_mark_num = average_mark_row.insertCell(1);
  average_mark_text.innerHTML = "Current Average:";
  average_mark_num.innerHTML = ((avg_mark/total_marks)*100).toFixed(2) + "%";
  average_mark_text.setAttribute("colspan", col_length);
  average_mark_num.setAttribute("style", "text-align:right"); 
}else{
  average_mark_text.innerHTML = "Average not currently available.";
}

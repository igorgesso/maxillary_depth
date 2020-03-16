Exams.Gui = class{
    constructor(){
        this.$tbody = $("[data-exams='exams']")
    }

    addExams(exams){
        console.log(exams)
        this.$tbody.html('')
        for(let exam of exams){
          let row = this.examRow(exam)
          this.$tbody.append(row)
        }
    }

    examRow(exam){
        let html = `<tr> <td>x: ${exam.point_po.x}, y: ${exam.point_po.x} </td>`
        html += `<td>x: ${exam.point_or.x}, y: ${exam.point_or.x} </td>`
        html += `<td>x: ${exam.point_n.x}, y: ${exam.point_n.x} </td>`
        html += `<td>x: ${exam.point_a.x}, y: ${exam.point_a.x} </td>`
        html += `<td>${exam.maxillary_depth_angle}</td>`
        html += `<td>
            <div class="float-right">
                <a class="btn btn-sm btn-secondary" href="/patients/${exam.patient_id}/exams/${exam.id}">Show</a>
                <a class="btn btn-sm btn-secondary" href="/patients/${exam.patient_id}/exams/${exam.id}/edit">Edit</a>
                <a class="btn btn-sm btn-danger delete" data-confirm="Are you sure?" data-remote=true rel="nofollow" data-method="delete" href="/patients/${exam.patient_id}/exams/${exam.id}">Destroy</a>
            </div>
      </td>`
      return html += `</tr>`

    }


}
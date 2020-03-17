Exams.Gui = class{
    constructor(){
        this.$tbody = $("[data-exams='exams']")
        this.bindEvents()
    }

    bindEvents(){ 
       this.$tbody.on('click', "[data-exams='edit-button']", (e) => this.clickHandlerToShowEditForm(e))
    }

    clickHandlerToShowEditForm(event){
        //usar o load para carregar no modal o formulario
        var href = event.target.href
        // console.log('click handler to edit form')
        console.log(event)
        
        event.preventDefault()
        $("[data-exams='modal-content']").load(href);

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
        let html = `<tr> <td>x: ${exam.point_po.x}, y: ${exam.point_po.y} </td>`
        html += `<td>x: ${exam.point_or.x}, y: ${exam.point_or.y} </td>`
        html += `<td>x: ${exam.point_n.x}, y: ${exam.point_n.y} </td>`
        html += `<td>x: ${exam.point_a.x}, y: ${exam.point_a.y} </td>`
        html += `<td>${exam.maxillary_depth_angle}</td>`
        html += `<td>
            <div class="float-right">
                <a class="btn btn-sm btn-secondary" href="/patients/${exam.patient_id}/exams/${exam.id}">Show</a>
                <a class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#myModal" data-exams='edit-button' href="/patients/${exam.patient_id}/exams/${exam.id}/edit">Edit</a>
                <a class="btn btn-sm btn-danger delete" data-confirm="Are you sure?" data-remote=true rel="nofollow" data-method="delete" href="/patients/${exam.patient_id}/exams/${exam.id}">Destroy</a>
            </div>
      </td>`
      return html += `</tr>`

    }


}
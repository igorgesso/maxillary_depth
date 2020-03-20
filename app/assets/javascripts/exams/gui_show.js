Exams.ShowGui = class{
    constructor(){
        this.$tbody = $("[data-exams='exams-show']")
        this.bindEvents()
    }

    bindEvents(){
       $("[data-exams='add-exam-button']").on("click", (e) => this.btnClickHandlerToShowCreateForm(e))  
       this.$tbody.on('click', "[data-exams='edit-button']", (e) => this.clickHandlerToShowEditForm(e))
       $("[data-exams='modal']").on("ajax:success", (e) => this.responseSuccessHandler(e))
       $("[data-exams='modal']").on("ajax:error", (e) => this.responseErrorHandler())
       $("[data-exams='modal']").on("ajax:complete", (e) => this.responseCompleteHandler())
    }

    btnClickHandlerToShowCreateForm(event){
        var href = event.target.href        
        event.preventDefault()
        $("[data-exams='modal-content']").load(href);
    }

    clickHandlerToShowEditForm(event){
        var href = event.target.href        
        event.preventDefault()
        $("[data-exams='modal-content']").load(href);
    }

    responseSuccessHandler(event){
        let detail = event.detail;
        let exam = detail[0], status = detail[1];
        if($(`[data-exam-id="${exam.id}"]`).length > 0){
            let tr = $(`[data-exam-id="${exam.id}"]`)
            tr.after(this.examRow(exam))
            tr.remove()
          }else{
            this.$tbody.append(this.examRow(exam))
          }
        Swal.fire({
            title: 'Exam successfully created or edited!',
            showConfirmButton: false,
            type: 'success',
            timer: 2500,
            position: 'top',
            showConfirmButton: false}
        )
    }

    responseCompleteHandler(){
        $("[data-exams='modal']").modal('hide')
    }

    responseErrorHandler(){
        Swal.fire(
            'Error on exam create/edit!',
            'You clicked the button!',
            'error'
          )
        // alert('Error on exam create/edit')
      }

    //   btnClickHandlerToShowExam(event){
    //       console.log("passou")
    //       console.log($(event.target).data().examsId)
    //   }

    addExam(exams){
        this.$tbody.html('')
        let row = this.examRow(exams)
        this.$tbody.append(row)
    }

    examRow(exam){
        let html = `<tr data-exam-id='${exam.id}'>` 
        html += `<td>x: ${exam.point_po.x}, y: ${exam.point_po.y} </td>`
        html += `<td>x: ${exam.point_or.x}, y: ${exam.point_or.y} </td>`
        html += `<td>x: ${exam.point_n.x}, y: ${exam.point_n.y} </td>`
        html += `<td>x: ${exam.point_a.x}, y: ${exam.point_a.y} </td>`
        html += `<td>${exam.maxillary_depth_angle}</td>`
        html += `<td>
            <div class="float-right">
                <a class="btn btn-sm btn-secondary" data-toggle="modal" data-target="#myModal" data-exams='edit-button' href="/patients/${exam.patient_id}/exams/${exam.id}/edit">Edit</a>
                <a class="btn btn-sm btn-danger delete" data-confirm="Are you sure?" data-remote=true rel="nofollow" data-method="delete" href="/patients/${exam.patient_id}/exams/${exam.id}">Destroy</a>
            </div>
      </td>`
      return html += `</tr>`

    }


}
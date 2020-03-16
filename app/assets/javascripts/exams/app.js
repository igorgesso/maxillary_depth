Exams.App = class{
    constructor(){
        this.backend = new Exams.Backend($("[data-exams='exams']").data().examsPatientId)
        this.gui = new Exams.Gui()
    }

    start(){
         this.backend.getExams().then(this.gui.addExams.bind(this.gui))
    }
}
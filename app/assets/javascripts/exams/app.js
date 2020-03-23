Exams.App = class{
    constructor(){
        this.$examsIndex = $("[data-exams='exams-index']");
        this.$examsShow = $("[data-exams='exams-show']");
        this.$examCanvas = $("[data-canvas='canvas']");
        this.backend = new Exams.Backend($("[data-exams]").data().examsPatientId);
        
    }

    start(){
        if(this.$examsIndex.length > 0){
            this.gui = new Exams.IndexGui();
            this.backend.getExams().then(this.gui.addExams.bind(this.gui));
        }else if(this.$examsShow.length > 0 ){
            let examId = $("[data-exams-id]").data().examsId
            this.gui = new Exams.ShowGui();
            this.canvas = new Exams.ExamCanvas();
            this.backend.getExam(examId).then(this.gui.addExam.bind(this.gui));
            
        // console.log(this.$examsShow)
        // console.log("Divido")
        // console.log(this.backend)
        }
        


    }
}
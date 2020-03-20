Exams.Backend = class{
    constructor(patientId){
        this.patientId = patientId
    }

    getExams(){
        return fetch(`/patients/${this.patientId}/exams`).then((response) => response.json())
    }

    getExam(examId){
        return fetch(`/patients/${this.patientId}/exams/${examId}.json`).then((response) => response.json())
    }
}   

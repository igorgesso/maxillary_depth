class ExamsController < ApplicationController
  before_action :set_exam, only: [:show, :edit, :update, :destroy]
  before_action :set_patient

  # GET /exams
  # GET /exams.json
  def index
    @exams = @patient.exams
    render json: @exams.includes(:point_po, :point_or, :point_a, :point_n), include: [:point_po, :point_or, :point_n, :point_a], methods: :maxillary_depth_angle
  end

  # GET /exams/1
  # GET /exams/1.json
  def show
  end

  # GET /exams/new
  def new
    @exam = Exam.new
    @exam.point_po = Point.new
    @exam.point_or = Point.new
    @exam.point_n = Point.new
    @exam.point_a = Point.new
  end

  # GET /exams/1/edit
  def edit
  end

  # POST /exams
  # POST /exams.json
  def create
    @exam = Exam.new(exam_params)
    @exam.patient = @patient

    respond_to do |format|
      if @exam.save
        format.html { redirect_to patient_path(@patient), notice: 'Exam was successfully created.' }
        format.json { render :show, status: :created, location: @exam }
      else
        format.html { render :new }
        format.json { render json: @exam.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /exams/1
  # PATCH/PUT /exams/1.json
  def update
    respond_to do |format|
      if @exam.update(exam_params)
        format.html { redirect_to patient_path(@patient), notice: 'Exam was successfully updated.' }
        format.json { render :show, status: :ok, location: @exam }
      else
        format.html { render :edit }
        format.json { render json: @exam.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /exams/1
  # DELETE /exams/1.json
  def destroy
    @exam.destroy
    respond_to do |format|
      format.html { redirect_to patient_path(@patient), notice: 'Exam was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exam
      @exam = Exam.find(params[:id])
    end

    def set_patient
      @patient = Patient.find(params[:patient_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def exam_params
      params.require(:exam).permit(:patient_id, point_po_attributes: [:x,:y], point_n_attributes: [:x,:y], point_or_attributes: [:x,:y], point_a_attributes: [:x,:y])
    end
end



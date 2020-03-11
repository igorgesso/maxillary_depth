class AddPointsToExam < ActiveRecord::Migration[5.2]
  def change
    add_column :exams, :point_po_id, :integer
    add_column :exams, :point_or_id, :integer
    add_column :exams, :point_n_id, :integer
    add_column :exams, :point_a_id, :integer
  end
end

json.extract! exam, :id, :patient_id, :created_at, :updated_at, :point_po_id, :point_po, :point_or_id, :point_or, :point_n_id, :point_n, :point_a_id, :point_a, :maxillary_depth_angle
json.url patient_exam_path(exam, format: :json)

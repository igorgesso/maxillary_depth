class Patient < ApplicationRecord
	validates :name, presence: true
	validates :birthdate, presence: true

	has_many :exams
end

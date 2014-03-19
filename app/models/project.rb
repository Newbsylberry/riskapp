class Project < ActiveRecord::Base
  belongs_to :portfolio
  has_many :risk_statuses
  has_many :risk_control_categories
  has_many :risk_types
  has_many :risks
end

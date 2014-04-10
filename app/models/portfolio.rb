class Portfolio < ActiveRecord::Base
  has_many :projects
  has_many :risks, through: :projects

  #portfolio attributes
  has_many :risk_control_categories
  has_many :risk_statuses
  has_many :risk_types
  has_many :events
end

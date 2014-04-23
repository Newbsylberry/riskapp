class RiskType < ActiveRecord::Base
  has_many :risks
  belongs_to :portfolio
end

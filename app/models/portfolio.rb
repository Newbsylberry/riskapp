class Portfolio < ActiveRecord::Base
  has_many :projects
  has_many :risks, through: :projects
end

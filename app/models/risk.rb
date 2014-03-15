class Risk < ActiveRecord::Base
  belongs_to :risk_type
  belongs_to :risk_strategy
  belongs_to :risk_control_category
  belongs_to :project
end

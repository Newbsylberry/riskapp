class AddProbabilityToRisk < ActiveRecord::Migration
  def change
    add_column :risks, :probability, :decimal
    add_column :risks, :schedule_impact, :integer
  end
end

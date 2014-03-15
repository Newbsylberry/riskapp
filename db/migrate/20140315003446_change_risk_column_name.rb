class ChangeRiskColumnName < ActiveRecord::Migration
  def change
    rename_column :risks, :late_impact, :late_impact_date
  end
end

class ChangeRiskImpactName < ActiveRecord::Migration
  def change
    rename_column :risks, :impact, :impact_rating
  end
end

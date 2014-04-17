class DropProbabilityColumnFromRisks < ActiveRecord::Migration
  def change
      remove_column :risks, :probability
  end
end

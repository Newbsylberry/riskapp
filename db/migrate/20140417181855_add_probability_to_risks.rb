class AddProbabilityToRisks < ActiveRecord::Migration
  def change
    add_column :risks, :probability, :decimal
  end
end

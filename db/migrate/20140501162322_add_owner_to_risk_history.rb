class AddOwnerToRiskHistory < ActiveRecord::Migration
  def change
    add_column :risk_histories, :owner, :string
  end
end

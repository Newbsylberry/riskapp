class AddOwnerToRisks < ActiveRecord::Migration
  def change
    add_column :risks, :owner, :string
  end
end

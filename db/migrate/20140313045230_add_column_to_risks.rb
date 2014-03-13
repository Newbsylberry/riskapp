class AddColumnToRisks < ActiveRecord::Migration
  def change
    add_column :risks, :name, :string
    add_column :risks, :description, :string
  end
end

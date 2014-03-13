class AddColumnToProject < ActiveRecord::Migration
  def change
    add_column :projects, :portfolio_id, :integer
  end
end

class AddIdColumnsToRisks < ActiveRecord::Migration
  def change
    add_column :risks, :event_id, :integer
    add_column :risks, :risk_type_id, :integer
    add_column :risks, :risk_status_id, :integer
    add_column :risks, :risk_control_category_id, :integer
  end
end

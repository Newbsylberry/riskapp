class CreateRiskStatuses < ActiveRecord::Migration
  def change
    create_table :risk_statuses do |t|
      t.integer :project_id
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end

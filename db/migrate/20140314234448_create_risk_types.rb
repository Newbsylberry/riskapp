class CreateRiskTypes < ActiveRecord::Migration
  def change
    create_table :risk_types do |t|
      t.integer :project_id
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end

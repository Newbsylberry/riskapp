class CreateRiskControlCategories < ActiveRecord::Migration
  def change
    create_table :risk_control_categories do |t|
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end

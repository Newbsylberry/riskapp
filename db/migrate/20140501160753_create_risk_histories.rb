class CreateRiskHistories < ActiveRecord::Migration
  def change
    create_table :risk_histories do |t|
      t.integer :risk_id
      t.boolean :critical
      t.integer :impact_rating
      t.datetime :early_impact_date
      t.datetime :late_impact_date
      t.integer :schedule_impact
      t.decimal :probability
      t.integer :event_id
      t.integer :risk_type_id
      t.integer :risk_status_id
      t.integer :risk_control_category_id

      t.timestamps
    end
  end
end

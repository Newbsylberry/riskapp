class CreateRisks < ActiveRecord::Migration
  def change
    create_table :risks do |t|
      t.string :name
      t.string :description
      t.integer :impact_rating
      t.datetime :early_impact_date
      t.datetime :late_impact_date
      t.boolean :critical
      t.integer :probability
      t.integer :schedule_impact

      t.timestamps
    end
  end
end

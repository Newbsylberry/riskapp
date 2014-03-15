class AddDetailsToRisk < ActiveRecord::Migration
  def change
    add_column :risks, :impact, :integer
    add_column :risks, :date_identified, :datetime
    add_column :risks, :early_impact_date, :datetime
    add_column :risks, :late_impact, :datetime
    add_column :risks, :control, :string
    add_column :risks, :critical, :boolean
  end
end

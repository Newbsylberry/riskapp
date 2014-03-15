class AddColumnsToProject < ActiveRecord::Migration
  def change
    add_column :projects, :short_term_impact_time_date, :datetime
    add_column :projects, :middle_impact_time_frame_date, :datetime
    add_column :projects, :expected_end_date, :datetime
  end
end

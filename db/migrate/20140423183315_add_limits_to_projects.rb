class AddLimitsToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :short_term_limit, :integer
    add_column :projects, :mid_term_limit, :integer
  end
end

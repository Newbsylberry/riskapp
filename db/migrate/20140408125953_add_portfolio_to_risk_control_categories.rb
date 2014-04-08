class AddPortfolioToRiskControlCategories < ActiveRecord::Migration
  def change
    add_column :risk_control_categories, :portfolio_id, :integer
  end
end

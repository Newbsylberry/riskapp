class AddPortfolioToRiskTypes < ActiveRecord::Migration
  def change
    add_column :risk_types, :portfolio_id, :integer
  end
end

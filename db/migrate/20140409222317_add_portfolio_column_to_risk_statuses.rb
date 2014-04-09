class AddPortfolioColumnToRiskStatuses < ActiveRecord::Migration
  def change
    add_column :risk_statuses, :portfolio_id, :integer
  end
end

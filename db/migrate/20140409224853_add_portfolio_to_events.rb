class AddPortfolioToEvents < ActiveRecord::Migration
  def change
    add_column :events, :portfolio_id, :integer
  end
end

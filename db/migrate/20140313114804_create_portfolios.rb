class CreatePortfolios < ActiveRecord::Migration
  def change
    create_table :portfolios do |t|
      t.string :name
      t.string :description

      t.timestamps

      create_table :risks do |t|
        t.string :name
        t.string :description
      end
    end
  end
end

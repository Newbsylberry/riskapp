class PortfoliosController < ApplicationController
  respond_to :json

  def index
    @portfolios = Portfolio.all
  end

  def create
    respond_with Portfolio.create(portfolio_params)
  end

  def destroy
    respond_with Portfolio.destroy(params[:id])
  end

  def show
    @portfolio = Portfolio.find(params[:id])
    @short_term_risks = Array.new
    @portfolio.risks.each do |risk|
      if risk.short_term_risk?
        @short_term_risks << risk
      else
        false
      end
    end

    @mid_term_risks = Array.new
    @portfolio.risks.each do |risk|
      if risk.mid_term_risk?
        @mid_term_risks << risk
      else
        false
      end
    end
    @long_term_risks = Array.new
    @portfolio.risks.each do |risk|
      if risk.long_term_risk?
        @long_term_risks << risk
      else
        false
      end
    end
  end

  private

  def portfolio_params
    params.require(:portfolio).permit(:name, :description)
  end
end

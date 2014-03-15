class PortfoliosController < ApplicationController
  respond_to :json

  def index
    @portfolios = Portfolio.all
  end

  def create
    @portfolio = Portfolio.find(params[:id])
    respond_with Portfolio.create(portfolio_params)
  end

  def destroy
    respond_with Portfolio.destroy(params[:id])
  end

  def show
    @portfolio = Portfolio.find(params[:id])
  end

  private

  def portfolio_params
    params.require(:portfolio).permit(:name, :description)
  end
end

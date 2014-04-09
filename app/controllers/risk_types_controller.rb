class RiskTypesController < ApplicationController
  respond_to :json

  def index
    @risk_typees = Risk.all
  end

  def create
    respond_with RiskType.create(risk_params)
  end

  def destroy
    respond_with RiskType.destroy(params[:id])
  end

  def show
    @risk_type = RiskType.find(params[:id])
  end

  private

  def risk_params
    params.require(:risk_type).permit(:name, :description, :portfolio_id)
  end
end

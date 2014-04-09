class RiskStatusesController < ApplicationController
  respond_to :json

  def index
    @risk_statuses = Risk.all
  end

  def create
    respond_with RiskStatus.create(risk_params)
  end

  def destroy
    respond_with RiskStatus.destroy(params[:id])
  end

  def show
    @risk_status = RiskStatus.find(params[:id])
  end

  private

  def risk_params
    params.require(:risk_status).permit(:name, :description, :portfolio_id)
  end
end

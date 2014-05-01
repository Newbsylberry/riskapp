class RisksController < ApplicationController
  respond_to :json


  def index
    @risks = Risk.all
  end

  def create
    respond_with Risk.create(risk_params)
  end

  def update
    respond_with Risk.update(params[:id], params[risk_params])
  end

  def destroy
    respond_with Risk.destroy(params[:id])
  end

  def show
    @risk = Risk.find(params[:id])
    @portfolio = Portfolio.find(@risk.project.portfolio)
  end


private

  def risk_params
    params.require(:risk).permit(:name, :description, :impact_rating, :early_impact_date,
    :late_impact_date, :critical, :probability, :schedule_impact, :project_id, :event_id,
    :risk_type_id, :risk_status_id, :risk_control_category_id, :owner)
  end
end


class RiskControlCategoriesController < ApplicationController
  respond_to :json

  def index
    @risk_control_category = RiskControlCategory.all
  end

  def create
    respond_with RiskControlCategory.create(risk_params)
  end

  def destroy
    respond_with RiskControlCategory.destroy(params[:id])
  end

  def show
    @risk_control_category = RiskControlCategory.find(params[:id])
  end

  private

  def risk_params
    params.require(:risk_control_category).permit(:name, :description, :portfolio_id)
  end
end

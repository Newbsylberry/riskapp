class RisksController < ApplicationController
  respond_to :json

  def index
    @risks = Risk.all
  end

  def create
    respond_with Risk.create(risk_params)
  end

  def destroy
    respond_with Risk.destroy(params[:id])
  end

  def show
    @risk = Risk.find(params[:id])
  end

private

  def risk_params
    params.require(:risk).permit(:name, :description)
  end
end


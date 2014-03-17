class ProjectsController < ApplicationController
  respond_to :json

  def index
    @projects = Project.all
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project
    else
      head :error
    end
  end

  def destroy
    respond_with Project.destroy(params[:id])
  end

  def show
    @project = Project.find(params[:id])
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :portfolio_id)
  end
end

class ProjectsController < ApplicationController
  respond_to :json

  def index
    @projects = Project.all
  end

  def create
    respond_with Project.create(project_params)
  end

  def destroy
    respond_with Project.destroy(params[:id])
  end

  def show
    @project = Project.find(params[:id])
  end

  private

  def project_params
    params.require(:project).permit(:name, :description)
  end
end

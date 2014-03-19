class EventsController < ApplicationController
  respond_to :json

  def index
    @events = Event.all
  end

  def create
    respond_with Event.create(event_params)
  end

  def destroy
    respond_with Event.destroy(params[:id])
  end

  def show
    @event = Event.find(params[:id])
  end

  private

  def event_params
    params.require(:event).permit(:name, :description, :event_date)
  end
end

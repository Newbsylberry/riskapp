class RisksController < ApplicationController
  respond_to :json

  def index
    respond_with Risk.all
  end
end

class Api::V1::IncitingIncidentsController < ApplicationController
  before_action :set_inciting_incident, only: [:show, :update, :destroy]

  # GET /inciting_incidents
  def index
    @inciting_incidents = IncitingIncident.all

    render json: @inciting_incidents
  end

  # GET /inciting_incidents/1
  def show
    render json: @inciting_incident
  end

  # POST /inciting_incidents
  def create
    @inciting_incident = IncitingIncident.new(inciting_incident_params)

    if @inciting_incident.save
      render json: @inciting_incident, status: :created, location: @inciting_incident
    else
      render json: @inciting_incident.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /inciting_incidents/1
  def update
    if @inciting_incident.update(inciting_incident_params)
      render json: @inciting_incident
    else
      render json: @inciting_incident.errors, status: :unprocessable_entity
    end
  end

  # DELETE /inciting_incidents/1
  def destroy
    @inciting_incident.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_inciting_incident
      @inciting_incident = IncitingIncident.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def inciting_incident_params
      params.require(:inciting_incident).permit(:description)
    end
end

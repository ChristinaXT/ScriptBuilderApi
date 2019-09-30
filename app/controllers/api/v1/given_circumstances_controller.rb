class Api::V1::GivenCircumstancesController < ApplicationController
  before_action :set_given_circumstance, only: [:show, :update, :destroy]

  # GET /given_circumstances
  # def index
  #   @given_circumstances = GivenCircumstance.all
  #
  #   render json: @given_circumstances
  # end

  # GET /given_circumstances/1
  def show
    render json: @given_circumstance
  end

  # POST /given_circumstances
  def create
    @given_circumstance = GivenCircumstance.new(given_circumstance_params)

    if @given_circumstance.save
      render json: @given_circumstance, status: :created
    else
      render json: @given_circumstance.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /given_circumstances/1
  def update
    if @given_circumstance.update(given_circumstance_params)
      render json: @given_circumstance
    else
      render json: @given_circumstance.errors, status: :unprocessable_entity
    end
  end

  # DELETE /given_circumstances/1
  def destroy
    @given_circumstance.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_given_circumstance
      @given_circumstance = GivenCircumstance.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def given_circumstance_params
      params.require(:given_circumstance).permit(:character_background, :character_id)
    end
end

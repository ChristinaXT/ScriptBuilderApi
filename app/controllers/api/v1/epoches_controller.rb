class Api::V1::EpochesController < ApplicationController
  before_action :set_epoch, only: [:show, :update, :destroy]

    # GET /epoches
    # def index
    #   @epoches = Epoch.all
    #   render json: @epoches
    # end

    # GET /epoches/1
    def show
      render json: @epoch
    end

    # POST /epoches
    def create
      @epoch = Epoch.new(epoch_params)
      if @epoch.save
        render json: @epoch, status: :created
      else
        render json: @epoch.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /epoches/1
    def update
      if @epoch.update(epoch_params)
        render json: @epoch
      else
        render json: @epoch.errors, status: :unprocessable_entity
      end
    end

    # DELETE /epoches/1
    def destroy
      @epoch.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_epoch
        @epoch = Epoch.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def epoch_params
        params.require(:epoch).permit(:time_period)
      end
end

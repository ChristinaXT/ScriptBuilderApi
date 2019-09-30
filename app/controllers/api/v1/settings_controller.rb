class Api::V1::SettingsController < ApplicationController
  before_action :set_setting, only: [:show, :update, :destroy]

  def show
    render json: @setting
  end

  # POST /settings
  def create
    @setting = Setting.new(user_params)

    if @setting.save
      render json: @setting, status: :created
    else
      render json: @setting.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /settings/1
  def update
    if @setting.update(setting_params)
      render json: @setting
    else
      render json: @setting.errors, status: :unprocessable_entity
    end
  end

  # DELETE /settings/1
  def destroy
    @setting.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_setting
      @setting = Setting.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def setting_params
      params.require(:setting).permit(:place)
    end
end

class Api::V1::StoriesController < ApplicationController
  before_action :set_story, only: [:show, :update, :destroy]

  # GET /stories
  def index
    if logged_in?
     @stories = current_user.stories

     render json: StorySerializer.new(@stories)
   else
     render json: {
       error: "You must be logged in to see stories"
     }
    end
  end

  # GET /stories/1
  def show
    render json: @story
  end

  # POST /stories
  def create
    @story = current_user.stories.build(story_params)

    if @story.save
      render json:  StorySerializer.new(@story), status: :created
    else
      error_resp = {
      error: @story.errors.full_messages.to_sentence
    }
    render json: error_resp, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stories/1
  def update
    if @story.update(story_params)
      render json: StorySerializer.new(@story), status: :ok
    else
      error_resp = {
      error: @story.errors.full_messages.to_sentence
    }
      render json: @story.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stories/1
  def destroy
    if @story.destroy
      render json:  { data: "Story successfully deleted" }, status: :ok
    else
      error_resp = {
        error: "Story not found and not deleted"
      }
      render json: error_resp, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_story
      @story = Story.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def story_params
      params.require(:story).permit(:title, :epoch, :inciting_incident, :setting, :synopsis, :character)
    end
end

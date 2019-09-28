require 'test_helper'

class GivenCircumstancesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @given_circumstance = given_circumstances(:one)
  end

  test "should get index" do
    get given_circumstances_url, as: :json
    assert_response :success
  end

  test "should create given_circumstance" do
    assert_difference('GivenCircumstance.count') do
      post given_circumstances_url, params: { given_circumstance: { character_background: @given_circumstance.character_background, character_id: @given_circumstance.character_id } }, as: :json
    end

    assert_response 201
  end

  test "should show given_circumstance" do
    get given_circumstance_url(@given_circumstance), as: :json
    assert_response :success
  end

  test "should update given_circumstance" do
    patch given_circumstance_url(@given_circumstance), params: { given_circumstance: { character_background: @given_circumstance.character_background, character_id: @given_circumstance.character_id } }, as: :json
    assert_response 200
  end

  test "should destroy given_circumstance" do
    assert_difference('GivenCircumstance.count', -1) do
      delete given_circumstance_url(@given_circumstance), as: :json
    end

    assert_response 204
  end
end

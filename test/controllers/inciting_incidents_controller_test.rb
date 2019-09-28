require 'test_helper'

class IncitingIncidentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @inciting_incident = inciting_incidents(:one)
  end

  test "should get index" do
    get inciting_incidents_url, as: :json
    assert_response :success
  end

  test "should create inciting_incident" do
    assert_difference('IncitingIncident.count') do
      post inciting_incidents_url, params: { inciting_incident: { description: @inciting_incident.description } }, as: :json
    end

    assert_response 201
  end

  test "should show inciting_incident" do
    get inciting_incident_url(@inciting_incident), as: :json
    assert_response :success
  end

  test "should update inciting_incident" do
    patch inciting_incident_url(@inciting_incident), params: { inciting_incident: { description: @inciting_incident.description } }, as: :json
    assert_response 200
  end

  test "should destroy inciting_incident" do
    assert_difference('IncitingIncident.count', -1) do
      delete inciting_incident_url(@inciting_incident), as: :json
    end

    assert_response 204
  end
end

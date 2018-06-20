class Api::V2::EventsController < ActionController::Base

  # POST: /api/v2/events
  def create
    SnsListenerService.sns_message(JSON.parse(request.raw_post), params[:aid])
    head :ok
  end
end
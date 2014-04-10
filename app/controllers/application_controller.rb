class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery
  helper_method :short_term_risk?, :mid_term_risk?, :long_term_risk?

  after_filter :set_csrf_cookie_for_ng
  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end


  protected
  def verified_request?
    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
  end
end

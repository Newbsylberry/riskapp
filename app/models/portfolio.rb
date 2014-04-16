class Portfolio < ActiveRecord::Base
  has_many :projects
  has_many :risks, through: :projects

  #portfolio attributes
  has_many :risk_control_categories
  has_many :risk_statuses
  has_many :risk_types
  has_many :events

  def total_exposure
    risks.to_a.sum { |r| r.exposure }
  end

  def short_term_exposure
    @short_term_risk = 0
    risks.each do |risk|
      if risk.short_term_risk?
        @short_term_risk = @short_term_risk + risk.exposure
      end
    end
    return @short_term_risk
  end

  def mid_term_exposure
    @mid_term_risk = 0
    risks.each do |risk|
      if risk.mid_term_risk?
        @mid_term_risk = @mid_term_risk + risk.exposure
      end
    end
    return @mid_term_risk
  end

  def long_term_exposure
    @long_term_risk = 0
    risks.each do |risk|
      if risk.long_term_risk?
        @long_term_risk = @long_term_risk + risk.exposure
      end
    end
    return @long_term_risk
  end
end

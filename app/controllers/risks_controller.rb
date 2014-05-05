class RisksController < ApplicationController
  respond_to :json


  def index
    @risks = Risk.all
  end

  def create
    respond_with Risk.create(risk_params)
  end

  def update
    @initial_risk = Risk.find(params[:id])
    @risk = Risk.find(params[:id])
    respond_with @risk.update_attributes(risk_params)
    if @risk.update(risk_params)
      RiskHistory.create(risk_id: @initial_risk.id, impact_rating: @initial_risk.impact_rating,
                         early_impact_date: @initial_risk.early_impact_date,
                         late_impact_date: @initial_risk.late_impact_date,
                         critical: @initial_risk.critical, probability: @initial_risk.probability,
                         schedule_impact: @schedule_impact,
                         risk_type_id: @initial_risk.risk_type_id, risk_status_id: @initial_risk.risk_status_id,
                         risk_control_category_id: @initial_risk.risk_control_category_id, owner: @initial_risk.owner)

    end
  end

  def destroy
    respond_with Risk.destroy(params[:id])
  end

  def show
    @risk = Risk.find(params[:id])
    @portfolio = Portfolio.find(@risk.project.portfolio)
    @stop_words = ["a", "about", "all", "allow", "almost", "also", "am", "an", "and", "any", "are",
                   "as", "at", "be", "don't", "from", "get", "go", "had", "into", "is", "isn't", "it",
                   "because", "both", "but", "by", "can", "do", "does", "doesn't", "etc", "few", "for",
                   "has", "have", "he", "her", "him", "his", "how", "I", "i.e.", "ie", "in", "if", "in",
                   "it's", "its", "just", "keep", "know", "last", "let", "like", "likely", "many",
                   "may", "maybe", "me", "might", "nor", "not", "now", "of", "off", "que", "same", "shall", "she",
                   "more", "most", "much", "must", "my", "name", "new", "next", "no", "none",
                   "often", "oh", "ok", "on", "only", "onto", "or", "other", "our", "per", "plus",
                   "should", "since", "so", "some", "soon", "still", "that", "the", "there",
                   "thereby", "therefore", "these", "they", "value", "very", "via", "vs", "was",
                   "this", "those", "thus", "to", "too", "try", "until", "up", "upon", "use",
                   "way", "we", "well", "went", "were", "what", "what", "where", "which", "while",
                   "with", "within", "without", "won't", "would", "yes", "yet", "you", "who", "why", "will",]
    @key_words = @risk.name.split(" ")
    @related_risks = Array.new
    @portfolio.risks.each do |risk|
      if risk != @risk
        @related_array = risk.name.split(" ")
        @intersect = @key_words & @related_array - @stop_words
        if @intersect.count > 0
          @related_risks.push(risk)
        end
      end
    end
  end


  private

  def risk_params
    params.require(:risk).permit(:name, :description, :impact_rating, :early_impact_date,
                                 :late_impact_date, :critical, :probability, :schedule_impact, :project_id, :event_id,
                                 :risk_type_id, :risk_status_id, :risk_control_category_id, :owner)
  end




end





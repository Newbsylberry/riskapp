class PortfoliosController < ApplicationController
  respond_to :json

  def index
    @portfolios = Portfolio.all
  end

  def create
    @portfolio = Portfolio.new(portfolio_params)
    if @portfolio.save
      RiskType.create(name: 'Scope', description: 'A risk that is related to the scope of the project.',
                      portfolio_id: @portfolio.id)
      RiskType.create(name: 'Cost', description: 'A risk that will is directly related to the budget of the project',
                      portfolio_id: @portfolio.id)
      RiskType.create(name: 'Schedule', description: 'A risk that affects the project schedule',
                      portfolio_id: @portfolio.id)
      RiskControlCategory.create(name: 'Internal', description: 'The risk is able to be controlled by the project team',
                                 portfolio_id: @portfolio.id)
      RiskControlCategory.create(name: 'External', description: 'The risk is outside of the project teams control',
                                 portfolio_id: @portfolio.id)
      RiskStatus.create(name: 'Transfer', description: 'The risk has been identified.',
                        portfolio_id: @portfolio.id)
      RiskStatus.create(name: 'Mitigate', description: 'Steps are being taken to mitigate the risk.',
                        portfolio_id: @portfolio.id)
      RiskStatus.create(name: 'Contingency', description: 'The risk has been realized, and a contingency
                        in is place.', portfolio_id: @portfolio.id)
      RiskStatus.create(name: 'Expired', description: 'The risk has expired and is no longer a threat.',
                        portfolio_id: @portfolio.id)
    end

  end

  def destroy
    respond_with Portfolio.destroy(params[:id])
  end

  def show
    @portfolio = Portfolio.find(params[:id])
    @short_term_risks = Array.new
    @portfolio.risks.each do |risk|
      if risk.short_term_risk?
        @short_term_risks << risk
      else
        false
      end
    end

    @mid_term_risks = Array.new
    @portfolio.risks.each do |risk|
      if risk.mid_term_risk?
        @mid_term_risks << risk
      else
        false
      end
    end
    @long_term_risks = Array.new
    @portfolio.risks.each do |risk|
      if risk.long_term_risk?
        @long_term_risks << risk
      else
        false
      end
    end
  end

  private

  def portfolio_params
    params.require(:portfolio).permit(:name, :description)
  end
end

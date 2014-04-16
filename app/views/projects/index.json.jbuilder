json.array!(@projects) do |project|
  json.extract! project, :id, :name, :description,
  :total_exposure, :short_term_exposure, :mid_term_exposure,
   :long_term_exposure
  json.url project_path(project, format: :json)
end

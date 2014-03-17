json.array!(@projects) do |project|
  json.extract! project, :id, :name, :description
  json.url project_path(project, format: :json)
end

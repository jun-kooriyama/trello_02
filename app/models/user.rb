class User < ApplicationRecord
  has_many :projects, through: :group_users, dependent: :destroy
  has_many :project_users
end

class Vote < ApplicationRecord
  belongs_to :comment
  belongs_to :user
  belongs_to :post
end

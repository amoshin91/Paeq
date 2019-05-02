class CommentSerializer < ActiveModel::Serializer
  attributes :id
  has_many :likes
  belongs_to :user
  belongs_to :post
end

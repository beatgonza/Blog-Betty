class Comment < ActiveRecord::Base
  belongs_to :post
  belongs_to :user

  def time_tag_time
    created_at.strftime("%Y-%m-%dT%H:%M:%S-06:00")
  end

  def label_time
    created_at.strftime("%B %d, %Y")
  end
  
end
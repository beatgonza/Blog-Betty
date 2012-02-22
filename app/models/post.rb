class Post < ActiveRecord::Base
  belongs_to :category
  has_many :comments
  belongs_to :user

  def self.get_archive_entries
    months_with_year = Post.all.map { |p| p.created_at.strftime("%B-%Y") }
    months_with_year.empty? ? months_with_year : months_with_year.uniq
  end

  def self.get_posts_from_archive(archive_date)
    Post.all.map { |p| p if p.created_at.strftime("%B-%Y") == archive_date }
  end

  def time_tag_time
    created_at.strftime("%Y-%m-%dT%H:%M:%S-06:00")
  end

  def label_time
    created_at.strftime("%B %d, %Y")
  end

end
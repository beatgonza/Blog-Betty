class ApplicationController < ActionController::Base

  protect_from_forgery
  before_filter :load_categories
  before_filter :load_posts_month_with_year

  def load_categories
    @categories = Category.select(:name)
  end

  def load_posts_month_with_year
    @archive_entries = Post.get_archive_entries
  end

end
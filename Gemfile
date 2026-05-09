source "https://rubygems.org"

# Use a modern version of Jekyll that works well on Windows
gem "jekyll", "~> 4.3.4"

# Use the GitHub Pages plugin to keep features like Jekyll-Sitemap, etc.
gem "jekyll-remote-theme" 

# Windows compatibility gems
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-sitemap"
end

# Fix for Ruby 3.4 / 4.0+ (Standard libraries that are now bundled gems)
gem "csv"
gem "base64"
gem "bigdecimal"
gem "mutex_m"

# Fix for Ruby 3.0+
gem "webrick", "~> 1.8"

# Windows-specific event listener (prevents CPU spikes and fixes 'serve' issues)
gem "wdm", ">= 0.1.0" if Gem.win_platform?

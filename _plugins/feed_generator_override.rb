# frozen_string_literal: true

module JekyllFeed
  class Generator < Jekyll::Generator
    safe true
    priority :lowest

    alias_method :old_generate, :generate

    def generate(site)
      if site.config["feed"]["disable"]
        Jekyll.logger.info "Jekyll Feed disabled"
      else
        old_generate(site)
      end
    end
  end
end

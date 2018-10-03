FROM ruby:2.5.1
ENV LANG C.UTF-8
# for MySQL
RUN apt-get update -qq && apt-get install -y build-essential mysql-client nodejs

RUN gem install bundler
# for MySQL  
# 必要なライブラリインストール  
RUN apt-get update -qq && apt-get install -y   build-essential libpq-dev mysql-client  

# yarn環境の構築
RUN apt-get install -y curl apt-transport-https wget && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

# nodejs環境の構築
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    apt-get install nodejs

# Cannot find module node-sass対策
RUN yarn add node-sass

WORKDIR /tmp
ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock
RUN bundle install

ENV APP_HOME /myapp
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
ADD . $APP_HOME


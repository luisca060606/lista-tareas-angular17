FROM debian:12

WORKDIR /angular17news

RUN apt-get update && apt-get install -y build-essential
RUN apt-get install -y \
    curl \
    gnupg \
    git  \
    && curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g yarn

RUN node -v | cut -d "v" -f 2 > ../.nvmrc
RUN npm install -g @angular/cli@17.0.0

ADD package.json /angular17news/
ADD angular.json /angular17news/
COPY . /angular17news/

RUN yarn install --ignore-engines

EXPOSE 4200

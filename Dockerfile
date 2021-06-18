FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /com_word_app
WORKDIR /com_word_app
ADD requirements.txt /com_word_app
RUN pip install -r requirements.txt
ADD . /com_word_app

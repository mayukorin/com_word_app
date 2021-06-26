from django.shortcuts import render
from rest_framework import  views, status
from rest_framework.response import Response
from nltk.tokenize import word_tokenize
from nltk.stem.porter import PorterStemmer
import nltk

# Create your views here.

class SentenceAnalyzeView(views.APIView):

    def post(self, request, *args, **kwargs):
        token = word_tokenize(request.data["sentence"])
        print(request.data["sentence"])
        print(token)
        fd = nltk.FreqDist(token)
        print(fd.most_common(10))
        return Response(status.HTTP_200_OK)

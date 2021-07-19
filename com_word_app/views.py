from django.shortcuts import render
from rest_framework import  views, status
from rest_framework.response import Response
from nltk.tokenize import word_tokenize
from nltk.stem.porter import PorterStemmer
import nltk
import wikipedia

# Create your views here.

class SentenceAnalyzeView(views.APIView):

    def post(self, request, *args, **kwargs):
        token = word_tokenize(request.data["sentence"])
        fd = nltk.FreqDist(token)
        fd = fd.most_common(10)
        result = {}
        for f in fd:
            wiki_url = ""
            search_response = wikipedia.search(f[0])
            if search_response:
                try:
                    wiki_page = wikipedia.page(search_response[0])
                    wiki_url = wiki_page.url
                except wikipedia.DisambiguationError as e:
                    
                    wiki_url = (wikipedia.page(e.options[0])).url
        
            result[f[0]] = [wiki_url, f[1]]

        print(result)
        res_list = {
            'result': result
        }
        return Response(res_list, status=status.HTTP_200_OK)

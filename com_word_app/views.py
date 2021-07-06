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
        word_list = []
        cnt_list = []
        print(fd)
        for f in fd:
            print(f)
            wiki_url = ""
            search_response = wikipedia.search(f[0])
            print(search_response)
            if search_response:
                try:
                    # wiki_page = wikipedia.page(search_response[0])
                    wiki_page = wikipedia.page(search_response[0])
                    wiki_url = wiki_page.url
                except wikipedia.DisambiguationError as e:
                    wiki_url = "エラー発生"
                    print(e.options)
            print(wiki_url)
            word_list.append(f[0])
            cnt_list.append(f[1])
        print(word_list)
        print(cnt_list)
        res_list = {
                'words' : word_list,
                'cnt' : cnt_list,
                }

        
        return Response(res_list, status=status.HTTP_200_OK)

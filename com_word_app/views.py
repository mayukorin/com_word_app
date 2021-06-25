from django.shortcuts import render
from rest_framework import  views, status
from rest_framework.response import Response

# Create your views here.

class SentenceAnalyzeView(views.APIView):

    def post(self, request, *args, **kwargs):
        print("okkk")
        return Response(status.HTTP_200_OK)

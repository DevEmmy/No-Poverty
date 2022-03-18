from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import viewsets,views




'''
    WE ARE TO USE REST FRAMEWORK FOR THIS PROJECT , 
 
'''

# Create your views here.
def index(request):
    return HttpResponse("Hello world")

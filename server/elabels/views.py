from django.shortcuts import render
from rest_framework import viewsets
from .models import ELabel
from .serializers import ELabelSerializer

# Create your views here.

class ELabelViewSet(viewsets.ModelViewSet):
    queryset = ELabel.objects.all()
    serializer_class = ELabelSerializer

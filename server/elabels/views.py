from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import ELabel
from .serializers import ELabelSerializer

# Create your views here.

class ELabelViewSet(viewsets.ModelViewSet):
    serializer_class = ELabelSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = ELabel.objects.filter(user=self.request.user)
        company_profile_id = self.request.query_params.get('company_profile')
        if company_profile_id:
            queryset = queryset.filter(company_profile_id=company_profile_id)
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

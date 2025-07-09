from rest_framework import serializers
from .models import ELabel

class ELabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ELabel
        fields = '__all__' 
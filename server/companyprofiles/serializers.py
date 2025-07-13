from rest_framework import serializers
from .models import CompanyProfile
from utils.supabase import upload_file_to_supabase

class CompanyProfileSerializer(serializers.ModelSerializer):
    logo_file = serializers.ImageField(write_only=True, required=False)

    class Meta:
        model = CompanyProfile
        fields = '__all__'
        extra_fields = ['logo_file']

    def create(self, validated_data):
        logo_file = validated_data.pop('logo_file', None)
        instance = super().create(validated_data)
        if logo_file:
            url = upload_file_to_supabase(logo_file, f"company_logos/{instance.id}_{logo_file.name}")
            instance.logo = url
            instance.save()
        return instance

    def update(self, instance, validated_data):
        logo_file = validated_data.pop('logo_file', None)
        instance = super().update(instance, validated_data)
        if logo_file:
            url = upload_file_to_supabase(logo_file, f"company_logos/{instance.id}_{logo_file.name}")
            instance.logo = url
            instance.save()
        return instance 